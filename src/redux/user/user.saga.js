import { takeLatest, all, call, put } from "redux-saga/effects";
import { USER_ACTION_TYPES } from "./user.types";
import { signInSuccess, signInFailed, signInWithTokenSuccess, signInWithTokenFailed } from "./user.actions";
import AuthenticationService from "../../services/authenticationService";



export function* signInAsync({ payload: { email, password, rememberMe } }) {
  try {
    const authService = new AuthenticationService();
    const data = yield call(authService.signInAsync, email, password, rememberMe );

    //LOG
    console.log(`You have been authen: ${data}`);
    
    yield put(signInSuccess(data));
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signInWithTokenAsync(){
  try{
    //LOG
    console.log("signInUserWithToken in Saga");
    const authService = new AuthenticationService();
    const data = yield call(authService.signInWithTokenAsync);
    console.log(data);
    yield put(signInWithTokenSuccess(data));
  }
  catch(error){
    yield put(signInWithTokenFailed(error))
  }
}

//  "ACTION LISTENER" Functions

export function* onSignInAsync(){
    yield takeLatest(USER_ACTION_TYPES.SIGN_IN_START, signInAsync);
}

export function* onSignInWithTokenAsync(){
    yield takeLatest(USER_ACTION_TYPES.SIGN_IN_WITH_TOKEN_START, signInWithTokenAsync);
}


export function* userSaga() {
  yield all([
    call(onSignInAsync),
    call(onSignInWithTokenAsync)
    ]); // "run all code inside", arg{ [generator*()] }
}
