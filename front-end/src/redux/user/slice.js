import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    userDB: [],
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

            const autenticateUser = () => {
                state.userDB.map((userObject) => {
                    if(userObject.email === action.payload.email && userObject.senha === action.payload.senha){
                      return userObject;
                    }
                });
      
                return null;
            }

            if(autenticateUser()){
                 state.currentUser = autenticateUser
                 return;
            }

             state.currentUser = null
             return;
        },

        logOut: (state) => {
             state.currentUser = null
             return;
        }
    }
});

export const { signUp, logIn, logOut } = userSlice.actions;

export default userSlice.reducer;