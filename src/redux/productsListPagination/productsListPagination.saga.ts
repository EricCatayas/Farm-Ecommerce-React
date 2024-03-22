import { takeLatest, all, call, put, select } from "redux-saga/effects";
import { fetchProductsSuccess, fetchProductsFailed, fetchFilteredProductsSuccess, fetchFilteredProductsFailed } from "./productsListPagination.action";
import ProductsService from "../../services/ProductsService";
import { PRODUCTS_LIST_PAGINATION_ACTION_TYPES } from "./productsListPagination.types";
import { SagaIterator } from "redux-saga";
import { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export function* fetchProductsAsync(): SagaIterator{
    //LOG
    console.log("fetchProductsAsync saga");

    try{
        const productsService = new ProductsService();
        const productsListPagination = yield select(state => state.productsListPagination);
        const { pageNumber, pageSize } = productsListPagination;

        const data = yield call(productsService.fetchPaginatedProductsAsync, pageNumber, pageSize);
        yield put(fetchProductsSuccess(data));
    }
    catch(error: any){
        yield put(fetchProductsFailed(error));
    }
}

export function* fetchFilteredProductsAsync(action: PayloadAction<string>): SagaIterator{
  try {
    const productsService = new ProductsService();

    const data = yield call(
      productsService.fetchFilteredProductsAsync,
      action.payload
    );
    //LOG
    console.log("Filtered Products:" + JSON.stringify(data));

    yield put(fetchFilteredProductsSuccess(data));
  } catch (error: any) {
    yield put(fetchFilteredProductsFailed(error));
  }
}

// LISTENERS

export function* onFetchProducts(): SagaIterator{
    yield takeLatest(
        PRODUCTS_LIST_PAGINATION_ACTION_TYPES.FETCH_PRODUCTS_START,
        fetchProductsAsync
    );
}
export function* onFetchFilteredProducts(): SagaIterator{
    yield takeLatest(
        PRODUCTS_LIST_PAGINATION_ACTION_TYPES.FETCH_FILTERED_PRODUCTS_START,
        fetchFilteredProductsAsync
    );
}
export function* onFetchNextPageProducts(): SagaIterator{
    yield takeLatest(
        PRODUCTS_LIST_PAGINATION_ACTION_TYPES.INCREMENT_PAGE,
        fetchProductsAsync
    );
}

export function* onFetchPreviousPageProducts(): SagaIterator{
    yield takeLatest(
        PRODUCTS_LIST_PAGINATION_ACTION_TYPES.DECREMENT_PAGE,
        fetchProductsAsync
    );
}
export function* onFetchProductsByPageNumber(): SagaIterator{
    yield takeLatest(
        PRODUCTS_LIST_PAGINATION_ACTION_TYPES.SET_PAGE_NUMBER,
        fetchProductsAsync
    );
}

// SAGA

export function* productsListPaginationSaga(): SagaIterator{
    yield all([
        call(onFetchProducts),
        call(onFetchFilteredProducts), 
        call(onFetchNextPageProducts),
        call(onFetchPreviousPageProducts),
        call(onFetchProductsByPageNumber)
    ]);
}
