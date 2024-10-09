import { useCallback } from 'react';
import { generateClient } from 'aws-amplify/api';
import * as mutations from '../graphql/mutations';

const client = generateClient();

const useDeleteNotification = () => {
  const deleteNotification = useCallback(async (id) => {
    try {
      const deletedNotification = await client.graphql({
        query: mutations.deleteNotification, 
        variables: { input: { id } },
      });
      return deletedNotification;
    } catch (error) {
      console.error("Error deleting notification:", error);
      throw new Error("Could not delete notification.");
    }
  }, []);

  return deleteNotification;
};

export default useDeleteNotification;

