import { ProductCategoryAction } from "./productCategories.action";
import { PRODUCT_CATEGORIES_ACTION_TYPES, ProductCategory } from "./productCategories.types";

export type ProductCategoriesState = {
  readonly productCategories: ProductCategory[];
  readonly isLoading: boolean;
  readonly error: Error | null;
}
export const PRODUCT_CATEGORIES_INITIAL_STATE: ProductCategoriesState = {
  productCategories: [],
  isLoading: false,
  error: null,
};

export const productCategoriesReducer = (state = PRODUCT_CATEGORIES_INITIAL_STATE, action = {} as ProductCategoryAction) => {
  const { type } = action;

  switch (type) {
    case PRODUCT_CATEGORIES_ACTION_TYPES.FETCH_PRODUCT_CATEGORIES_START:
      return { ...state, isLoading: true };
    case PRODUCT_CATEGORIES_ACTION_TYPES.FETCH_PRODUCT_CATEGORIES_SUCCESS:
      return { ...state, isLoading: false, productCategories: action.payload };
    case PRODUCT_CATEGORIES_ACTION_TYPES.FETCH_PRODUCT_CATEGORIES_FAILED:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};
