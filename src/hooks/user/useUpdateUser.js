import { useCallback } from 'react';
import { generateClient } from 'aws-amplify/api';
import * as mutations from '../../graphql/mutations'; 

const client = generateClient();

const useUpdateUser = () => {
  const updateUser = useCallback(async (userData) => {
    const { id, bio, gender } = userData; 
    const userDetails = {
      id, 
      bio,
      gender,
    };

    try {
      const updatedUser = await client.graphql({
        query: mutations.updateUser, 
        variables: { input: userDetails },
      });
      return updatedUser;
    } catch (error) {
      console.error("Error updating user:", error);
      throw new Error("Could not update user.");
    }
  }, []);

  return updateUser;
};

export default useUpdateUser;
