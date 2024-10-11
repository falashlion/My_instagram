import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import CreatePost from './CreatePost';
import PostDetails from './PostDetails';
import PostPreview from './PostPreview';
import useCreatePost from '../../hooks/posts/useCreatePost';
import { useUser } from '../../context/userContext';
import Spinner from '../Spinner/Spinner';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const PostFlow = () => {
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState('');
  const [location, setLocation] = useState('');
  const [Url, setUrl] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const navigate = useNavigate();
  const { user } = useUser();
  const { createPost, uploadImage, loading, error, success,url, resetState } = useCreatePost();

  const handleNextStep = (caption,location,selectedTags) => {
    if (!file) {
      setFile(caption);
      navigate('/post/details');
    } else {
      setCaption(caption);
      setLocation(location);
      setSelectedTags(selectedTags);
      navigate('/post/preview');
    }
  };

  const handleShare = async () => {

    try{
      if (!file) {
        alert("Please select an image.");
        return;
      }
    const fileurl =  await uploadImage(file);
      setUrl(fileurl);
    }catch (e) {
      console.error("Failed to upload image:", e);
      alert('Failed to upload image');
    }

    const postUrl = url || Url;
    const postData = {
      userID: user?.id, 
      content: caption, 
      mediaType: file?.mediaType,  
      location: location,  
      tags: selectedTags,
      owner: user?.id       
    };

    try {
      delay(2000);
      await createPost(postData);
      alert("Post created successfully!");
      // setContent(''); 
    } catch (e) {
      console.error("Failed to create post:", e);
    }
    navigate('/');
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <Routes>
      <Route path="/" element={<CreatePost onNext={handleNextStep} />} />
      <Route path="/details" element={<PostDetails file={file} onNext={handleNextStep} />} />
      <Route path="/preview" element={<PostPreview file={file} caption={caption}  onShare={handleShare} />} />
      
    </Routes>
  );
};

export default PostFlow;
