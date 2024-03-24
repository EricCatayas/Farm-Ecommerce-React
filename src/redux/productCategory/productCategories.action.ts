import { PRODUCT_CATEGORIES_ACTION_TYPES } from "./productCategories.types";
import { createAction, Action, ActionWithPayload, withMatcher } from "../../utils/reducer.utils";
import ProductCategory from "../../models/ProductCategory";

export const fetchProductCategoriesStart = withMatcher(() => 
  createAction(PRODUCT_CATEGORIES_ACTION_TYPES.FETCH_PRODUCT_CATEGORIES_START)
);

export const fetchProductCategoriesSuccess = withMatcher((categoriesArray: ProductCategory[]) =>
  createAction(PRODUCT_CATEGORIES_ACTION_TYPES.FETCH_PRODUCT_CATEGORIES_SUCCESS, categoriesArray)
);

export const fetchProductCategoriesFailure = withMatcher((error: string) =>
  createAction(PRODUCT_CATEGORIES_ACTION_TYPES.FETCH_PRODUCT_CATEGORIES_FAILED, error)
);