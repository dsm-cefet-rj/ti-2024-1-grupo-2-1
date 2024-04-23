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
function fullfillPedidosReducer(state, action){
    //criaçao de um novo estado de objeto com os pedidos requisitados 
    return {
        ...state,
        status : "saved",
        orders: action.payload,
    };
};

export const addRequest = createAsyncThunk('adoptionRegister/addRegister', async (animalRegister, {getState}) => {
    return await httpPost(`${baseUrl}/animalsAdoptionRegister`, animalRegister);
})

export const deleteRequest = createAsyncThunk('adoptionRegister/deleteRequest', async (animalRegisterId, {getState}) => {
    await httpDelete(`${baseUrl}/animalsAdoptionRegister/${animalRegisterId}`);
    return animalRegisterId;
});

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
        .addCase(addRequest.fulfilled, fullfillPedidosReducer)
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
        .addCase(deleteRequest.fulfilled, (state,action) => {
            state.status = 'deleted';
            // pedidoAdapter.removeOne(state, action.payload);
          })
    },
});

export default requestAdoptionRegisterSlice.reducer;