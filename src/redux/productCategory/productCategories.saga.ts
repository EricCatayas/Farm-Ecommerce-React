import { SagaIterator } from "redux-saga";
import { takeLatest, all, call, put } from "redux-saga/effects";
import { fetchProductCategoriesFailure, fetchProductCategoriesSuccess} from "./productCategories.action";
import { PRODUCT_CATEGORIES_ACTION_TYPES } from "./productCategories.types";
import ProductCategoriesService from "../../services/ProductCategoriesService";

export function* fetchProductCategoriesAsync(): SagaIterator {
  try {
    // LOG
    console.log("fetchProductCategoriesAsync Saga");
    const productCategoriesService = new ProductCategoriesService();

    const data = yield call(productCategoriesService.fetchAllAsync); // "call(func, func args) converts function to effect"

    yield put(fetchProductCategoriesSuccess(data));
  } catch (error: any) {
    if(error instanceof Error){
      yield put(fetchProductCategoriesFailure(error));
    }
    else {
      yield put(
        fetchProductCategoriesFailure(new Error(`An error occured: ${error}`))
      );
    }
  }
}

// LISTENERS

// This saga is listening for "FETCH_PRODUCT_CATEGORIES_START" action dispatch
export function* onFetchProductCategories(): SagaIterator {
  yield takeLatest(
    PRODUCT_CATEGORIES_ACTION_TYPES.FETCH_PRODUCT_CATEGORIES_START,
    fetchProductCategoriesAsync
  );
}

export function* productCategoriesSaga(): SagaIterator {
  yield all([call(onFetchProductCategories)]); // "run all code inside", arg{ [generator*()] }
}
