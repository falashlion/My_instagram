import { useCallback } from 'react';
import { generateClient } from 'aws-amplify/api';
import * as mutations from '../../graphql/mutations';

const client = generateClient();

const useUpdateConversation = () => {
  const updateConversation = useCallback(async (conversationData) => {
    try {
      const updatedConversation = await client.graphql({
        query: mutations.updateConversation, 
        variables: { input: conversationData },
      });
      return updatedConversation;
    } catch (error) {
      console.error("Error updating conversation:", error);
      throw new Error("Could not update conversation.");
    }
  }, []);

  return updateConversation;
};

export default useUpdateConversation;
