import { IConversation, IMessage } from "../models/Conversations"; // Adjust the import path as necessary

const fakeConversations: IConversation[] = [
  {
    id: "1",
    status: "active",
    createdAt: "2023-01-01T00:00:00Z",
    updatedAt: "2023-01-01T00:00:00Z",
    user_conversation_id: "",
    messages: [
      {
        id: "1",
        conversation_id: "1",
        sender_id: "user1",
        message_content: "Hello!",
        message_type: "text",
        createdAt: "2023-01-01T00:00:00Z",
        updatedAt: "2023-01-01T00:00:00Z",
        from: "user1",
      },
      {
        id: "2",
        conversation_id: "1",
        sender_id: "user2",
        message_content: "Hi there!",
        message_type: "text",
        createdAt: "2023-01-01T00:01:00Z",
        updatedAt: "2023-01-01T00:01:00Z",
        from: "user2",
      },
    ],
  },
  {
    id: "2",
    status: "inactive",
    user_conversation_id: "",
    createdAt: "2023-01-02T00:00:00Z",
    updatedAt: "2023-01-02T00:00:00Z",
    messages: [
      {
        id: "3",
        conversation_id: "2",
        sender_id: "user3",
        message_content: "Good morning!",
        message_type: "text",
        createdAt: "2023-01-02T00:00:00Z",
        updatedAt: "2023-01-02T00:00:00Z",
        from: "user3",
      },
    ],
  },
];

class ConversationsService {
  async fetchAllAsync() {
    // todo: fetch data from an API
    return fakeConversations;
  }

  async fetchConversationAsync(id: string) {
    // todo: fetch data from an API
    return fakeConversations.find((conversation) => conversation.id === id);
  }
}

export default ConversationsService;
