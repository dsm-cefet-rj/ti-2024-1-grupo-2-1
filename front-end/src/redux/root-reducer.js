import { combineReducers } from "redux";
import userReducer from "./user/slice";
import animalFavReducer from "./favanimal/reducer";
import animalReducer from "./Animais/reducer";

const rootReducer = combineReducers({userReducer, animalFavReducer,animalReducer});

export default rootReducer;