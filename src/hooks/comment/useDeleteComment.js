import { useCallback } from 'react';
import { generateClient } from 'aws-amplify/api';
import * as mutations from '../../graphql/mutations';

const client = generateClient();

const useDeleteComment = () => {
  const deleteComment = useCallback(async (id) => {
    try {
      const deletedComment = await client.graphql({
        query: mutations.deleteComment, 
        variables: { input: { id } },
      });
      return deletedComment;
    } catch (error) {
      console.error("Error deleting comment:", error);
      throw new Error("Could not delete comment.");
    }
  }, []);

  return deleteComment;
};

export default useDeleteComment;
