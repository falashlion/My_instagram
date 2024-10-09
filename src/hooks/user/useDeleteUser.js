import { useCallback } from 'react';
import { generateClient } from 'aws-amplify/api';
import * as mutations from '../../graphql/mutations'; 

const client = generateClient();

const useDeleteUser = () => {
  const deleteUser = useCallback(async (id) => {
    try {
      const deletedUser = await client.graphql({
        query: mutations.deleteUser, 
        variables: { input: { id } },
      });
      return deletedUser;
    } catch (error) {
      console.error("Error deleting user:", error);
      throw new Error("Could not delete user.");
    }
  }, []);

  return deleteUser;
};

export default useDeleteUser;
