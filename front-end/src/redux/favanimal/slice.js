import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    animalsFav: [],
};

const animalFavSlice = createSlice({
    name: "favAnimal",
    initialState,
    reducers: {
        addAnimalToFav: (state, action) => {
            const animalJaFavoritado = state.animalsFav.some(
                (animal) => animal.id === action.payload.id
                );

            if(animalJaFavoritado){ 
                    state.animalsFav = state.animalsFav
                    .map((animal) => 
                    animal.id === action.payload.id
                    ?{...animal, quantity: 1}
                    : animal); 
                    return;
            }

                state.animalsFav = [ ...state.animalsFav, { ...action.payload}]
                return;
        },

        removeAnimalToFav: (state, action) => {
            state.animalsFav.filter(animal => animal.id == action.payload)
            return;
        },

    }
});

export const { addAnimalToFav, removeAnimalToFav } = animalFavSlice.actions;

export default animalFavSlice.reducer;