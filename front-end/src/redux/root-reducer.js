import { combineReducers } from "redux";
import userReducer from "./user/slice";
import animalFavReducer from "./favanimal/slice";
import animalReducer from "./Animais/slice";
import  pedidoAdocaoReducer from "./pedidoAdocao/slice"

const rootReducer = combineReducers({userReducer, animalFavReducer,animalReducer, pedidoAdocaoReducer});

export default rootReducer;