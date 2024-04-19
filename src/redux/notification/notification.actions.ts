import NotificationType from "../../enums/NotificationType";
import { createAction } from "../../utils/reducer.utils"
import { NOTIFICATION_ACTION_TYPES } from "./notification.types"

export const addNotification = (message: string, type: NotificationType ) => {
    return createAction(NOTIFICATION_ACTION_TYPES.ADD_NOTIFICATION, {message, type});
}

export const clearNotifications = () => {
    return createAction(NOTIFICATION_ACTION_TYPES.CLEAR_NOTIFICATION);
}