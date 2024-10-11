import { useState, useCallback } from 'react';
import { generateClient } from 'aws-amplify/api';
import { uploadData, getUrl } from 'aws-amplify/storage'; 
import { updateUser } from '../../graphql/mutations'; 

const client = generateClient();

const useUpdateUserAvatar = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [url, setUrl]= useState(null);

  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const uploadImage = useCallback(async (file) => {
    try {
      // Upload image to AWS S3
      const response = await uploadData({
        key: `/${file?.name}`,
        data: file,
      }).result;

      if(response?.key){
        const fileurl = await getUrl({
          key:response.key,
          options: {
            expiresIn: 604800
            }
        });
        setUrl(fileurl.url);
        return fileurl.url; 
      }
      
    } catch (error) {
      setError("Error uploading image.");
      console.error("Error uploading image:", error);
      return null;
    }
  }, []);

  const updateUserAvatar = useCallback(async (userId) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    const avatarteUrl = url;
    try {
      await delay(2000);
      // Update the user avatar with the uploaded image URL
      const updatedUser = await client.graphql({
        query: updateUser,
        variables: {
          input: {
            id: userId,
            avatar: avatarteUrl,
          },
        },
      });
      setSuccess(true);
      return updatedUser.data.updateUser;
    } catch (error) {
      setError("Error updating user avatar.");
      console.error("Error updating user avatar:", error);
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

  return { uploadImage, updateUserAvatar, loading, error, success, resetState };
};

export default useUpdateUserAvatar;
