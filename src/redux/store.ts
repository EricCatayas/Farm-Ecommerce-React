import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore, PersistConfig } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import storageSession from "redux-persist/lib/storage/session";
import logger from "redux-logger";
import { rootReducer, RootReducer } from "./root.reducer";
import rootSaga from "./root.saga";

// All Redux code lives here
// Where state lives, where actions are dispatched

export type RootState = ReturnType<typeof rootReducer>;

// whitelist must only contain key values inside the RootState
type ExtendedPersistConfig = PersistConfig<RootState> & {
  whitelist: (keyof RootState)[];
};


const persistConfig: ExtendedPersistConfig = { 
  key: "root",
  storage: storageSession,
  whitelist: [],
  serialize: false,
  // blacklist: ['user']
};

const persistedReducer = persistReducer<RootReducer>(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({thunk:false}).concat(sagaMiddleware, logger),
});


sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

