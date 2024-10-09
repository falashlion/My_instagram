import { useCallback } from 'react';
import { generateClient } from 'aws-amplify/api';
import * as mutations from '../graphql/mutations';

const client = generateClient();

const useUpdateComment = () => {
  const updateComment = useCallback(async (commentData) => {
    try {
      const updatedComment = await client.graphql({
        query: mutations.updateComment, 
        variables: { input: commentData },
      });
      return updatedComment;
    } catch (error) {
      console.error("Error updating comment:", error);
      throw new Error("Could not update comment.");
    }
  }, []);

  return updateComment;
};

export default useUpdateComment;
