import { AnyAction } from "../../utils/reducer.utils";
import { fetchProductCategoriesStart, fetchProductCategoriesFailure, fetchProductCategoriesSuccess } from "./productCategories.action";
import ProductCategory from "../../models/ProductCategory";

export interface ProductCategoriesState {
  readonly productCategories: ProductCategory[];
  readonly isLoading: boolean;
  readonly error: string | null;
}
export const PRODUCT_CATEGORIES_INITIAL_STATE: ProductCategoriesState = {
  productCategories: [],
  isLoading: false,
  error: null,
};

export const productCategoriesReducer = (state: ProductCategoriesState = PRODUCT_CATEGORIES_INITIAL_STATE, action = {} as AnyAction): ProductCategoriesState => {

  if(fetchProductCategoriesStart.match(action))
    return { ...state, isLoading: true };

  if(fetchProductCategoriesSuccess.match(action))
    return { ...state, isLoading: false, productCategories: action.payload };

  if(fetchProductCategoriesFailure.match(action))
    return { ...state, isLoading: false, error: action.payload };

  return state;
};