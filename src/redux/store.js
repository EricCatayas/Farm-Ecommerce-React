import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "./user";
import logger from "redux-logger";
// All Redux code lives here
// Where state lives, where actions are dispatched

const middleware = [...getDefaultMiddleware(), logger];

export default configureStore({
    reducer: {
        user: userReducer
    },
    middleware
});