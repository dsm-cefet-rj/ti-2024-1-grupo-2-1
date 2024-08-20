import {createAsyncThunk,createSlice,createEntityAdapter,} from "@reduxjs/toolkit";
import { baseUrl } from "../../baseUrl";
import { httpGet, httpDelete, httpPost, httpPut } from "../../utils";

const userAdapter = createEntityAdapter();

const initialState = userAdapter.getInitialState({
  status: "not_loaded",
  currentUser: null,
  toke:null,
  error: null,
});

export const fetchUser = createAsyncThunk(
  "users/fetchUser",
  async (_, { getState }) => {
    return await httpGet(`${baseUrl}/userDB`);
  }
);

export const addUserServer = createAsyncThunk(
  "users/addUserServer",
  async (user, { getState }) => {
    return await httpPost(`${baseUrl}/userDB/signup`, user);
  }
);

export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async (idUser, { getState }) => {
    await httpDelete(`${baseUrl}/userDB/${idUser}`);
    return idUser;
  }
);

export const updateUsers = createAsyncThunk(
  "users/updateUsers",
  async (user, { getState }) => {
    return await httpPut(`${baseUrl}/userDB/${user.id}`, user);
  }
);

export const loginUser = createAsyncThunk(
  "users/loginUser",
  async (payload, { getState }) => {
    try{
      const response = await httpPost(
        `${baseUrl}/userDB/login`, payload
      );
      return response;

    }catch(err){
        throw err;
    }
  }
);

export const emailExistServer = createAsyncThunk(
  "users/emailExistServer",
  async (email, { getState }) => {
    const response = await fetch(`${baseUrl}/userDB?email=${email}`);
    const existe = await response.json();
    return existe.length > 0;
  }
);
// export const logoutUser= createAsyncThunk(
//   "users/logoutUser",
//   async (user, { getState }) => {
//     return await httpGet(`${baseUrl}/userDB/${user.id}`, user);
//   }
// );

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut: (state) => {
      state.currentUser = null;
      state.currentToken = null;
      state.isAdmin = false;
    },
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
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addUserServer.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addUserServer.fulfilled, (state, action) => {
        state.status = "saved";
        userAdapter.addOne(state, action.payload);
        state.error=null;
      })
      .addCase(addUserServer.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "logged";
        userAdapter.addOne(state, action.payload);
        state.currentUser = action.payload.user;
        state.currentToken = action.payload.token;
            
      })
      .addCase(loginUser.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.status = "deleted";
        userAdapter.removeOne(state, action.payload);
      })
      .addCase(updateUsers.rejected, (state, action) => {
        state.status = "failed";
      })
      .addCase(updateUsers.fulfilled, (state, action) => {
        state.status = "saved";
        userAdapter.upsertOne(state, action.payload);
      });
  },
});

export const { logOut } = userSlice.actions;

export default userSlice.reducer;
