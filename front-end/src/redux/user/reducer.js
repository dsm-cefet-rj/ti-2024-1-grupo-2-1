// aqui iremos armazenar state de usuario

import UserActionsTypes from "./actions-types";

//guarda os dados de um estado inicial
const inicialState = {
    usuarioAtual: null,
}

const userReducer = (state = inicialState, action) => {
    //assim que uma action for efetuada, e o tipo for user/login, pega tudo do e jogue no state
  if (action.type === UserActionsTypes.LOGIN) {
    return{
        ...state, usuarioAtual:30
    }
  }
  return state;
};

export default userReducer;