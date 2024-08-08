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
    async (email) => {

        return await httpGet(`${baseUrl}/favoriteAnimals?userEmail=${email}`);
    }
);

export const addAnimalToUserFavoriteCollection = createAsyncThunk("userFavoriteAnimals/addAnimalToUserFavoriteCollection",
    async (data) => {
        const { email, animalId, operacao } = data;
        return await httpPut(`${baseUrl}/favoriteAnimals?userEmail=${data.email}`, data);
    }
);

export const removeAnimalFromUserFavoriteCollection = createAsyncThunk("userFavoriteAnimals/removeAnimalFromUserFavoriteCollection",
    async (data) => {
        const { email, animalId, operacao } = data;
        return await httpPut(`${baseUrl}/favoriteAnimals?userEmail=${data.email}`, data);
    }
);

export const deleteUserEntryAtFavoriteCollection = createAsyncThunk("userFavoriteAnimals/deleteUserEntryAtFavoriteCollection",
    async (userEmail) => {
        return await httpDelete(`${baseUrl}/favoriteAnimals?userEmail=${userEmail}`);
    }
);

const favoriteSlice = createSlice({
    name: "userFavoriteAnimals",
    initialState,
    reducers: {
        cleanArray: (state) => {
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