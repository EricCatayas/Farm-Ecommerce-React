import { all, call } from "redux-saga/effects";
import { productsListPaginationSaga } from "./productsListPagination/productsListPagination.saga";
import { productCategoriesSaga } from "./productCategory/productCategories.saga";
import { userSaga } from "./user/user.saga";
import { conversationsSaga } from "./conversation/conversations.saga";

export default function* rootSaga() {
  yield all([
    call(userSaga),
    call(productCategoriesSaga),
    call(productsListPaginationSaga),
    call(conversationsSaga),
  ]);
}
