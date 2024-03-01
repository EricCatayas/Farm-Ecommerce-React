import { PRODUCTS_LIST_PAGINATION_ACTION_TYPES } from "./productsListPagination.types";
import { createAction } from "../../utils/reducer.utils";

export const fetchProductsStart = () => {
    createAction(PRODUCTS_LIST_PAGINATION_ACTION_TYPES.FETCH_PRODUCTS_START);
}

export const fetchProductsSuccess = (products) => {
    createAction(PRODUCTS_LIST_PAGINATION_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS, products);
};

export const fetchProductsFailed = (error) => {
    createAction(PRODUCTS_LIST_PAGINATION_ACTION_TYPES.FETCH_PRODUCTS_FAILED, error);
};

