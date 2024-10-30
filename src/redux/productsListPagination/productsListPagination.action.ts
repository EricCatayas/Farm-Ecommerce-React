import { PRODUCTS_LIST_PAGINATION_ACTION_TYPES } from "./productsListPagination.types";
import {
  createAction,
  Action,
  ActionWithPayload,
} from "../../utils/reducer.utils";
import Product from "../../models/Product";
import ProductQueryParams from "../../models/ProductQueryParams";

export const fetchProductsStart = () =>
  createAction(PRODUCTS_LIST_PAGINATION_ACTION_TYPES.FETCH_PRODUCTS_START);

export const fetchProductsSuccess = (products: Product[]) =>
  createAction(
    PRODUCTS_LIST_PAGINATION_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS,
    products
  );

export const fetchProductsFailed = (error: string) =>
  createAction(
    PRODUCTS_LIST_PAGINATION_ACTION_TYPES.FETCH_PRODUCTS_FAILED,
    error
  );

export const fetchFilteredProductsStart = (queryParams: ProductQueryParams) =>
  createAction(
    PRODUCTS_LIST_PAGINATION_ACTION_TYPES.FETCH_FILTERED_PRODUCTS_START,
    queryParams
  );

export const fetchFilteredProductsSuccess = (products: Product[]) =>
  createAction(
    PRODUCTS_LIST_PAGINATION_ACTION_TYPES.FETCH_FILTERED_PRODUCTS_SUCCESS,
    products
  );

export const fetchFilteredProductsFailed = (error: string) =>
  createAction(
    PRODUCTS_LIST_PAGINATION_ACTION_TYPES.FETCH_FILTERED_PRODUCTS_FAILED,
    error
  );

export const fetchSearchProductsStart = (searchTerm: string) =>
  createAction(
    PRODUCTS_LIST_PAGINATION_ACTION_TYPES.FETCH_SEARCH_PRODUCTS_START,
    searchTerm
  );

export const fetchSearchProductsSuccess = (products: Product[]) =>
  createAction(
    PRODUCTS_LIST_PAGINATION_ACTION_TYPES.FETCH_SEARCH_PRODUCTS_SUCCESS,
    products
  );

export const fetchSearchProductsFailed = (error: string) =>
  createAction(
    PRODUCTS_LIST_PAGINATION_ACTION_TYPES.FETCH_SEARCH_PRODUCTS_FAILED,
    error
  );

export const fetchNextPageProducts = () =>
  createAction(PRODUCTS_LIST_PAGINATION_ACTION_TYPES.INCREMENT_PAGE);

export const fetchPreviousPageProducts = () =>
  createAction(PRODUCTS_LIST_PAGINATION_ACTION_TYPES.DECREMENT_PAGE);

export const fetchProductsByPageNumber = (pageNumber: number) =>
  createAction(
    PRODUCTS_LIST_PAGINATION_ACTION_TYPES.SET_PAGE_NUMBER,
    pageNumber
  );
