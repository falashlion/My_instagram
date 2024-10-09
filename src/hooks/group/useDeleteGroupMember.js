import { useCallback } from 'react';
import { generateClient } from 'aws-amplify/api';
import * as mutations from '../graphql/mutations';

const client = generateClient();

const useDeleteGroupMember = () => {
  const deleteGroupMember = useCallback(async (id) => {
    try {
      const deletedGroupMember = await client.graphql({
        query: mutations.deleteGroupMember, 
        variables: { input: { id } },
      });
      return deletedGroupMember;
    } catch (error) {
      console.error("Error deleting group member:", error);
      throw new Error("Could not delete group member.");
    }
  }, []);

  return deleteGroupMember;
};

export default useDeleteGroupMember;
