import NotificationType from "../../enums/NotificationType";
import { AnyAction } from "../../utils/reducer.utils";
import { NOTIFICATION_ACTION_TYPES } from "./notification.types";

export interface NotificationState {
    readonly message: string | null,
    readonly type: NotificationType | null
}
export const NOTIFICATION_INITIAL_STATE : NotificationState = {
  message: null,
  type: null
}

export const notificationReducer = (state: NotificationState = NOTIFICATION_INITIAL_STATE, action = {} as AnyAction) : NotificationState => {
  switch(action.type){
    case NOTIFICATION_ACTION_TYPES.ADD_NOTIFICATION:
      const { message, type } = action.payload; 
      return { ...state, message, type };
    case NOTIFICATION_ACTION_TYPES.CLEAR_NOTIFICATION:
      return { ...state, message: null, type: null };
    default: 
      return state;
  }
}