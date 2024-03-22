import { UserState } from "./user/user.reducer"; // Import individual state slices/modules
import { ProductCategoriesState } from "./productCategory/productCategories.reducer";
import { ProductsListPaginationState } from "./productsListPagination/productsListPagination.reducer";


interface RootState {
  user: UserState;
  productsListPagination: ProductsListPaginationState;
  productCategories: ProductCategoriesState;
};