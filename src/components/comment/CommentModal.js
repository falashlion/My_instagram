import React, { useState } from 'react';
import './CommentModal.css'; 

const CommentModal = ({ isOpen, onClose, post }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // *********Add logic to submit the comment*****
    console.log('Comment:', comment);
    onClose(); 
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h3>{`Add a Comment to ${post.content}`}</h3>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="card" style="width: 18rem;">
        <img className="card-img-top" src="..." alt="Card image cap"/>
        <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        </div>
        {/* *****add display of comments here***** */}
        <form onSubmit={handleSubmit}>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add your comment..."
            required
          />
          <button type="submit" className="submit-button">
            Post Comment
          </button>
        </form>
      </div>
    </div>
  );
};

export default CommentModal;
