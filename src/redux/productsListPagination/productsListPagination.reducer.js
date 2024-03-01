import { PRODUCTS_LIST_PAGINATION_ACTION_TYPES} from "./productsListPagination.types";

export const PRODUCTS_LIST_PAGINATION_INITIAL_STATE = {
  products: [],
  pageNumber: 1,
  pageSize: 4,
  isLoading: false,
  errors: [],
};

export const productsListPaginationReducer = (state = PRODUCTS_LIST_PAGINATION_INITIAL_STATE, action = {}) => {
  
  const { type, payload } = action;

  switch(type){
    case PRODUCTS_LIST_PAGINATION_ACTION_TYPES.SET_PRODUCTS:
        return { ...state, products: payload };
    case PRODUCTS_LIST_PAGINATION_ACTION_TYPES.SET_PAGE_NUMBER:
        return { ...state, pageNumber:payload};
    case PRODUCTS_LIST_PAGINATION_ACTION_TYPES.SET_PAGE_SIZE:
        return { ...state, pageSize:payload };
    case PRODUCTS_LIST_PAGINATION_ACTION_TYPES.FETCH_PRODUCTS_START:
        return { ...state, isLoading: true };
    case PRODUCTS_LIST_PAGINATION_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS:
        return { ...state, products:payload, isLoading:false };
    case PRODUCTS_LIST_PAGINATION_ACTION_TYPES.FETCH_PRODUCTS_FAILED:
        return { ...state, errors:payload, isLoading:false };
    case PRODUCTS_LIST_PAGINATION_ACTION_TYPES.INCREMENT_PAGE:
        return { ...state, pageNumber: pageNumber+1 };
    case PRODUCTS_LIST_PAGINATION_ACTION_TYPES.DECREMENT_PAGE:
        return { ...state, pageNumber: pageNumber-1 };
    default:
        return state;
  }
};
