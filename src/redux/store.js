import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
// All Redux code here
// Where state lives, where actions are dispatched

export default configureStore({
    reducer: {
        counter: counterReducer
    }
});