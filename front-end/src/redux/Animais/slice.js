import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    animals: [],
};

// Função assíncrona para buscar animais da API
export const fetchAnimais = createAsyncThunk ('animal/fetchAnimais', 
async () => {
    //poderia ser feito um try catch para averiguar se os dados serão pegos corretamente 
    //busca os animais na API
    const resp = await fetch("http://localhost:5000/animals");
    // transforma a resposta da API em json
    return await resp.json();

    }, )

    // Função reducer para atualizar o estado quando os animais forem obtidos com sucesso
    function fullfillAnimalsReducer(state, action){
        //criaçao de um novo estado de objeto com os animais requisitados 
        return {
            ...state,
            animals: action.payload,
        };
    };

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
        .addCase(fetchAnimais.fulfilled, fullfillAnimalsReducer);
        
    },
});

export const  { changeAnimalIsFav } = animalSlice.actions;

export default animalSlice.reducer;


