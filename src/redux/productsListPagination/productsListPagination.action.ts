import { PRODUCTS_LIST_PAGINATION_ACTION_TYPES } from "./productsListPagination.types";
import { createAction, Action, ActionWithPayload } from "../../utils/reducer.utils";
import { Product } from "../product/product.types";

export type FetchProductsStart = Action<PRODUCTS_LIST_PAGINATION_ACTION_TYPES.FETCH_PRODUCTS_START>;
export type FetchProductsSuccess = ActionWithPayload<PRODUCTS_LIST_PAGINATION_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS, Product[]>;
export type FetchProductsFailed = ActionWithPayload<PRODUCTS_LIST_PAGINATION_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS, Error>;
export type FetchFilteredProductsStart = Action<PRODUCTS_LIST_PAGINATION_ACTION_TYPES.FETCH_FILTERED_PRODUCTS_START>;
export type FetchFilteredProductsSuccess = ActionWithPayload<PRODUCTS_LIST_PAGINATION_ACTION_TYPES.FETCH_FILTERED_PRODUCTS_SUCCESS, Product[]>;
export type FetchFilteredProductsFailed = ActionWithPayload<PRODUCTS_LIST_PAGINATION_ACTION_TYPES.FETCH_FILTERED_PRODUCTS_SUCCESS, Error>;
export type FetchNextPageProducts = Action<PRODUCTS_LIST_PAGINATION_ACTION_TYPES.INCREMENT_PAGE>;
export type FetchPreviousPageProducts = Action<PRODUCTS_LIST_PAGINATION_ACTION_TYPES.DECREMENT_PAGE>;
export type FetchProductsByPageNumber = Action<PRODUCTS_LIST_PAGINATION_ACTION_TYPES.SET_PAGE_NUMBER>;
export type ProductsListPaginationAction = FetchProductsStart | FetchProductsSuccess | FetchProductsFailed | FetchFilteredProductsStart | FetchFilteredProductsSuccess | FetchFilteredProductsFailed | FetchNextPageProducts | FetchPreviousPageProducts | FetchProductsByPageNumber;


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
