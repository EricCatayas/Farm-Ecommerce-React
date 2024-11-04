export interface IMessage {
  id: string;
  conversation_id: string;
  sender_id: string;
  message_content: string;
  message_type: string;
  createdAt: string;
  updatedAt: string;
  from: string | undefined;
}

export interface IConversation {
  id: string;
  user_conversation_id: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  messages: IMessage[];
}

export interface IUserConversation {
  id: string;
  user_id: string;
}
