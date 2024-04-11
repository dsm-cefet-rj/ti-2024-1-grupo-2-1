//a base para tudo no redux, onde armazenaremos todas as informações de variaveis de estados

import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./root-reducer.js";


const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;