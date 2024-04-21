import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../../baseUrl";
import { httpGet, httpDelete, httpPost, httpPut } from "../../utils";

export const addVisitation = createAsyncThunk('schedulingRegister/addVisitation', async (schedulRegister, {getState}) => {
    return await httpPost(`${baseUrl}/schedulingRegister`, schedulRegister);
})

const intialState = {
    status: "not_sended",
    error: null
};



const schedulingSlice = createSlice({
    name: "schedulingRegister",
    intialState,
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
    },

});

export default schedulingSlice.reducer;
