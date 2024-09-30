import React from 'react';
import './PostPreview.css';

const PostPreview = ({ file, caption, onShare }) => {
  return (
    <div className="post-preview-container">
      <div className="preview">
        <img src={URL.createObjectURL(file)} alt="Post Preview" className="final-image" />
        <p>{caption}</p>
      </div>
      <button onClick={onShare} className="share-btn">Share</button>
    </div>
  );
};

export default PostPreview;
