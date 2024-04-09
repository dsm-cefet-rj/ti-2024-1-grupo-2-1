// Aqui iremos armazenar state de usuario

import UserActionsTypes from "./actions-types";

// Guardamos o state inicial do userReducer
const inicialState = {
    usuarioAtual: [{nome:"", email:"", senha:""}],
    ultimoTesteEmailVerificado: null,
}

const userReducer = (state = inicialState, action) => {
    //assim que uma action for efetuada, e o tipo for user/login, pega tudo do usuario e jogue no state
  switch(action.type){
    case UserActionsTypes.SIGNUP:

      //Verifica se o email do usuário recebido na action já está no "Banco de Dados"
      const userEmailIsAlredyInDB = state.usuarioAtual.some(
        (usuarioAtual) => usuarioAtual.email === action.payload.email);

      // FAZER LÓGICA AINDA, deveria sinalizar algo para setar o state de erro no componente
      if(userEmailIsAlredyInDB){
        state.ultimoTesteEmailVerificado = true;
        return {...state, ultimoTesteEmailVerificado: true};
      }

      return {...state, usuarioAtual: [...state.usuarioAtual, {...action.payload}], ultimoTesteEmailVerificado: null};

    case UserActionsTypes.LOGIN:
      return{...state, usuarioAtual: action.payload};
    case UserActionsTypes.LOGOUT:
      return{...state, usuarioAtual:null};
    default:
      return state    
  }
};

export default userReducer;