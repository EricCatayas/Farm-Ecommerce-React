import { takeLatest, all, call, put } from "redux-saga/effects";
import { USER_ACTION_TYPES } from "./user.types";
import { signInSuccess, signInFailed, signInWithTokenSuccess, signInWithTokenFailed } from "./user.actions";
import AuthenticationService from "../../services/AuthenticationService";
import { SagaIterator } from "redux-saga";
import { PayloadAction } from "@reduxjs/toolkit";



export function* signInAsync(action: PayloadAction<{ email: string, password: string, rememberMe: boolean}>): SagaIterator {
  try {
    const authService = new AuthenticationService();
    const { email, password, rememberMe } = action.payload;
    const data = yield call(authService.signInAsync, email, password, rememberMe );

    //LOG
    console.log(`You have been authen: ${data}`);
    
    yield put(signInSuccess(data));
  } catch (error: any) {
    if (error instanceof Error) {
      yield put(signInFailed(error));
    }
    else {
      yield put(signInFailed(new Error(`An error occured: ${error}`)))
    }
  }
}

export function* signInWithTokenAsync(): SagaIterator{
  try{
    //LOG
    console.log("signInUserWithToken in Saga");
    const authService = new AuthenticationService();
    const data = yield call(authService.signInWithTokenAsync);
    console.log(data);
    yield put(signInWithTokenSuccess(data));
  }
  catch(error: any){
    yield put(signInWithTokenFailed(error as Error));        
  }
}

//  "ACTION LISTENER" Functions

export function* onSignInAsync(): SagaIterator{
    yield takeLatest(USER_ACTION_TYPES.SIGN_IN_START, signInAsync);
}

export function* onSignInWithTokenAsync(): SagaIterator{
    yield takeLatest(USER_ACTION_TYPES.SIGN_IN_WITH_TOKEN_START, signInWithTokenAsync);
}


export function* userSaga() {
  yield all([
    call(onSignInAsync),
    call(onSignInWithTokenAsync)
    ]); // "run all code inside", arg{ [generator*()] }
}
