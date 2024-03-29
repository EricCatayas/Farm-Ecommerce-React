import { USER_ACTION_TYPES } from "./user.types";
import { createAction } from "../../utils/reducer.utils";

export const setCurrentUser = (user) =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);

export const checkUserSession = () =>
  createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);

export const signInStart = (email, password, rememberMe) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_START, { email, password, rememberMe} );

export const signInSuccess = (user) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);

export const signInFailed = (error) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error);

export const signInWithTokenStart = () =>
  createAction(USER_ACTION_TYPES.SIGN_IN_WITH_TOKEN_START);

export const signInWithTokenSuccess = (user) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_WITH_TOKEN_SUCCESS, user);

export const signInWithTokenFailed = (error) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_WITH_TOKEN_FAILED, error);

export const signUpStart = (email, password) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_START, { email,password });

export const signUpSuccess = (user, additionalDetails) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user, additionalDetails });

export const signUpFailed = (error) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error);

export const signOutStart = () =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_START);

export const signOutSuccess = () =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS);

export const signOutFailed = (error) =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error);