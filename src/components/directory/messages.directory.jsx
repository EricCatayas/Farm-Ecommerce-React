import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchConversationsStart } from "../../redux/conversation/conversations.action";

const MessagesDirectory = () => {
  const dispatch = useDispatch();
  const { conversations, isLoading, error } = useSelector(
    (state) => state.conversations
  );
  const [selectedConversation, setSelectedConversation] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(fetchConversationsStart());
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const onClickEventHandler = (conversationId) => {
    const conversation = conversations.find((c) => c.id === conversationId);
    setSelectedConversation(conversation);
  };

  const getLastMessageContent = (messages) => {
    if (messages.length === 0) return "";
    return messages[messages.length - 1].message_content;
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {!isLoading && !error && (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Status</th>
                <th>Created At</th>
                <th>Last Message</th>
              </tr>
            </thead>
            <tbody>
              {conversations.map((conversation) => (
                <tr
                  key={conversation.id}
                  onClick={() => onClickEventHandler(conversation.id)}
                >
                  <td>{conversation.id}</td>
                  <td>{conversation.status}</td>
                  <td>{conversation.createdAt}</td>
                  <td>{getLastMessageContent(conversation.messages)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div style={{ flex: 1, padding: "0 20px" }}>
        {selectedConversation && (
          <div>
            <h2>Conversation ID: {selectedConversation.id}</h2>
            <p>Status: {selectedConversation.status}</p>
            <p>Created At: {selectedConversation.createdAt}</p>
            <p>Updated At: {selectedConversation.updatedAt}</p>
            <div>
              <h3>Messages:</h3>
              {selectedConversation.messages.map((message) => (
                <div key={message.id}>
                  <p>
                    <strong>{message.from}:</strong> {message.message_content}
                  </p>
                  <p>
                    <small>{message.createdAt}</small>
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessagesDirectory;
