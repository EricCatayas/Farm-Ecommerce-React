import { PRODUCT_CATEGORIES_ACTION_TYPES } from "./productCategories.types";
import { createAction } from "../../utils/reducer.utils";

export const fetchProductCategoriesStart = () =>
  createAction(PRODUCT_CATEGORIES_ACTION_TYPES.FETCH_PRODUCT_CATEGORIES_START);

export const fetchProductCategoriesSuccess = (categoriesArray) =>
  createAction(
    PRODUCT_CATEGORIES_ACTION_TYPES.FETCH_PRODUCT_CATEGORIES_SUCCESS,
    categoriesArray
  );

export const fetchProductCategoriesFailure = (error) =>
  createAction(PRODUCT_CATEGORIES_ACTION_TYPES.FETCH_PRODUCT_CATEGORIES_FAILED, error);