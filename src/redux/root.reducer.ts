import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { productsListPaginationReducer } from "./productsListPagination/productsListPagination.reducer";
import { productCategoriesReducer } from "./productCategory/productCategories.reducer";
import { notificationReducer } from "./notification/notification.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  productsListPagination: productsListPaginationReducer,
  productCategories: productCategoriesReducer,
  notification: notificationReducer
});
 

export type RootReducer = ReturnType<typeof rootReducer>;