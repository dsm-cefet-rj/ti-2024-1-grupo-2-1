import { createAsyncThunk, createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { baseUrl } from "../../baseUrl";
import { httpGet, httpDelete, httpPost, httpPut } from "../../utils";


const userAdapter = createEntityAdapter();

const initialState = userAdapter.getInitialState({
    status: "not_loaded",
    currentUser: null,
    error: null
});

const userSelector = userAdapter.getSelectors(state => state.rootReducer);

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
export const fetchUser = createAsyncThunk('users/fetchUser', async (_, {getState}) => {
    return await httpGet(`${baseUrl}/userDB`);
});

export const addUserServer = createAsyncThunk('users/addUserServer', async (user, {getState}) => {
    return await httpPost(`${baseUrl}/userDB`, user);
});

export const fetchUserByEmail = createAsyncThunk('users/fetchUSerByEmail', async(payload, {getState}) =>{
    try{
      const {email, senha} = payload
      const response = await fetch(`${baseUrl}/userDB?email=${email}&senha=${senha}`);
      const user = await response.json();
      return user[0];
    } catch(error){
      throw error;
    }
});

export const emailExistServer = createAsyncThunk('users/emailExistServer', async (email, {getState}) => {
    const response = await fetch (`${baseUrl}/userDB?email=${email}`);
    const existe = await response.json();
    return existe.length > 0;
});

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logOut: (state) => {
            state.currentUser = null;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchUser.pending, (state, action) => {
            state.status = "loading";
        })
        .addCase(fetchUser.fulfilled, (state, action) => {
            state.status = "loaded";
            userAdapter.setAll(state, action.payload);
        })
        .addCase(fetchUser.rejected, (state, action) =>{
            state.status = "failed";
            state.error = action.error.message;
        })
        .addCase(addUserServer.pending, (state, action) =>{
            state.status = "loading";
        })
        .addCase(addUserServer.fulfilled, (state, action) =>{
            state.status = "saved";
            userAdapter.addOne(state, action.payload);
        })
        .addCase(addUserServer.rejected, (state, action) =>{
            state.status = "failed";
            state.error = action.error.message;
        })
        .addCase(fetchUserByEmail.fulfilled, (state, action) =>{
            state.status = "logged";
            state.currentUser = action.payload;
        })
        .addCase(fetchUserByEmail.pending, (state, action) =>{
            state.status = "loading"; 
        })
        .addCase(fetchUserByEmail.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        })

        //.addCase(postUsuarios.fulfilled, userPostReducer );
        
    },
});

export const { logOut } = userSlice.actions;

export default userSlice.reducer;