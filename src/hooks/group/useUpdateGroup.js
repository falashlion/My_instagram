import { useCallback } from 'react';
import { generateClient } from 'aws-amplify/api';
import * as mutations from '../../graphql/mutations';

const client = generateClient();

const useUpdateGroup = () => {
  const updateGroup = useCallback(async (groupData) => {
    try {
      const updatedGroup = await client.graphql({
        query: mutations.updateGroup, 
        variables: { input: groupData },
      });
      return updatedGroup;
    } catch (error) {
      console.error("Error updating group:", error);
      throw new Error("Could not update group.");
    }
  }, []);

  return updateGroup;
};

export default useUpdateGroup;
