import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../../baseUrl";
import { httpGet, httpDelete, httpPost, httpPut } from "../../utils";

const initialState = {
  status: "not_loaded",
  animaisFav:[],
  error: null,
};
export const fetchFavAnimals = createAsyncThunk(
  "AnimalFav/fetchFavAnimals",
  async () => {
    
    return await httpGet(`${baseUrl}/animaisFav`);
  }
);

// Função reducer para atualizar o estado quando os animais forem obtidos com sucesso
function fullfillAnimalsReducer(state, action) {
  //criaçao de um novo estado de objeto com os animais requisitados
  return {
    ...state,
    status: "loaded",
    animaisFav: action.payload,
  };
}

export const addAnimalFavServer = createAsyncThunk(
  "AnimalFav/addAnimalFavServer",
  async (animal, { getState },) => {

    const animalJaFavoritado =  initialState.animaisFav.some(
        (animal_fav) => animal_fav.id_animal === animal.id_animal && animal_fav.id_user == animal.id_user
      );
      if (!animalJaFavoritado) {
        console.log(animalJaFavoritado)
          return await httpPost(`${baseUrl}/animaisFav`, animal);
      }
  }
);

export const removeAnimalFav = createAsyncThunk(
  "AnimalFav/removeAnimalFav",
  async (animalId, { getState }) => {
    await httpDelete(`${baseUrl}/animaisFav/${animalId}`);
    return animalId;
  }
);
const animaisFavSlice = createSlice({
  name: "AnimalFav",
  initialState,
  reducers: {
    // addAnimalToFav: (state, action) => {
    //   //verificar se o animal ja está favoritado, const animalJafavoritado retornando s,
    //   //caso some ache algo
    //   //se nao estiver, adicionamos o animal aos favoritos
    //   const animalJaFavoritado = state.animalsFav.some(
    //     (animal) => animal.id == action.payload.id
    //   );
    //   if (!animalJaFavoritado) {
    //     state.animalsFav.push({ ...state.animalsFav, ...action.payload });
    //   }
    // },

    // removeAnimalToFav: (state, action) => {
    //   state.animalsFav = state.animalsFav.filter(
    //     (animal) => animal.id !== action.payload
    //   );
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavAnimals.fulfilled, fullfillAnimalsReducer)
      .addCase(fetchFavAnimals.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFavAnimals.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addAnimalFavServer.fulfilled, (state) => {
        state.status = "saved";
      })
      .addCase(addAnimalFavServer.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addAnimalFavServer.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(removeAnimalFav.fulfilled, (state) => {
        state.status = "animal deleted";
      })
      .addCase(removeAnimalFav.pending, (state) => {
        state.status = "loading";
      })
      .addCase(removeAnimalFav.rejected, (state) => {
        state.status = "failed to delete";
      })
    },
});

// export const { addAnimalToFav, removeAnimalToFav } = animalFavSlice.actions;

export default animaisFavSlice.reducer;