import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../../baseUrl";
import { httpGet, httpDelete, httpPost, httpPut } from "../../utils";

const initialState = {
  status: "not_sended",
  orders: [],
  currentOrder: null,
  error: null,
};

export const getOneRegister = createAsyncThunk(
  "adoptionRegister/getOneRegister",
  async (id) => {
    return await httpGet(`${baseUrl}/animalsAdoptionRegister/${id}`);
  }
);

export const getRegisters = createAsyncThunk(
  "adoptionRegister/getRegisters",
  async () => {
    return await httpGet(`${baseUrl}/animalsAdoptionRegister`, 
    //   {
    //   headers: {
    //     Authorization: `${getState().userReducer.token}`
    //   }
    // }
  );
  }
);
function fullfillPedidosReducer(state, action) {
  //criaçao de um novo estado de objeto com os pedidos requisitados
  return {
    ...state,
    status: "saved",
    orders: action.payload,
  };
}

export const addRequest = createAsyncThunk(
  "adoptionRegister/addRegister",
  async (animalRegister, { getState }) => {
    return await httpPost(`${baseUrl}/animalsAdoptionRegister`, animalRegister, {
      headers: {
        Authorization: `${getState().userReducer.token}`
      }
    });
  }
);

export const deleteRequest = createAsyncThunk(
  "adoptionRegister/deleteRequest",
  async (animalRegisterId, { getState }) => {
    await httpDelete(`${baseUrl}/animalsAdoptionRegister/${animalRegisterId}`, {
      headers: {
        Authorization: `${getState().userReducer.token}`
      }
    });
    return animalRegisterId;
  }
);
export const updateRequest = createAsyncThunk(
  "adoptionRegister/updateRequest",
  async (request, { getState }) => {
    return await httpPut(`${baseUrl}/animalsAdoptionRegister/${request.id}`, request, {
      headers: {
        Authorization: `${getState().userReducer.token}`
      }
    });
  }
)

const requestAdoptionRegisterSlice = createSlice({
  name: "requestAdoptionRegister",
  initialState,
  reducers: {
    orderNull: (state) => {
      state.currentOrder = null;
    },
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
        state.orders = action.payload;
      })
      .addCase(getRegisters.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteRequest.fulfilled, (state, action) => {
        state.status = "deleted";
      })
      .addCase(getOneRegister.fulfilled, (state, action) => {
        state.status = "loaded";
        state.currentOrder = action.payload
      })
      .addCase(getOneRegister.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getOneRegister.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        state.currentOrder = null;
      })
      .addCase(updateRequest.rejected, (state, action) => {
        state.status = "failed";
      })
      .addCase(updateRequest.fulfilled, (state, action) => {
        state.status = "saved";
      })
  },
});
export const { orderNull } = requestAdoptionRegisterSlice.actions;

export default requestAdoptionRegisterSlice.reducer;
