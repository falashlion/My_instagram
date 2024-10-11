import { useCallback } from 'react';
import { generateClient } from 'aws-amplify/api';
import * as mutations from '../../graphql/mutations'; 

const client = generateClient();

const useUpdatePost = () => {
  const updatePost = useCallback(async (postData) => {
    const { id, content, mediaURL } = postData;

    try {
      const updatedPost = await client.graphql({
        query: mutations.updatePost, 
        variables: { input: { id, content, mediaURL } },
      });
      return updatedPost;
    } catch (error) {
      console.error("Error updating post:", error);
      throw new Error("Could not update post.");
    }
  }, []);

  return updatePost;
};

export default useUpdatePost;
