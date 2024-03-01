import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./user/user.reducer";

const rootReducer = combineReducers({
  user: userReducer,
//   cart: cartReducer,
//   productList: productListReducer,
//   productListPagination: productListPaginationReducer,
//   productCategories: productCategoriesReducer,
});

// REACT-REDUX
export default rootReducer;