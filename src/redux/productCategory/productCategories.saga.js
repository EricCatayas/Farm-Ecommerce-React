import { takeLatest, all, call, put, throttle } from 'redux-saga/effects';
import { setProductCategories, setErrors, setLoading } from "../../redux-toolkit/productCategory/productCategoriesSlice";
import ProductCategoriesService from '../../services/productCategoriesService';
import { PRODUCT_CATEGORIES_ACTION_TYPES } from './productCategories.types';

export function* fetchProductCategoriesAsync(){
  try {
    dispatch(setLoading(true));
    const productCategoriesService = new ProductCategoriesService();

    const data = yield call(productCategoriesService.fetchAllAsync()); // "call(func, func args) converts function to effect"

    yield put(setProductCategories(data));
  } catch (error) {
    yield put(setErrors([error.message]));
  } finally {
    yield put(setLoading(false));
  }
};

// This saga is listening for "FETCH_PRODUCT_CATEGORIES_START" action dispatch
export function* onFetchProductCategories(){
  yield takeLatest(
    PRODUCT_CATEGORIES_ACTION_TYPES.FETCH_PRODUCT_CATEGORIES_START,
    fetchProductCategoriesAsync 
  ) 
  // takeLatest() : "If saga is invoked, give me the latest action", arg{ action type , generator*() }

  /* yield throttle('2000', 
    PRODUCT_CATEGORIES_ACTION_TYPES.FETCH_PRODUCT_CATEGORIES_START,
      fetchProductCategoriesAsync; 
  ) Only invoke this saga every 2 seconds*/
}

export function* categoriesSaga(){
  yield all([call(onFetchProductCategories)]) // "run all code inside", arg{ [generator*()] }
  
}