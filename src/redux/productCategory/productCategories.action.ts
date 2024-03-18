import { PRODUCT_CATEGORIES_ACTION_TYPES, ProductCategory } from "./productCategories.types";
import { createAction, Action, ActionWithPayload, withMatcher } from "../../utils/reducer.utils";
import { ActionCreator } from "redux";

export type FetchProductCategoriesStart = Action<PRODUCT_CATEGORIES_ACTION_TYPES.FETCH_PRODUCT_CATEGORIES_START>;

export type FetchProductCategoriesSuccess = ActionWithPayload<PRODUCT_CATEGORIES_ACTION_TYPES.FETCH_PRODUCT_CATEGORIES_SUCCESS, ProductCategory[]>;

export type FetchProductCategoriesFailed = ActionWithPayload<PRODUCT_CATEGORIES_ACTION_TYPES.FETCH_PRODUCT_CATEGORIES_FAILED, Error>;

export type ProductCategoryAction = FetchProductCategoriesStart | FetchProductCategoriesSuccess | FetchProductCategoriesFailed;

export const fetchProductCategoriesStart = withMatcher(
  (): FetchProductCategoriesStart =>
  createAction(PRODUCT_CATEGORIES_ACTION_TYPES.FETCH_PRODUCT_CATEGORIES_START)
);

export const fetchProductCategoriesSuccess = withMatcher(
  (categoriesArray: ProductCategory[]) : FetchProductCategoriesSuccess =>
  createAction(PRODUCT_CATEGORIES_ACTION_TYPES.FETCH_PRODUCT_CATEGORIES_SUCCESS, categoriesArray)
);

export const fetchProductCategoriesFailure = withMatcher(
  (error) : FetchProductCategoriesFailed =>
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