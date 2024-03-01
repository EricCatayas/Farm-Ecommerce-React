// REDUX-TOOLKIT
import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import cartReducer from "./cart/cartSlice";
import productsListReducer from "./productList/productsListSlice";
import productCategoriesReducer from "./productCategory/productCategoriesSlice";
import productListPaginationReducer from "./productList/productListPaginationSlice";

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  productList: productsListReducer,
  productListPagination: productListPaginationReducer,
  productCategories: productCategoriesReducer,
});

// REACT-REDUX
export default rootReducer;
