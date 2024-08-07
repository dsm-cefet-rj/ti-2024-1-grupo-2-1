import { combineReducers } from "redux";
import userReducer from "./user/slice";
import animalFavReducer from "./favanimal/slice";
import animalReducer from "./Animais/slice";
import pedidoAdocaoReducer from "./pedidoAdocao/slice";
import schedulingSlice from "./agendamento/slice";
import animaisFavReducer from "./AnimaisFav/slice";
import userFavoriteAnimalsReducer from "./Favoritos/slice";

const rootReducer = combineReducers({
  userReducer,
  animalFavReducer,
  animaisFavReducer,
  animalReducer,
  pedidoAdocaoReducer,
  schedulingSlice,
  userFavoriteAnimalsReducer,
});

export default rootReducer;
