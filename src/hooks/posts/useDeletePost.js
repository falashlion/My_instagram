import { useCallback } from 'react';
import { generateClient } from 'aws-amplify/api';
import * as mutations from '../../graphql/mutations'; 

const client = generateClient();

const useDeletePost = () => {
  const deletePost = useCallback(async (id) => {
    try {
      const deletedPost = await client.graphql({
        query: mutations.deletePost, 
        variables: { input: { id } },
      });
      return deletedPost;
    } catch (error) {
      console.error("Error deleting post:", error);
      throw new Error("Could not delete post.");
    }
  }, []);

  return deletePost;
};

export default useDeletePost;

