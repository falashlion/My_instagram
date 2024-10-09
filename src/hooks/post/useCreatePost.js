import { useCallback } from 'react';
import { generateClient } from 'aws-amplify/api';
import * as mutations from '../graphql/mutations'; 

const client = generateClient();

const useCreatePost = () => {
  const createPost = useCallback(async (postData) => {
    try {
      const newPost = await client.graphql({
        query: mutations.createPost, 
        variables: { input: postData },
      });
      return newPost;
    } catch (error) {
      console.error("Error creating post:", error);
      throw new Error("Could not create post.");
    }
  }, []);

  return createPost;
};

export default useCreatePost;
