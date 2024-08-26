import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../../baseUrl";
import { httpGet, httpDelete, httpPost, httpPut } from "../../utils";

const initialState = {
    status: null,
    userFavAnimals: [],
    error: null
};

export const createEntryAtFavoriteCollection = createAsyncThunk("userFavoriteAnimals/createEntryAtFavoriteCollection",
    async (email) => {
        return await httpPost(`${baseUrl}/favoriteAnimals`, email);
    }
);

export const getUserEntryAtCollection = createAsyncThunk("userFavoriteAnimals/getUserEntryAtCollection",
    async (email, {getState}) => {

        return await httpGet(`${baseUrl}/favoriteAnimals?userEmail=${email}`,{
            headers:{
                Authorization:`${getState().userReducer.token}`
            }
        });
    }
);

export const addAnimalToUserFavoriteCollection = createAsyncThunk("userFavoriteAnimals/addAnimalToUserFavoriteCollection",
    async (data, {getState}) => {
        const { email, animalId, operacao } = data;
        return await httpPut(`${baseUrl}/favoriteAnimals?userEmail=${data.email}`, data, {
            headers:{
                Authorization:`${getState().userReducer.token}`
            }
        });
    }
);

export const removeAnimalFromUserFavoriteCollection = createAsyncThunk("userFavoriteAnimals/removeAnimalFromUserFavoriteCollection",
    async (data, { getState }) => {
        const { email, animalId, operacao } = data;
        console.log(data);
        console.log(getState().userReducer.token)
        return await httpPut(`${baseUrl}/favoriteAnimals?userEmail=${data.email}`, data, {
            headers:{
                Authorization: `${getState().userReducer.token}`
            }
        });
    }
);

export const deleteUserEntryAtFavoriteCollection = createAsyncThunk("userFavoriteAnimals/deleteUserEntryAtFavoriteCollection",
    async (userEmail,{getState}) => {
        return await httpDelete(`${baseUrl}/favoriteAnimals?userEmail=${userEmail}`,
            {
                headers:{
                    Authorization: `${getState().userReducer.token}`
                }
            }
        );
    }
);

export const modifyUserEmailAtFavoriteCollection = createAsyncThunk("userFavoriteAnimals/modifyUserEmailAtFavoriteCollection",
    async (data, {getState}) => {
        return await httpPut(`${baseUrl}/favoriteAnimals/modifyEmail`, data ,
            {
                headers:{
                    Authorization: `${getState().userReducer.token}`
                }
            }
        )
    }
)

const favoriteSlice = createSlice({
    name: "userFavoriteAnimals",
    initialState,
    reducers: {
        cleanArray: (state) => {
            state.email = null;
            state.error = null;
            state.userFavAnimals = [];
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(createEntryAtFavoriteCollection.pending, (state) => {
            state.status = "loading";
        })
        .addCase(createEntryAtFavoriteCollection.fulfilled, (state) => {
            state.status = "completed";
        })
        .addCase(createEntryAtFavoriteCollection.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        })
        .addCase(getUserEntryAtCollection.pending, (state) => {
            state.status = "loading";
        })
        .addCase(getUserEntryAtCollection.fulfilled, (state, action) => {
            state.status = "completed";
            state.userFavAnimals = action.payload.favAnimalsArray;
            state.email = action.payload.userEmail;
        })
        .addCase(getUserEntryAtCollection.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.message;
        })
        .addCase(addAnimalToUserFavoriteCollection.pending, (state) => {
            state.status = "loading";
        })
        .addCase(addAnimalToUserFavoriteCollection.fulfilled, (state, action) => {
            state.status = "completed";
            state.userFavAnimals = action.payload.favAnimalsArray;
        })
        .addCase(addAnimalToUserFavoriteCollection.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        })
        .addCase(removeAnimalFromUserFavoriteCollection.pending, (state) => {
            state.status = "loading";
        })
        .addCase(removeAnimalFromUserFavoriteCollection.fulfilled, (state) => {
            state.status = "completed";
        })
        .addCase(removeAnimalFromUserFavoriteCollection.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        })
        .addCase(deleteUserEntryAtFavoriteCollection.pending, (state) => {
            state.status = "loading";
        })
        .addCase(deleteUserEntryAtFavoriteCollection.fulfilled, (state) => {
            state.status = "completed";
        })
        .addCase(deleteUserEntryAtFavoriteCollection.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        })
    }

})

export const { cleanArray } = favoriteSlice.actions;

export default favoriteSlice.reducer;