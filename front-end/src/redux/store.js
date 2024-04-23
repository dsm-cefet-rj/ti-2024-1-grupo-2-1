//a base para tudo no redux, onde armazenaremos todas as informações de variaveis de estados

import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./root-reducer.js";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root", // nome da chave para o armazenamento persistente
  storage, // Mecanismo de armazenamento( no caso é o localStorage por padrão)
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

const persistor = persistStore(store);

export { store, persistor };
