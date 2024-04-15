import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    
    currentUser: null,
    userDB: [],
};
/*
export const postUsuarios = createAsyncThunk ('user/postUsuarios', 
async (userData) => {
    //poderia ser feito um try catch para averiguar se os dados serão pegos corretamente 
    //busca os usuarios na API
    const resp = await fetch("http://localhost:5000/userDB",{
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then((response) => response.json())
    .then((data) => console.log('Usuário criado:', data))
    .catch((error) => console.error('Erro ao criar usuário:', error));
    // transforma a resposta da API em json
    return await resp.json();

    }, )

    function userPostReducer(state, action) {
        state.userDB.push({...action.payload});
    }
*/
export const fetchUsuarios = createAsyncThunk ('user/fetchUsuarios', 
async () => {
    //poderia ser feito um try catch para averiguar se os dados serão pegos corretamente 
    //busca os usuarios na API
    const resp = await fetch("http://localhost:5000/userDB");
    // transforma a resposta da API em json
    return await resp.json();

    }, )


    // Função reducer para atualizar o estado quando os animais forem obtidos com sucesso
    function fullfillUsersReducer(state, action){
        //criaçao de um novo estado de objeto com os animais requisitados 
        return {
            ...state,
            userDB: action.payload,
        };
    };

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        signUp: (state, action) => {

            const userEmailIsAlredyInDB = state.userDB.some((userDB) => userDB.email === action.payload.email);

            if(!userEmailIsAlredyInDB){
                const newUser = { ...action.payload};
                state.userDB = [...state.userDB, newUser]
                return;
            }

             state.userDB = [...state.userDB]
             return;
        },

        logIn: (state, action) => {

            state.currentUser = action.payload
      
            return;
        },

        logOut: (state) => {
             state.currentUser = null
             return;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchUsuarios.fulfilled, fullfillUsersReducer)
        //.addCase(postUsuarios.fulfilled, userPostReducer );
        
    },
});

export const { signUp, logIn, logOut } = userSlice.actions;

export default userSlice.reducer;