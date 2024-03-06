import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import storageSession from "redux-persist/lib/storage/session";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";
// All Redux code lives here
// Where state lives, where actions are dispatched

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: "root",
  storage: storageSession,
  // blacklist: ['user']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware, logger),
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);