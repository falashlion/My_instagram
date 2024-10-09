import { useCallback } from 'react';
import { generateClient } from 'aws-amplify/api';
import * as mutations from '../graphql/mutations';

const client = generateClient();

const useCreateConversation = () => {
  const createConversation = useCallback(async (conversationData) => {
    try {
      const newConversation = await client.graphql({
        query: mutations.createConversation, 
        variables: { input: conversationData },
      });
      return newConversation;
    } catch (error) {
      console.error("Error creating conversation:", error);
      throw new Error("Could not create conversation.");
    }
  }, []);

  return createConversation;
};

export default useCreateConversation;

