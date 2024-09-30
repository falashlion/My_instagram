import React from 'react';
import './ConversationsList.css';

const ConversationsList = ({ conversations, onSelect }) => {
  return (
    <div className="conversations-list">
      <button onClick={() => onSelect(null)} className="new-conversation-button">
        New Conversation
      </button>
      {conversations.map((conv) => (
        <div key={conv.id} className="conversation-item" onClick={() => onSelect(conv)}>
          <div className="conversation-name">{conv.name}</div>
          <div className="conversation-last-message">{conv.lastMessage}</div>
        </div>
      ))}
    </div>
  );
};

export default ConversationsList;
