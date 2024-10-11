import { useCallback } from 'react';
import { generateClient } from 'aws-amplify/api';
import * as mutations from '../../graphql/mutations';

const client = generateClient();

const useCreateNotification = () => {
  const createNotification = useCallback(async (notificationData) => {
    try {
      const newNotification = await client.graphql({
        query: mutations.createNotification, 
        variables: { input: notificationData },
      });
      return newNotification;
    } catch (error) {
      console.error("Error creating notification:", error);
      throw new Error("Could not create notification.");
    }
  }, []);

  return createNotification;
};

export default useCreateNotification;
