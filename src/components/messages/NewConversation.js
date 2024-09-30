import React, { useState } from 'react';
import './NewConversation.css';

const NewConversation = ({ onCreate }) => {
  const [username, setUsername] = useState('');

  const handleCreate = () => {
    // Add new conversation logic
    onCreate();
  };

  return (
    <div className="new-conversation">
      <h2>New Conversation</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter username"
      />
      <button onClick={handleCreate}>Create</button>
    </div>
  );
};

export default NewConversation;
