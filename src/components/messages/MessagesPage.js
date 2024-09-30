import React, { useState } from 'react';
import ConversationsList from './ConversationsList';
import NewConversation from './NewConversation';
import MessageThread from './MessageThread';
import './MessagesPage.css';

const mockConversations = [
  { id: 1, name: 'John Doe', lastMessage: 'Hey, how are you?' },
  { id: 2, name: 'Jane Smith', lastMessage: 'Can you send the document?' },
];

const MessagesPage = () => {
  const [currentConversation, setCurrentConversation] = useState(null);
  const [newConversation, setNewConversation] = useState(false);

  return (
    <div className="messages-page">
      <div className="messages-container">
        <ConversationsList
          conversations={mockConversations}
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
