import { combineReducers } from "redux";
import userReducer from "./user/slice";
import animalFavReducer from "./favanimal/slice";
import animalReducer from "./Animais/slice";

const rootReducer = combineReducers({userReducer, animalFavReducer,animalReducer});

export default rootReducer;