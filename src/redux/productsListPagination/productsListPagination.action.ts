import { PRODUCTS_LIST_PAGINATION_ACTION_TYPES } from "./productsListPagination.types";
import { createAction, Action, ActionWithPayload } from "../../utils/reducer.utils";
import Product from "../../models/Product";
import ProductQueryParams from "../../models/ProductQueryParams";

//TODO: remove
export type SetProducts = ActionWithPayload<PRODUCTS_LIST_PAGINATION_ACTION_TYPES.SET_PRODUCTS, Product[]>;
export type SetPageNumber = ActionWithPayload<PRODUCTS_LIST_PAGINATION_ACTION_TYPES.SET_PAGE_NUMBER, number>;
export type SetPageSize = ActionWithPayload<PRODUCTS_LIST_PAGINATION_ACTION_TYPES.SET_PAGE_SIZE, number>;
export type FetchProductsStart = Action<PRODUCTS_LIST_PAGINATION_ACTION_TYPES.FETCH_PRODUCTS_START>;
export type FetchProductsSuccess = ActionWithPayload<PRODUCTS_LIST_PAGINATION_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS, Product[]>;
export type FetchProductsFailed = ActionWithPayload<PRODUCTS_LIST_PAGINATION_ACTION_TYPES.FETCH_PRODUCTS_FAILED, string>;
export type FetchFilteredProductsStart = Action<PRODUCTS_LIST_PAGINATION_ACTION_TYPES.FETCH_FILTERED_PRODUCTS_START>;
export type FetchFilteredProductsSuccess = ActionWithPayload<PRODUCTS_LIST_PAGINATION_ACTION_TYPES.FETCH_FILTERED_PRODUCTS_SUCCESS, Product[]>;
export type FetchFilteredProductsFailed = ActionWithPayload<PRODUCTS_LIST_PAGINATION_ACTION_TYPES.FETCH_FILTERED_PRODUCTS_FAILED, string>;
export type FetchNextPageProducts = Action<PRODUCTS_LIST_PAGINATION_ACTION_TYPES.INCREMENT_PAGE>;
export type FetchPreviousPageProducts = Action<PRODUCTS_LIST_PAGINATION_ACTION_TYPES.DECREMENT_PAGE>;

export type ProductsListPaginationAction = 
    | SetProducts
    | SetPageNumber
    | SetPageSize
    | FetchProductsStart 
    | FetchProductsSuccess 
    | FetchProductsFailed 
    | FetchFilteredProductsStart 
    | FetchFilteredProductsSuccess 
    | FetchFilteredProductsFailed 
    | FetchNextPageProducts 
    | FetchPreviousPageProducts;


export const fetchProductsStart = () => 
    createAction(PRODUCTS_LIST_PAGINATION_ACTION_TYPES.FETCH_PRODUCTS_START);

export const fetchProductsSuccess = (products: Product[]) => 
    createAction(PRODUCTS_LIST_PAGINATION_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS, products);

export const fetchProductsFailed = (error: string) => 
    createAction(PRODUCTS_LIST_PAGINATION_ACTION_TYPES.FETCH_PRODUCTS_FAILED, error);

export const fetchFilteredProductsStart = (queryParams: ProductQueryParams) => 
    createAction(PRODUCTS_LIST_PAGINATION_ACTION_TYPES.FETCH_FILTERED_PRODUCTS_START, queryParams);

export const fetchFilteredProductsSuccess = (products: Product[]) => 
    createAction(PRODUCTS_LIST_PAGINATION_ACTION_TYPES.FETCH_FILTERED_PRODUCTS_SUCCESS, products);

export const fetchFilteredProductsFailed = (error: string) => 
    createAction(PRODUCTS_LIST_PAGINATION_ACTION_TYPES.FETCH_FILTERED_PRODUCTS_FAILED, error);

export const fetchNextPageProducts = () => createAction(PRODUCTS_LIST_PAGINATION_ACTION_TYPES.INCREMENT_PAGE);
export const fetchPreviousPageProducts = () => createAction(PRODUCTS_LIST_PAGINATION_ACTION_TYPES.DECREMENT_PAGE);
export const fetchProductsByPageNumber = (pageNumber: number) => createAction(PRODUCTS_LIST_PAGINATION_ACTION_TYPES.SET_PAGE_NUMBER, pageNumber);
