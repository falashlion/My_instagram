import { useCallback } from 'react';
import { generateClient } from 'aws-amplify/api';
import * as mutations from '../graphql/mutations';

const client = generateClient();

const useDeleteConversation = () => {
  const deleteConversation = useCallback(async (id) => {
    try {
      const deletedConversation = await client.graphql({
        query: mutations.deleteConversation, 
        variables: { input: { id } },
      });
      return deletedConversation;
    } catch (error) {
      console.error("Error deleting conversation:", error);
      throw new Error("Could not delete conversation.");
    }
  }, []);

  return deleteConversation;
};

export default useDeleteConversation;
