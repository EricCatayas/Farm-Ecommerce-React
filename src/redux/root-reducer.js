import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import cartReducer from "./cartSlice";
import productCategoriesReducer from "./productCategoriesSlice";

//TODO: reducer for product categories
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  productCategories: productCategoriesReducer,
});

export default rootReducer;
