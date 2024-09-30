import React, { useState } from 'react';
import './PostDetails.css';

const PostDetails = ({ file, onNext }) => {
  const [caption, setCaption] = useState('');

  const handleNext = () => {
    onNext(caption);
  };

  const previewUrl = file ? URL.createObjectURL(file) : null;

  return (
    <div className="post-details-wrapper">
      <div className="post-details-container">
        <div className="preview-section">
          {previewUrl ? (
            <img src={previewUrl} alt="Post Preview" className="post-image" />
          ) : (
            <p>No image to display</p>
          )}
        </div>
        <div className="details-section">
          <div className="user-info">
            <img
              src="https://via.placeholder.com/50"
              alt="User Profile"
              className="user-avatar"
            />
            <p className="username">lion.o22</p>
          </div>
          <textarea
            className="caption-input"
            placeholder="Write a caption..."
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          />
          <div className="additional-options">
            <button className="add-location">Add location</button>
            <button className="add-collaborator">Add collaborators</button>
            <button className="accessibility-options">Accessibility</button>
            <button className="advanced-settings">Advanced settings</button>
          </div>
          <button onClick={handleNext} className="share-btn">Next</button>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
