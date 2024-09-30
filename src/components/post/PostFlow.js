import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import CreatePost from './CreatePost';
import PostDetails from './PostDetails';
import PostPreview from './PostPreview';


const PostFlow = () => {
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState('');
  const navigate = useNavigate();

  const handleNextStep = (data) => {
    if (!file) {
      setFile(data);
      navigate('/post/details');
    } else {
      setCaption(data);
      navigate('/post/preview');
    }
  };

  const handleShare = () => {
    console.log('Post shared with caption:', caption);
    // Optionally, navigate to another route or reset the post creation flow
    navigate('/');
  };

  return (
    <Routes>
      <Route path="/" element={<CreatePost onNext={handleNextStep} />} />
      <Route path="/details" element={<PostDetails file={file} onNext={handleNextStep} />} />
      <Route path="/preview" element={<PostPreview file={file} caption={caption} onShare={handleShare} />} />
    </Routes>
  );
};

export default PostFlow;
