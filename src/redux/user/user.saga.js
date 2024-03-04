import { takeLatest, all, call, put } from "redux-saga/effects";
import { USER_ACTION_TYPES } from "./user.types";
import { signInSuccess, signInWithTokenFailed } from "./user.actions";
import AuthenticationService from "../../services/authenticationService";


export function* signInWithTokenAsync(){
    try{
        const authService = new AuthenticationService();
        const data = yield call(authService.signInWithTokenAsync);
        yield put(signInSuccess(data));
    }
    catch(error){
        yield put(signInWithTokenFailed(error))
    }
}

export function* onSignInUserWithTokenAsync(){
    yield takeLatest(
        USER_ACTION_TYPES.SIGN_IN_WITH_TOKEN_START,
        signInWithTokenAsync
    );
}

export function* userSaga() {
  yield all([call(onSignInUserWithTokenAsync)]); // "run all code inside", arg{ [generator*()] }
}