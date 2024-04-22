import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../../baseUrl";
import { httpGet, httpDelete, httpPost, httpPut } from "../../utils";

const initialState = {
    status: "not_sended",
    orders: [],
    error: null
};

export const getRegisters = createAsyncThunk('adoptionRegister/getRegisters', async () => {
    return await httpGet(`${baseUrl}/animalsAdoptionRegister`);
})

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
        .addCase(getRegisters.pending, (state) => {
            state.status = "loading";
        })
        .addCase(getRegisters.fulfilled, (state, action) => {
            state.status = "saved";
            state.orders = action.payload
        })
        .addCase(getRegisters.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        })
    },
});

export default requestAdoptionRegisterSlice.reducer;