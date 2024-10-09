import { useCallback } from 'react';
import { generateClient } from 'aws-amplify/api';
import * as mutations from '../graphql/mutations';

const client = generateClient();

const useCreateMessage = () => {
  const createMessage = useCallback(async (messageData) => {
    try {
      const newMessage = await client.graphql({
        query: mutations.createMessage, 
        variables: { input: messageData },
      });
      return newMessage;
    } catch (error) {
      console.error("Error creating message:", error);
      throw new Error("Could not create message.");
    }
  }, []);

  return createMessage;
};

export default useCreateMessage;
