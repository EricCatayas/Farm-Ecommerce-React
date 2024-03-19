export enum USER_ACTION_TYPES {
  SET_CURRENT_USER = "user/SET_CURRENT_USER",
  CHECK_USER_SESSION = "user/CHECK_USER_SESSION",
  SIGN_IN_START = "user/SIGN_IN_START ",
  SIGN_IN_SUCCESS = "user/SIGN_IN_SUCCESS",
  SIGN_IN_FAILED = "user/SIGN_IN_FAILED",
  SIGN_IN_WITH_TOKEN_START = "user/SIGN_IN_WITH_TOKEN_START",
  SIGN_IN_WITH_TOKEN_SUCCESS = "user/SIGN_IN_WITH_TOKEN_SUCCESS",
  SIGN_IN_WITH_TOKEN_FAILED = "user/SIGN_IN_WITH_TOKEN_FAILED",
  SIGN_UP_START = "user/SIGN_UP_START",
  SIGN_UP_SUCCESS = "user/SIGN_UP_SUCCESS",
  SIGN_UP_FAILED = "user/SIGN_UP_FAILED",
  SIGN_OUT_START = "user/SIGN_OUT_START",
  SIGN_OUT_SUCCESS = "user/SIGN_OUT_SUCCESS",
  SIGN_OUT_FAILED = "user/SIGN_OUT_FAILED",
};

export interface User {
  personName: string;
  email: string;
  token: string;
  expiration: string;
  refreshToken: string;
  refreshTokenExpirationDateTime: string;
}