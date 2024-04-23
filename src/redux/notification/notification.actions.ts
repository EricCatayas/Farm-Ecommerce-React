import NotificationType from "../../enums/NotificationType";
import { createAction } from "../../utils/reducer.utils"
import { NOTIFICATION_ACTION_TYPES } from "./notification.types"

export const addNotification = (message: string, type: NotificationType ) => {
    return createAction(NOTIFICATION_ACTION_TYPES.ADD_NOTIFICATION, {message, type});
}

export const addSuccessNotification = (message: string) => {
    return addNotification(message, NotificationType.success)
}

export const addInfoNotification = (message: string) => {
    return addNotification(message, NotificationType.info);
}

export const addWarningNotification = (message: string) => {
    return addNotification(message, NotificationType.warning);
}

export const addErrorNotification = (message: string) => {
    return addNotification(message, NotificationType.error);
}

export const clearNotifications = () => {
    return createAction(NOTIFICATION_ACTION_TYPES.CLEAR_NOTIFICATION);
}