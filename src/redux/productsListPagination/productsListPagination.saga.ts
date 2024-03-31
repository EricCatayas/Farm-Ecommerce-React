import { takeLatest, all, call, put, select } from "redux-saga/effects";
import { fetchProductsStart, fetchProductsSuccess, fetchProductsFailed, fetchFilteredProductsSuccess, fetchFilteredProductsFailed } from "./productsListPagination.action";
import ProductsService from "../../services/ProductsService";
import { PRODUCTS_LIST_PAGINATION_ACTION_TYPES } from "./productsListPagination.types";
import { SagaIterator } from "redux-saga";
import { PayloadAction } from "@reduxjs/toolkit";

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
        yield put(fetchProductsFailed(error.message));
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
    yield put(fetchFilteredProductsFailed(error.message));
  }
}

export function* fetchProductsByPageStart() : SagaIterator {
    try{
        console.log("fetchProductsByPageStart")
        yield put(fetchProductsStart());
    }
    catch(error: any){
        yield put(fetchProductsFailed(error.message));
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
export function* onIncrementPage(): SagaIterator{
    yield takeLatest(
        PRODUCTS_LIST_PAGINATION_ACTION_TYPES.INCREMENT_PAGE,
        fetchProductsByPageStart
    );
}

export function* onDecrementPage(): SagaIterator{
    yield takeLatest(
        PRODUCTS_LIST_PAGINATION_ACTION_TYPES.DECREMENT_PAGE,
        fetchProductsByPageStart
    );
}
export function* onSetPageNumber(): SagaIterator{
    yield takeLatest(
        PRODUCTS_LIST_PAGINATION_ACTION_TYPES.SET_PAGE_NUMBER,
        fetchProductsByPageStart
    );
}

// SAGA

export function* productsListPaginationSaga(): SagaIterator{
    yield all([
        call(onFetchProducts),
        call(onFetchFilteredProducts), 
        call(onIncrementPage),
        call(onDecrementPage),
        call(onSetPageNumber)
    ]);
}
