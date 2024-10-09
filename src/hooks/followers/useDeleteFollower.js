import { useCallback } from 'react';
import { generateClient } from 'aws-amplify/api';
import * as mutations from '../graphql/mutations';

const client = generateClient();

const useDeleteFollower = () => {
  const deleteFollower = useCallback(async (id) => {
    try {
      const deletedFollower = await client.graphql({
        query: mutations.deleteFollower, 
        variables: { input: { id } },
      });
      return deletedFollower;
    } catch (error) {
      console.error("Error deleting follower:", error);
      throw new Error("Could not delete follower.");
    }
  }, []);

  return deleteFollower;
};

export default useDeleteFollower;
