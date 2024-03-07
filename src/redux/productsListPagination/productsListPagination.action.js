import { PRODUCTS_LIST_PAGINATION_ACTION_TYPES } from "./productsListPagination.types";
import { createAction } from "../../utils/reducer.utils";

export const fetchProductsStart = () => 
    createAction(PRODUCTS_LIST_PAGINATION_ACTION_TYPES.FETCH_PRODUCTS_START);

export const fetchProductsSuccess = (products) => 
    createAction(PRODUCTS_LIST_PAGINATION_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS, products);

export const fetchProductsFailed = (error) => 
    createAction(PRODUCTS_LIST_PAGINATION_ACTION_TYPES.FETCH_PRODUCTS_FAILED, error);

export const fetchFilteredProductsStart = (query) => 
    createAction(PRODUCTS_LIST_PAGINATION_ACTION_TYPES.FETCH_FILTERED_PRODUCTS_START, query);

export const fetchFilteredProductsSuccess = (products) => 
    createAction(PRODUCTS_LIST_PAGINATION_ACTION_TYPES.FETCH_FILTERED_PRODUCTS_SUCCESS, products);

export const fetchFilteredProductsFailed = (error) => 
    createAction(PRODUCTS_LIST_PAGINATION_ACTION_TYPES.FETCH_FILTERED_PRODUCTS_FAILED, error);

export const fetchNextPageProducts = () => createAction(PRODUCTS_LIST_PAGINATION_ACTION_TYPES.INCREMENT_PAGE);
export const fetchPreviousPageProducts = () => createAction(PRODUCTS_LIST_PAGINATION_ACTION_TYPES.DECREMENT_PAGE);
export const fetchProductsByPageNumber = (pageNumber) => createAction(PRODUCTS_LIST_PAGINATION_ACTION_TYPES.SET_PAGE_NUMBER, pageNumber);
