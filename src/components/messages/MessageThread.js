import React from 'react';
import MessageInput from './MessageInput';
import './MessageThread.css';

const mockMessages = [
  { id: 1, sender: 'John Doe', text: 'Hello!', type: 'text' },
  { id: 2, sender: 'Me', text: 'Hi, how are you?', type: 'text' },
  { id: 3, sender: 'John Doe', text: 'https://via.placeholder.com/150', type: 'image' },
];

const MessageThread = ({ conversation }) => {
  return (
    <div className="message-thread">
      <h2>{conversation.name}</h2>
      <div className="messages">
        {mockMessages.map((message) => (
          <div key={message.id} className={`message ${message.sender === 'Me' ? 'sent' : 'received'}`}>
            {message.type === 'text' ? (
              <p>{message.text}</p>
            ) : (
              <img className='rounded-xl' src={message.text} alt="media" />
            )}
          </div>
        ))}
      </div>
      <MessageInput />
    </div>
  );
};

export default MessageThread;

