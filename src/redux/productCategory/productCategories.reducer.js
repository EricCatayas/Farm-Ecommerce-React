import { PRODUCT_CATEGORIES_ACTION_TYPES } from "./productCategories.types";

export const PRODUCT_CATEGORIES_INITIAL_STATE = {
  productCategories: [],
  isLoading: false,
  error: null,
};

export const productCategoriesReducer = (state = PRODUCT_CATEGORIES_INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case PRODUCT_CATEGORIES_ACTION_TYPES.FETCH_PRODUCT_CATEGORIES_START:
      return {
        ...state,
        isLoading: true,
      };
    case PRODUCT_CATEGORIES_ACTION_TYPES.FETCH_PRODUCT_CATEGORIES_SUCCESS:
      return { ...state, isLoading: false, productCategories: payload };
    case PRODUCT_CATEGORIES_ACTION_TYPES.FETCH_PRODUCT_CATEGORIES_FAILED:
      return { ...state, isLoading: false, error: payload };
    default:
      return state;
  }
};
