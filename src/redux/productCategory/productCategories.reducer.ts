import { AnyAction } from"redux-saga";
import { fetchProductCategoriesStart, fetchProductCategoriesFailure, fetchProductCategoriesSuccess } from "./productCategories.action";
import { PRODUCT_CATEGORIES_ACTION_TYPES } from "./productCategories.types";
import ProductCategory from "../../models/ProductCategory";

export interface ProductCategoriesState {
  readonly productCategories: ProductCategory[];
  readonly isLoading: boolean;
  readonly error: Error | null;
}
export const PRODUCT_CATEGORIES_INITIAL_STATE: ProductCategoriesState = {
  productCategories: [],
  isLoading: false,
  error: null,
};

export const productCategoriesReducer = (state = PRODUCT_CATEGORIES_INITIAL_STATE, action = {} as AnyAction): ProductCategoriesState => {

  if(fetchProductCategoriesStart.match(action))
    return { ...state, isLoading: true };

  if(fetchProductCategoriesSuccess.match(action))
    return { ...state, isLoading: false, productCategories: action.payload };

  if(fetchProductCategoriesFailure.match(action))
    return { ...state, isLoading: false, error: action.payload };

  return state;
};