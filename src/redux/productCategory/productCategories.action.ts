import { PRODUCT_CATEGORIES_ACTION_TYPES, ProductCategory } from "./productCategories.types";
import { createAction, Action, ActionWithPayload } from "../../utils/reducer.utils";

export type ProductCategoriesStart = Action<PRODUCT_CATEGORIES_ACTION_TYPES.FETCH_PRODUCT_CATEGORIES_START>;

export type ProductCategoriesSuccess = ActionWithPayload<PRODUCT_CATEGORIES_ACTION_TYPES.FETCH_PRODUCT_CATEGORIES_SUCCESS, ProductCategory[]>;

export type ProductCategoriesFailed = ActionWithPayload<PRODUCT_CATEGORIES_ACTION_TYPES.FETCH_PRODUCT_CATEGORIES_FAILED, Error>;

export type ProductCategoryAction = ProductCategoriesStart | ProductCategoriesSuccess | ProductCategoriesFailed;

export const fetchProductCategoriesStart = (): ProductCategoriesStart =>
  createAction(PRODUCT_CATEGORIES_ACTION_TYPES.FETCH_PRODUCT_CATEGORIES_START);

export const fetchProductCategoriesSuccess = (categoriesArray: ProductCategory[]): ProductCategoriesSuccess =>
  createAction(PRODUCT_CATEGORIES_ACTION_TYPES.FETCH_PRODUCT_CATEGORIES_SUCCESS, categoriesArray);

export const fetchProductCategoriesFailure = (error): ProductCategoriesFailed =>
  createAction(PRODUCT_CATEGORIES_ACTION_TYPES.FETCH_PRODUCT_CATEGORIES_FAILED, error);