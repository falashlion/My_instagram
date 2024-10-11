import React, { useState } from 'react';
import ConversationsList from './ConversationsList';
import NewConversation from './NewConversation';
import MessageThread from './MessageThread';
import './MessagesPage.css';
import useGetConversations from '../../hooks/conversation/useGetConversations';




const MessagesPage = () => {
  const { conversations, loading, error } = useGetConversations();
  const [currentConversation, setCurrentConversation] = useState(null);
  const [newConversation, setNewConversation] = useState(false);

  return (
    <div className="messages-page">
      <div className="messages-container">
        <ConversationsList
          conversations={conversations}
          onSelect={(conv) => setCurrentConversation(conv)}
        />
        {newConversation ? (
          <NewConversation onCreate={() => setNewConversation(false)} />
        ) : (
          currentConversation && (
            <MessageThread conversation={currentConversation} />
          )
        )}
      </div>
    </div>
  );
};

export default MessagesPage;
