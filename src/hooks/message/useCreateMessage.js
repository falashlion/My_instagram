import { useCallback, useState } from 'react';
import { generateClient } from 'aws-amplify/api';
import * as mutations from '../../graphql/mutations';

const client = generateClient();

const useCreateMessage = ({ messageData }) => {
  const [Message, setMessage] = useState(null);

  const createMessage = useCallback(async () => {
    try {
      const newMessage = await client.graphql({
        query: mutations.createMessage,
        variables: { input: messageData },
      });
      setMessage(newMessage.data.createMessage);
      return newMessage;
    } catch (error) {
      console.error("Error creating message:", error);
      throw new Error("Could not create message.");
    }
  }, [messageData]); 

  return { Message, createMessage }; 
};

export default useCreateMessage;
