import Product from "../../models/Product";
import { CONVERSATION_ACTION_TYPES } from "./conversations.types";
import { AnyAction } from "../../utils/reducer.utils";
import { IConversation } from "../../models/Conversations";

interface ConversationsState {
  readonly conversations: any[];
  readonly isLoading: boolean;
  readonly error: string | null;
}

export const CONVERSATIONS_INITIAL_STATE: ConversationsState = {
  conversations: [],
  isLoading: false,
  error: null,
};

export const conversationsReducer = (
  state: ConversationsState = CONVERSATIONS_INITIAL_STATE,
  action = {} as AnyAction
): ConversationsState => {
  switch (action.type) {
    case CONVERSATION_ACTION_TYPES.SET_CONVERSATION:
    // case CONVERSATION_ACTION_TYPES.FETCH_CONVERSATION_START:
    //   return { ...state, isLoading: true };
    // case CONVERSATION_ACTION_TYPES.FETCH_CONVERSATION_SUCCESS:
    //   return { ...state, currentConversation: action.payload, isLoading: false };
    // case CONVERSATION_ACTION_TYPES.FETCH_CONVERSATION_FAILED:
    //   return { ...state, error: action.payload, isLoading: false };
    case CONVERSATION_ACTION_TYPES.FETCH_CONVERSATIONS_START:
      return { ...state, isLoading: true };
    case CONVERSATION_ACTION_TYPES.FETCH_CONVERSATIONS_SUCCESS:
      return { ...state, conversations: action.payload, isLoading: false };
    case CONVERSATION_ACTION_TYPES.FETCH_CONVERSATIONS_FAILED:
      return { ...state, error: action.payload, isLoading: false };

    default:
      return state;
  }
};
