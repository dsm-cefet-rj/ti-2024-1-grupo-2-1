import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../../baseUrl";
import { httpGet, httpDelete, httpPost, httpPut } from "../../utils";


const initialState = {
    status: "not_sended",
    visitations: [],
    error: null
};

export const getVisitations = createAsyncThunk('schedulingRegister/getVisitations', async (schedulRegister, {getState}) => {
    return await httpGet(`${baseUrl}/schedulingRegister`);
    
})

export const addVisitation = createAsyncThunk('schedulingRegister/addVisitation', async (schedulRegister, {getState}) => {
    return await httpPost(`${baseUrl}/schedulingRegister`, schedulRegister);
})


const schedulingSlice = createSlice({
    name: "schedulingRegister",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        .addCase(addVisitation.pending, (state) => {
            state.status = "loading";
        })
        .addCase(addVisitation.fulfilled, (state) => {
            state.status = "saved";
        })
        .addCase(addVisitation.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        })
        .addCase(getVisitations.fulfilled, (state, action) => {
            state.status = "loaded";
            state.visitations = action.payload;
        })
    },

});

export default schedulingSlice.reducer;
