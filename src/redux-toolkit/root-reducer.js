// REDUX-TOOLKIT
import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import cartReducer from "./cart/cartSlice";
import productListReducer from "./product/productListSlice";
import productCategoriesReducer from "./productCategory/productCategoriesSlice";
import productListPaginationReducer from "./product/productListPaginationSlice";

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  productList: productListReducer,
  productListPagination: productListPaginationReducer,
  productCategories: productCategoriesReducer,
});

// REACT-REDUX
export default rootReducer;
