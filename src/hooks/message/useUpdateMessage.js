import { useCallback } from 'react';
import { generateClient } from 'aws-amplify/api';
import * as mutations from '../graphql/mutations';

const client = generateClient();

const useUpdateMessage = () => {
  const updateMessage = useCallback(async (messageData) => {
    try {
      const updatedMessage = await client.graphql({
        query: mutations.updateMessage, 
        variables: { input: messageData },
      });
      return updatedMessage;
    } catch (error) {
      console.error("Error updating message:", error);
      throw new Error("Could not update message.");
    }
  }, []);

  return updateMessage;
};

export default useUpdateMessage;
