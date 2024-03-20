import { USER_ACTION_TYPES } from "./user.types";
import User from "../../models/User";
import { Action, ActionWithPayload, createAction } from "../../utils/reducer.utils";

export type SetCurrentUser = ActionWithPayload<USER_ACTION_TYPES.SET_CURRENT_USER, User>;
export type CheckUserSession = Action<USER_ACTION_TYPES.CHECK_USER_SESSION>;
export type SignInStart = Action<USER_ACTION_TYPES.SIGN_IN_START>;
export type SignInSuccess = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_SUCCESS, User>;
export type SignInFailed = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_FAILED, Error>;
export type SignInWithTokenStart = Action<USER_ACTION_TYPES.SIGN_IN_WITH_TOKEN_START>;
export type SignInWithTokenSuccess = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_WITH_TOKEN_SUCCESS, User>;
export type SignInWithTokenFailed = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_WITH_TOKEN_FAILED, Error>;
export type SignUpStart = Action<USER_ACTION_TYPES.SIGN_UP_START>;
export type SignUpSuccess = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_SUCCESS, User>;
export type SignUpFailed = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_FAILED, Error>;
export type SignOutStart = Action<USER_ACTION_TYPES.SIGN_OUT_START>;
export type SignOutSuccess = Action<USER_ACTION_TYPES.SIGN_OUT_SUCCESS>;
export type SignOutFailed = ActionWithPayload<USER_ACTION_TYPES.SIGN_OUT_FAILED, Error>;

export type UserAction = 
  | SetCurrentUser 
  | CheckUserSession 
  | SignInStart 
  | SignInSuccess 
  | SignInFailed 
  | SignInWithTokenStart 
  | SignInWithTokenSuccess 
  | SignInWithTokenFailed
  | SignUpStart 
  | SignUpSuccess 
  | SignUpFailed 
  | SignOutStart 
  | SignOutSuccess 
  | SignOutFailed;
  
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