import { createAction } from "../../utils/reducer.utils";

import { CONVERSATION_ACTION_TYPES } from "./conversations.types";
import { IConversation } from "../../models/Conversations";

export const fetchConversationsStart = () =>
  createAction(CONVERSATION_ACTION_TYPES.FETCH_CONVERSATIONS_START);

export const fetchConversationsSuccess = (conversations: IConversation[]) =>
  createAction(
    CONVERSATION_ACTION_TYPES.FETCH_CONVERSATIONS_SUCCESS,
    conversations
  );

export const fetchConversationsFailed = (error: string) =>
  createAction(CONVERSATION_ACTION_TYPES.FETCH_CONVERSATIONS_FAILED, error);

export const fetchConversationStart = (conversationId: number) =>
  createAction(
    CONVERSATION_ACTION_TYPES.FETCH_CONVERSATION_START,
    conversationId
  );

export const fetchConversationSuccess = (conversation: IConversation) =>
  createAction(
    CONVERSATION_ACTION_TYPES.FETCH_CONVERSATION_SUCCESS,
    conversation
  );

export const fetchConversationFailed = (error: string) =>
  createAction(CONVERSATION_ACTION_TYPES.FETCH_CONVERSATION_FAILED, error);
