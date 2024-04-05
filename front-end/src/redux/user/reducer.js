// aqui iremos armazenar state de usuario

import { defer } from "react-router-dom";
import UserActionsTypes from "./actions-types";

//guarda os dados de um estado inicial
const inicialState = {
    usuarioAtual: null,
}

const userReducer = (state = inicialState, action) => {
    //assim que uma action for efetuada, e o tipo for user/login, pega tudo do usuario e jogue no state
  switch(action.type){
    case UserActionsTypes.LOGIN:
      return{...state, usuarioAtual: action.payload};
    case UserActionsTypes.LOGOUT:
      return{...state, usuarioAtual:null};
    default:
      return state    
  }
};

export default userReducer;