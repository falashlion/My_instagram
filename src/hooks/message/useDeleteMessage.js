import { useCallback } from 'react';
import { generateClient } from 'aws-amplify/api';
import * as mutations from '../graphql/mutations';

const client = generateClient();

const useDeleteMessage = () => {
  const deleteMessage = useCallback(async (id) => {
    try {
      const deletedMessage = await client.graphql({
        query: mutations.deleteMessage, 
        variables: { input: { id } },
      });
      return deletedMessage;
    } catch (error) {
      console.error("Error deleting message:", error);
      throw new Error("Could not delete message.");
    }
  }, []);

  return deleteMessage;
};

export default useDeleteMessage;
