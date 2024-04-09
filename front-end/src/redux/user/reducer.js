// Aqui iremos armazenar state de usuario

import UserActionsTypes from "./actions-types";

const initialState = {
  currentUser: null,
  userDB: [],
};

const userReducer = (state = initialState, action) => {
    //assim que uma action for efetuada, e o tipo for user/login, pega tudo do usuario e jogue no state
  switch(action.type){
    case UserActionsTypes.SIGNUP:

      const userEmailIsAlredyInDB = state.userDB.some((userDB) => userDB.email === action.payload.email);

      if(!userEmailIsAlredyInDB){
        const newUser = { ...action.payload};
        return { ...state, userDB: [...state.userDB, newUser]}
      }

      return { ...state, userDB: [...state.userDB]};

    case UserActionsTypes.LOGIN:

       const autenticateUser = () => {
          state.userDB.map((userObject) => {
              if(userObject.email === action.payload.email && userObject.senha === action.payload.senha){
                return userObject;
              }
          });

          return null;
       }

       if(autenticateUser()){
          return { ...state, currentUser: autenticateUser}
       }

       return { ...state, currentUser: null}

    case UserActionsTypes.LOGOUT:

      return{...state, currentUser: null};
      
    default:

      return state    
  }
};

export default userReducer;