import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./user/user.reducer";
import { productsListPaginationReducer } from "./productsListPagination/productsListPagination.reducer";
import { productCategoriesReducer } from "./productCategory/productCategories.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  productsListPagination: productListPaginationReducer,
  productCategories: productCategoriesReducer
});

// REACT-REDUX
export default rootReducer;