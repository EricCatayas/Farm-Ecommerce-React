import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./user/user.reducer";
import { productsListPaginationReducer } from "./productsListPagination/productsListPagination.reducer";
import { productCategoriesReducer } from "./productCategory/productCategories.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  productsListPagination: productsListPaginationReducer,
  productCategories: productCategoriesReducer
});

export default rootReducer;