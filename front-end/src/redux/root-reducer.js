import { combineReducers } from "redux";
import userReducer from "./user/reducer";
import animalFavReducer from "./favanimal/reducer";

const rootReducer = combineReducers({userReducer, animalFavReducer});

export default rootReducer;