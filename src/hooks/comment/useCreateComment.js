import { useCallback } from 'react';
import { generateClient } from 'aws-amplify/api';
import * as mutations from '../../graphql/mutations';

const client = generateClient();

const useCreateComment = () => {
  const createComment = useCallback(async (commentData) => {
    try {
      const newComment = await client.graphql({
        query: mutations.createComment, 
        variables: { input: commentData },
      });
      return newComment;
    } catch (error) {
      console.error("Error creating comment:", error);
      throw new Error("Could not create comment.");
    }
  }, []);

  return createComment;
};

export default useCreateComment;
