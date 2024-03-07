import { createStore, compose, applyMiddleware } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import storageSession from "redux-persist/lib/storage/session";
import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";
import logger from "redux-logger";

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: "root",
  storage: storageSession,
  // blacklist: ['user']
};

const middleWares = [
  //...(process.env.NODE_ENV !== 'production' ? [logger] : []), TODO: bring back logger
  sagaMiddleware
];

const composeEnhancer = compose;

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

const store = createStore(persistedReducer, undefined, composedEnhancers);

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor };
