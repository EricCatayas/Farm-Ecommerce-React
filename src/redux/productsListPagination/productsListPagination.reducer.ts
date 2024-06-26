import Product from "../../models/Product";
import { ProductsListPaginationAction } from "./productsListPagination.action";
import { PRODUCTS_LIST_PAGINATION_ACTION_TYPES } from "./productsListPagination.types";
import { AnyAction } from "../../utils/reducer.utils";

export interface ProductsListPaginationState {
  readonly products: Product[];
  readonly pageNumber: number;
  readonly pageSize: number;
  readonly isLoading: boolean;
  readonly error: string | null;
}
export const PRODUCTS_LIST_PAGINATION_INITIAL_STATE : ProductsListPaginationState = {
  products: [],
  pageNumber: 1,
  pageSize: 4,
  isLoading: false,
  error: null
};

export const productsListPaginationReducer = (
state: ProductsListPaginationState = PRODUCTS_LIST_PAGINATION_INITIAL_STATE,
action = {} as AnyAction) : ProductsListPaginationState => {

  switch(action.type){
    case PRODUCTS_LIST_PAGINATION_ACTION_TYPES.SET_PRODUCTS:
        return { ...state, products: action.payload };
    case PRODUCTS_LIST_PAGINATION_ACTION_TYPES.SET_PAGE_NUMBER:
        return { ...state, pageNumber: action.payload};
    case PRODUCTS_LIST_PAGINATION_ACTION_TYPES.SET_PAGE_SIZE:
        return { ...state, pageSize: action.payload };
    case PRODUCTS_LIST_PAGINATION_ACTION_TYPES.FETCH_PRODUCTS_START:
        return { ...state, isLoading: true };
    case PRODUCTS_LIST_PAGINATION_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS:
        return { ...state, products: action.payload, isLoading:false };
    case PRODUCTS_LIST_PAGINATION_ACTION_TYPES.FETCH_PRODUCTS_FAILED:
        return { ...state, error: action.payload, isLoading:false };
    case PRODUCTS_LIST_PAGINATION_ACTION_TYPES.FETCH_FILTERED_PRODUCTS_START:
        return { ...state, isLoading: true };
    case PRODUCTS_LIST_PAGINATION_ACTION_TYPES.FETCH_FILTERED_PRODUCTS_SUCCESS:
        return { ...state, products: action.payload, isLoading:false };
    case PRODUCTS_LIST_PAGINATION_ACTION_TYPES.FETCH_FILTERED_PRODUCTS_FAILED:
        return { ...state, error: action.payload, isLoading:false };
    case PRODUCTS_LIST_PAGINATION_ACTION_TYPES.INCREMENT_PAGE:
        return { ...state, pageNumber: state.pageNumber+1 };
    case PRODUCTS_LIST_PAGINATION_ACTION_TYPES.DECREMENT_PAGE:
        if (state.pageNumber > 0) {
            return { ...state, pageNumber: state.pageNumber - 1 };
        }
        return state;
    default:
        return state;
  }
};
