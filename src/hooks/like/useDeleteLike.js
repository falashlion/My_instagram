import { useCallback } from 'react';
import { generateClient } from 'aws-amplify/api';
import * as mutations from '../../graphql/mutations';

const client = generateClient();

const useDeleteLike = () => {
  const deleteLike = useCallback(async (id) => {
    try {
      const deletedLike = await client.graphql({
        query: mutations.deleteLike, 
        variables: { input: { id } },
      });
      return deletedLike;
    } catch (error) {
      console.error("Error deleting like:", error);
      throw new Error("Could not delete like.");
    }
  }, []);

  return deleteLike;
};

export default useDeleteLike;
