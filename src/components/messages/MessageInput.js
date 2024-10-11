import React, { useState } from 'react';
import './MessageInput.css';
import useCreateMessage from '../../hooks/message/useCreateMessage';
import { useUser } from '../../context/userContext';

const MessageInput = (conversationId) => {
  const [message, setMessage] = useState('');
  const { user } = useUser();
  const conversationID = conversationId;
  const { createMessage } = useCreateMessage({ conversationID:conversationID, messageData: { messageText: message, senderID: user?.id } });

  const sendMessage = async (e) => {
    e.preventDefault();
    try {
      await createMessage(); // Ensure the message is created successfully
      setMessage(''); // Clear the input after sending
    } catch (error) {
      console.error("Failed to send message", error);
    }
  };

  return (
    <div className="message-input-container">
      <form className='message-input-form'>
        <label htmlFor="chat" className="sr-only">Your message</label>
        <div className="message-input-box">
          <button type="button" className="input-button">
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 20 18">
              <path fill="currentColor" d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z" />
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 1H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z" />
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z" />
            </svg>
          </button>
          <textarea id="chat" rows="1" className="message-textarea" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your message..."></textarea>
          <button type="submit" className="input-button" onClick={sendMessage}>
            <svg className="send-svg w-5 h-5 rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#558bff" viewBox="0 0 18 20">
              <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default MessageInput;
