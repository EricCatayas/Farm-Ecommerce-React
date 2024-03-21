import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { productsListPaginationReducer } from "./productsListPagination/productsListPagination.reducer";
import { productCategoriesReducer } from "./productCategory/productCategories.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  productsListPagination: productsListPaginationReducer,
  productCategories: productCategoriesReducer
});
 

export type RootReducer = ReturnType<typeof rootReducer>;