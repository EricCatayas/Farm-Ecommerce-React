import { takeLatest, all, call, put, select } from "redux-saga/effects";
import { USER_ACTION_TYPES } from "./user.types";
import { signInSuccess, signInFailed, signInWithTokenSuccess, signInWithTokenFailed } from "./user.actions";
import { addNotification } from "../notification/notification.actions";
import { SagaIterator } from "redux-saga";
import { PayloadAction } from "@reduxjs/toolkit";
import AuthenticationService from "../../services/AuthenticationService";
import NotificationType from "../../enums/NotificationType";



export function* signInAsync(action: PayloadAction<{ email: string, password: string, rememberMe: boolean}>): SagaIterator {
  try {
    const authService = new AuthenticationService();
    const { email, password, rememberMe } = action.payload;
    const data = yield call(authService.signInAsync, email, password, rememberMe );

    //LOG
    console.log(`You have been authen: ${data}`);
    
    yield put(signInSuccess(data));
  } catch (error: any) {
      yield put(signInFailed(error.message));
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
    yield put(signInWithTokenFailed(error.message));        
  }
}

export function* signInAsyncFailed(): SagaIterator{
  try{
    //LOG
    console.log("signInFailed in Saga");
    const user = yield select(state => state.user);
    const { error } = user;
    yield put(addNotification(`Sign in failed: ${error}`, NotificationType.error));
  }
  catch(error: any){
    console.log(error.message);    
  }
}

//  "ACTION LISTENER" Functions

export function* onSignInAsync(): SagaIterator{
    yield takeLatest(USER_ACTION_TYPES.SIGN_IN_START, signInAsync);
}

export function* onSignInWithTokenAsync(): SagaIterator{
    yield takeLatest(USER_ACTION_TYPES.SIGN_IN_WITH_TOKEN_START, signInWithTokenAsync);
}

export function* onSignInFailed(): SagaIterator{
    yield takeLatest(USER_ACTION_TYPES.SIGN_IN_FAILED, signInAsyncFailed);
}


export function* userSaga() {
  yield all([
    call(onSignInAsync),
    call(onSignInWithTokenAsync),
    call(onSignInFailed)
    ]); // "run all code inside", arg{ [generator*()] }
}
