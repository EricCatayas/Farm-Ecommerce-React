import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import rootReducer from "./root-reducer";
import storageSession from "redux-persist/lib/storage/session";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
// All Redux code lives here
// Where state lives, where actions are dispatched

const persistConfig = {
  key: "root",
  storage: storageSession,  
  // blacklist: ['user']
};



const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>  getDefaultMiddleware().concat(logger, thunk) ,
});

export const persistor = persistStore(store);