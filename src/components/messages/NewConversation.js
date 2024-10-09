import React, { useState } from 'react';
import './NewConversation.css';

const NewConversation = ({ onCreate }) => {
  const [username, setUsername] = useState('');

  const handleCreate = () => {
    // Add new conversation logic here
    onCreate();
  };

  return (
    <div className="overlay">
      <div className="new-conversation-popup">
        <div className="popup-header">
          {/* <h2>New message</h2> */}
          {/* <button className="close-button" onClick={onCreate}>×</button> */}
        </div>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Search..."
          className="search-input"
        />
        <div className="no-account-found">No account found.</div>
        <button className="create-button" onClick={handleCreate}>Chat</button>
      </div>
    </div>
  );
};

export default NewConversation;
