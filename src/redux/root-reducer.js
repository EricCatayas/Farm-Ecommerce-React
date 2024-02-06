import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import cartReducer from "./cart/cartSlice";
import productCategoriesReducer from "./productCategories/productCategoriesSlice";

//TODO: reducer for product categories
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  productCategories: productCategoriesReducer,
});

export default rootReducer;
