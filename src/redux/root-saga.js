import { all, call } from "redux-saga/effects";


import { productCategoriesSaga } from "./productCategory/productCategories.saga";
import { userSaga } from "./user/user.saga";

export function* rootSaga(){
    yield all([call(productCategoriesSaga), call(userSaga)])
}