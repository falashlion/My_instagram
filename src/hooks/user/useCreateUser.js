import { useCallback } from 'react';
import { generateClient } from 'aws-amplify/api';
import * as mutations from '../graphql/mutations'; 

const client = generateClient();

const useCreateUser = () => {
  const createUser = useCallback(async (userData) => {
    try {
      const newUser = await client.graphql({
        query: mutations.createUser, 
        variables: { input: userData },
      });
      return newUser;
    } catch (error) {
      console.error("Error creating user:", error);
      throw new Error("Could not create user.");
    }
  }, []);

  return createUser;
};

export default useCreateUser;
