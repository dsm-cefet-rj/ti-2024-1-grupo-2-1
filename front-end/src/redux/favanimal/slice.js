import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    animalsFav: [],
};

// function addAnimalToFavReducer (state, action){
//     //verificar se o animal ja está favoritado, const animalJafavoritado retornando s,
//     //caso some ache algo
    
//     // //se ele estiver, n poderá ser favoritado dnv, ja que so pode haver um card do mesmo animal
//     // if(animalJaFavoritado){ 
//         //     state.animalsFav = state.animalsFav.map((animal) => 
//         //         animal.id === action.payload.id
//         //         ?{ ...animal}
//         //         : animal); 
//         //         return;
//         // }
//         //se nao estiver, adicionamos o animal aos favoritos
//         //    state.animalsFav = [ ...state.animalsFav,{ ...action.payload}]
//         // if(!animalJaFavoritado){
//         //     state.animalsFav.push({...state.animalsFav, ...action.payload});
//         // }
        
//     }
    
    // function removeAnimalToFavReducer( state, action){
    // }
    
    const animalFavSlice = createSlice({
        name: "favAnimal",
        initialState,
        reducers: {
            addAnimalToFav: (state, action) => {
                const animalJaFavoritado = state.animalsFav.some(
                    (animal) => animal.id == action.payload.id
                );
                if(!animalJaFavoritado){
                    state.animalsFav.push({...state.animalsFav, ...action.payload});
                }
            },
            // addAnimalToFavReducer(state,action.payload),
            removeAnimalToFav: (state, action) => {   
                state.animalsFav = state.animalsFav.filter(animal => animal.id !== action.payload);
        }
        // removeAnimalToFavReducer(state, action.payload),
    }
});

export const { addAnimalToFav, removeAnimalToFav } = animalFavSlice.actions;

export default animalFavSlice.reducer;