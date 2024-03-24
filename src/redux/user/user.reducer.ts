import { USER_ACTION_TYPES } from "./user.types";
import User from "../../models/User";
import { AnyAction } from "../../utils/reducer.utils";

export interface UserState {
  readonly currentUser: User | null,
  readonly isLoading: boolean,
  readonly error: string | null,

}
export const USER_INITIAL_STATE : UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state: UserState = USER_INITIAL_STATE, action = {} as AnyAction) : UserState => {

  switch (action.type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
    case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
    case USER_ACTION_TYPES.SIGN_IN_WITH_TOKEN_SUCCESS:
      return { ...state, currentUser: action.payload };
    case USER_ACTION_TYPES.SIGN_IN_START:
    case USER_ACTION_TYPES.SIGN_IN_WITH_TOKEN_START:
      return { ...state, isLoading: true };
    case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:  
      return { ...state, currentUser: null };
    case USER_ACTION_TYPES.SIGN_OUT_FAILED:
    case USER_ACTION_TYPES.SIGN_IN_FAILED:
    case USER_ACTION_TYPES.SIGN_IN_WITH_TOKEN_FAILED:
      return { ...state, isLoading:false, error: action.payload };
    default:
      return state;
  }
}