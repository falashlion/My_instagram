import { useCallback } from 'react';
import { generateClient } from 'aws-amplify/api';
import * as mutations from '../../graphql/mutations';

const client = generateClient();

const useCreateGroupMember = () => {
  const createGroupMember = useCallback(async (groupMemberData) => {
    try {
      const newGroupMember = await client.graphql({
        query: mutations.createGroupMember, 
        variables: { input: groupMemberData },
      });
      return newGroupMember;
    } catch (error) {
      console.error("Error creating group member:", error);
      throw new Error("Could not create group member.");
    }
  }, []);

  return createGroupMember;
};

export default useCreateGroupMember;
