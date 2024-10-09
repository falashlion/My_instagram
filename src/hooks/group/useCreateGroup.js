import { useCallback } from 'react';
import { generateClient } from 'aws-amplify/api';
import * as mutations from '../graphql/mutations';

const client = generateClient();

const useCreateGroup = () => {
  const createGroup = useCallback(async (groupData) => {
    try {
      const newGroup = await client.graphql({
        query: mutations.createGroup, 
        variables: { input: groupData },
      });
      return newGroup;
    } catch (error) {
      console.error("Error creating group:", error);
      throw new Error("Could not create group.");
    }
  }, []);

  return createGroup;
};

export default useCreateGroup;
