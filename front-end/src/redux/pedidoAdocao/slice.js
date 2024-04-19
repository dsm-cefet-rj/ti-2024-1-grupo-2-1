import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../../baseUrl";
import { httpGet, httpDelete, httpPost, httpPut } from "../../utils";

const initialState = {
    status: "not_sended",
    error: null
};

export const addRequest = createAsyncThunk('adoptionRegister/addRegister', async (animalRegister, {getState}) => {
    return await httpPost(`${baseUrl}/animalsAdoptionRegister`, animalRegister);
})

const requestAdoptionRegisterSlice = createSlice({
    name: "requestAdoptionRegister",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        .addCase(addRequest.pending, (state) => {
            state.status = "loading";
        })
        .addCase(addRequest.fulfilled, (state) => {
            state.status = "saved";
        })
        .addCase(addRequest.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        })
    },
});

export default requestAdoptionRegisterSlice.reducer;