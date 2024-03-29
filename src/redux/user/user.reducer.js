import { USER_ACTION_TYPES } from "./user.types";

export const USER_INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = USER_INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
      case USER_ACTION_TYPES.SET_CURRENT_USER:
      case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
      case USER_ACTION_TYPES.SIGN_IN_WITH_TOKEN_SUCCESS:
        return { ...state, currentUser: payload };
      case USER_ACTION_TYPES.SIGN_IN_START:
      case USER_ACTION_TYPES.SIGN_IN_WITH_TOKEN_START:
        return { ...state, isLoading: true };
      case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
        return { ...state, currentUser: null };
      case USER_ACTION_TYPES.SIGN_OUT_FAILED:
      case USER_ACTION_TYPES.SIGN_IN_FAILED:
      case USER_ACTION_TYPES.SIGN_IN_WITH_TOKEN_FAILED:
        return { ...state, isLoading:false, error: payload };
      default:
        return state;
    }
}