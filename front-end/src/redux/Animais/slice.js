import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { baseUrl } from "../../baseUrl";
import { httpGet, httpDelete, httpPost, httpPut } from "../../utils";
import api from "../../configAPI"
const initialState = {
  status: "not_loaded",
  animals: [],
  error: null,
  currentAnimal: null,
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
export const fetchOneAnimal = createAsyncThunk(
  "animal/fetchOneAnimal",
  async (id) => {
    return await httpGet(`${baseUrl}/animals/${id}`);
    
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
    const formData = new FormData();
    for(const key in animal){
      if (animal[key] !== null && animal[key] !== undefined) {
        console.log(animal[key])
        formData.append(key, animal[key]);
    }
    }
    const headers ={
      'headers':{
        'Content-Type': 'application/json',
        'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>',
        'Authorization':`${getState().userReducer.token}`
      }
    }
    return api.post("animals",{
      nome:animal.nome,
      tipo:animal.tipo,
      porte:animal.porte,
      idade:animal.idade,
      sexo:animal.sexo,
      historia:animal.historia,
      file:animal.file}, headers).then((response)=>{
        console.log(response)
      })
  //   httpPost(`${baseUrl}/animals`, animal,
  //     {
  //     headers:{
  //         Authorization:`${getState().userReducer.token}`
  //     }
  // });
  }
);

export const deleteAnimal = createAsyncThunk(
  "animal/deleteAnimal",
  async (animalId, { getState }) => {
    await httpDelete(`${baseUrl}/animals/${animalId}`,{
      headers:{
          Authorization:`${getState().userReducer.token}`
      }
  });
    return animalId;
  }
);
export const updateAnimals = createAsyncThunk(
  "animal/updateAnimals",
  async(animal, { getState})=>{
    return await httpPut(`${baseUrl}/animals/${animal.id}`,animal,{
      headers:{
          Authorization:`${getState().userReducer.token}`
      }
  });
  }
);

const animalSlice = createSlice({
  name: "animal",
  initialState,
  reducers: {
    changeAnimalIsFav: (state, action) => {
      // // Encontrar o índice do animal
      // const index = state.animals.findIndex((e) => e.id === action.payload);
    
      // // Criar uma cópia do array de animais
      // const updatedAnimals = [...state.animals];
    
      // // Modificar a propriedade `isfav` no elemento correspondente
      // updatedAnimals[index].isfav = !updatedAnimals[index].isfav;
    
      // // Atualizar o estado com o novo array
      // return {
      //   ...state,
      //   animals: updatedAnimals,
      // };

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
      .addCase(fetchOneAnimal.fulfilled, (state, action)=>{
        state.status = "loaded";
        state.currentAnimal = action.payload;
      })
      .addCase(fetchOneAnimal.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchOneAnimal.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        state.currentAnimal=null;
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
      })
      .addCase(deleteAnimal.fulfilled, (state) => {
        state.status = "animal deleted";
      })
      .addCase(deleteAnimal.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteAnimal.rejected, (state) => {
        state.status = "failed to delete";
      })
      .addCase(updateAnimals.rejected, (state, action) => {
        state.status = "failed";
      })
      .addCase(updateAnimals.fulfilled, (state, action) => {
        state.status = "saved";
      })
    //.addCase(fetchAnimais.pending, (state,action)=>(state.status="loading"))
    //.addCase(fetchAnimais.rejected,(state, action) => ( state.status = "failed", state.error = action.error.message))
  },
});

export const { changeAnimalIsFav } = animalSlice.actions;

export default animalSlice.reducer;
