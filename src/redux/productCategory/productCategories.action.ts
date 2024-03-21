import { PRODUCT_CATEGORIES_ACTION_TYPES } from "./productCategories.types";
import { createAction, Action, ActionWithPayload, withMatcher } from "../../utils/reducer.utils";
import ProductCategory from "../../models/ProductCategory";

export type FetchProductCategoriesStart = Action<PRODUCT_CATEGORIES_ACTION_TYPES.FETCH_PRODUCT_CATEGORIES_START>;

export type FetchProductCategoriesSuccess = ActionWithPayload<PRODUCT_CATEGORIES_ACTION_TYPES.FETCH_PRODUCT_CATEGORIES_SUCCESS, ProductCategory[]>;

export type FetchProductCategoriesFailed = ActionWithPayload<PRODUCT_CATEGORIES_ACTION_TYPES.FETCH_PRODUCT_CATEGORIES_FAILED, Error>;

export type ProductCategoryAction = 
  | FetchProductCategoriesStart 
  | FetchProductCategoriesSuccess 
  | FetchProductCategoriesFailed;

export const fetchProductCategoriesStart = withMatcher(
  (): FetchProductCategoriesStart =>
  createAction(PRODUCT_CATEGORIES_ACTION_TYPES.FETCH_PRODUCT_CATEGORIES_START)
);

export const fetchProductCategoriesSuccess = withMatcher(
  (categoriesArray: ProductCategory[]) : FetchProductCategoriesSuccess =>
  createAction(PRODUCT_CATEGORIES_ACTION_TYPES.FETCH_PRODUCT_CATEGORIES_SUCCESS, categoriesArray)
);

export const fetchProductCategoriesFailure = withMatcher(
  (error: Error) : FetchProductCategoriesFailed =>
  createAction(PRODUCT_CATEGORIES_ACTION_TYPES.FETCH_PRODUCT_CATEGORIES_FAILED, error)
);

//#region legacy code
//export const fetchProductCategoriesStart = (): FetchProductCategoriesStart =>
//  createAction(PRODUCT_CATEGORIES_ACTION_TYPES.FETCH_PRODUCT_CATEGORIES_START);

// export const fetchProductCategoriesSuccess = (categoriesArray: ProductCategory[]): FetchProductCategoriesSuccess =>
//   createAction(PRODUCT_CATEGORIES_ACTION_TYPES.FETCH_PRODUCT_CATEGORIES_SUCCESS, categoriesArray);

// export const fetchProductCategoriesFailure = (error): FetchProductCategoriesFailed =>
//   createAction(PRODUCT_CATEGORIES_ACTION_TYPES.FETCH_PRODUCT_CATEGORIES_FAILED, error);
//#endregion