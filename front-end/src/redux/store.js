//a base para tudo no redux, onde armazenaremos todas as informações de variaveis de estados

import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer.js";

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;