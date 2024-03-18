import { AnyAction } from "../../utils/reducer.utils";
import { fetchProductCategoriesStart, fetchProductCategoriesFailure, fetchProductCategoriesSuccess } from "./productCategories.action";
import { PRODUCT_CATEGORIES_ACTION_TYPES, ProductCategory } from "./productCategories.types";

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
  
  // switch (action.type) {
  //   case PRODUCT_CATEGORIES_ACTION_TYPES.FETCH_PRODUCT_CATEGORIES_START:
  //     return { ...state, isLoading: true };
  //   case PRODUCT_CATEGORIES_ACTION_TYPES.FETCH_PRODUCT_CATEGORIES_SUCCESS:
  //     return { ...state, isLoading: false, productCategories: action.payload };
  //   case PRODUCT_CATEGORIES_ACTION_TYPES.FETCH_PRODUCT_CATEGORIES_FAILED:
  //     return { ...state, isLoading: false, error: action.payload };
  //   default:
  //     return state;
  // }
};
