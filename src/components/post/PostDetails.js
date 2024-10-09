import React, { useState } from 'react';
import './PostDetails.css';

const PostDetails = ({ file, onNext }) => {
  const [caption, setCaption] = useState('');
  const [showLocationInput, setShowLocationInput] = useState(false);
  const [showTagsDropdown, setShowTagsDropdown] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);

  const mockTags = ['Nature', 'City', 'Adventure', 'Beach', 'Mountains'];

  const toggleLocationInput = () => {
    setShowLocationInput(!showLocationInput);
  };

  const toggleTagsDropdown = () => {
    setShowTagsDropdown(!showTagsDropdown);
  };

  const handleTagSelect = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };


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
          <button className="add-location" onClick={toggleLocationInput}>
              Add location
            </button>
            {showLocationInput && (
              <input type="text" placeholder="Enter location" className="location-input" />
            )}

            <button className="add-tags" onClick={toggleTagsDropdown}>
              Add tags
            </button>
            {showTagsDropdown && (
              <div className="tags-dropdown">
                {mockTags.map((tag, index) => (
                  <div key={index} className="tag-item" onClick={() => handleTagSelect(tag)}>
                    {tag} {selectedTags.includes(tag) ? '✔' : ''}
                  </div>
                ))}
              </div>
            )}
          </div>
          <button onClick={handleNext} className="share-btn">Next</button>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
