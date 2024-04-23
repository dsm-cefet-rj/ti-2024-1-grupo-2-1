import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../../baseUrl";
import { httpGet, httpDelete, httpPost, httpPut } from "../../utils";

const initialState = {
  status: "not_loaded",
  animals: [],
  error: null,
};

// Função assíncrona para buscar animais da API
export const fetchAnimais = createAsyncThunk(
  "animal/fetchAnimais",
  async () => {
    //poderia ser feito um try catch para averiguar se os dados serão pegos corretamente
    //busca os animais na API
    return await httpGet(`${baseUrl}/animals`);
    // transforma a resposta da API em json
    // return await resp.json();
  }
);

// Função reducer para atualizar o estado quando os animais forem obtidos com sucesso
function fullfillAnimalsReducer(state, action) {
  //criaçao de um novo estado de objeto com os animais requisitados
  return {
    ...state,
    status: "loaded",
    animals: action.payload,
  };
}

export const addAnimalServer = createAsyncThunk(
  "animal/addAnimalServer",
  async (animal, { getState }) => {
    return await httpPost(`${baseUrl}/animals`, animal);
  }
);

const animalSlice = createSlice({
  name: "animal",
  initialState,
  reducers: {
    changeAnimalIsFav: (state, action) => {
      //pegar o index do animal
      //payload = id
      const index = state.animals.findIndex((e) => e.id === action.payload);
      //mudar no state no index do array
      state.animals[index].isfav = !state.animals[index].isfav;

      // {Array.from(Array(state.animals), (_, index) => {
      //     return ( index )}
      //     )}
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnimais.fulfilled, fullfillAnimalsReducer)
      .addCase(fetchAnimais.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAnimais.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addAnimalServer.fulfilled, (state) => {
        state.status = "saved";
      })
      .addCase(addAnimalServer.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addAnimalServer.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
    //.addCase(fetchAnimais.pending, (state,action)=>(state.status="loading"))
    //.addCase(fetchAnimais.rejected,(state, action) => ( state.status = "failed", state.error = action.error.message))
  },
});

export const { changeAnimalIsFav } = animalSlice.actions;

export default animalSlice.reducer;
