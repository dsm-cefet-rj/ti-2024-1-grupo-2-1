//a base para tudo no redux, onde armazenaremos todas as informações de variaveis de estados

import { createStore } from "redux";

import rootReducer from "./root-reducer.js";

const store = createStore(rootReducer);

export default store;