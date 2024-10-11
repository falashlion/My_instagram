import { useState, useCallback } from 'react';
import { generateClient } from 'aws-amplify/api';
import * as mutations from '../../graphql/mutations';
import { uploadData, getUrl } from 'aws-amplify/storage';

const client = generateClient();

const useCreatePost = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [url, setUrl] = useState();
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  const uploadImage = useCallback(async (file) => {
    try {
      const response = await uploadData(
        {
          key: `/${file?.name}`,
          data: file,
        }).result;

        if(response?.key){
          const fileurl = await getUrl({
            key:response.key,
            options: {
            expiresIn: 4800
            }
          });
          setUrl(fileurl.url);
          return fileurl.url; 
        }
    } catch (error) {
      setError("Error uploading image.");
      console.error("Error uploading image:", error);
      throw error;
    }
  }, []);

  const createPost = useCallback(async (postData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    const completePostData = {
      ...postData,
      mediaURL:url,
    };

    try {
      await delay(2000);
      console.log(postData);
      const newPost = await client.graphql({
        query: mutations.createPost,
        variables: { input: completePostData },
      });
      
      setSuccess(true);
      return newPost.data.createPost; 
    } catch (error) {
      setError("Error creating post.");
      console.error("Error creating post:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  }, []);

  const resetState = () => {
    setLoading(false);
    setError(null);
    setSuccess(false);
  };

  return { createPost, uploadImage, loading, error, success, url, resetState };
};

export default useCreatePost;
