import { all, call } from "redux-saga/effects";

import { categoriesSaga } from "./productCategory/productCategories.saga";

export function* rootSaga(){
    yield all([call(categoriesSaga)])
}