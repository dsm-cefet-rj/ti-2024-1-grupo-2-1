import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  animalsFav: [],
};


const animalFavSlice = createSlice({
  name: "favAnimal",
  initialState,
  reducers: {
        //verificar se o animal ja está favoritado, const animalJafavoritado retornando s,
        //caso some ache algo
    addAnimalToFav: (state, action) => {
        //se nao estiver, adicionamos o animal aos favoritos
      const animalJaFavoritado = state.animalsFav.some(
        (animal) => animal.id == action.payload.id
      );
      if (!animalJaFavoritado) {
        state.animalsFav.push({ ...state.animalsFav, ...action.payload });
      }
    },
    
    removeAnimalToFav: (state, action) => {
      state.animalsFav = state.animalsFav.filter(
        (animal) => animal.id !== action.payload
      );
    },
  },
});

export const { addAnimalToFav, removeAnimalToFav } = animalFavSlice.actions;

export default animalFavSlice.reducer;
