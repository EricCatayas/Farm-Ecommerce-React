import { SagaIterator } from "redux-saga";
import { takeLatest, all, call, put } from "redux-saga/effects";
import ConversationsService from "../../services/ConversationsService";
import {
  fetchConversationsFailed,
  fetchConversationsSuccess,
} from "./conversations.action";
import { PayloadAction } from "@reduxjs/toolkit";
import { CONVERSATION_ACTION_TYPES } from "./conversations.types";

export function* fetchConversationsAsync(): SagaIterator {
  try {
    console.log("fetchConversationsAsync saga");
    const conversationsService = new ConversationsService();
    const data = yield call(conversationsService.fetchAllAsync);
    yield put(fetchConversationsSuccess(data));
  } catch (error: any) {
    yield put(fetchConversationsFailed(error.message));
  }
}

export function* onFetchConversationsStart(): SagaIterator {
  yield takeLatest(
    CONVERSATION_ACTION_TYPES.FETCH_CONVERSATIONS_START,
    fetchConversationsAsync
  );
}

export function* conversationsSaga(): SagaIterator {
  yield all([call(onFetchConversationsStart)]);
}
