import React, { useState } from 'react';
import './MessageInput.css';

const MessageInput = () => {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    // Handle sending message logic
    setMessage('');
  };

  return (
    <div className="message-input">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default MessageInput;
