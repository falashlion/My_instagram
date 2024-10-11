import { useCallback } from 'react';
import { generateClient } from 'aws-amplify/api';
import * as mutations from '../../graphql/mutations';

const client = generateClient();

const useDeleteGroup = () => {
  const deleteGroup = useCallback(async (id) => {
    try {
      const deletedGroup = await client.graphql({
        query: mutations.deleteGroup, 
        variables: { input: { id } },
      });
      return deletedGroup;
    } catch (error) {
      console.error("Error deleting group:", error);
      throw new Error("Could not delete group.");
    }
  }, []);

  return deleteGroup;
};

export default useDeleteGroup;
