import { useCallback } from 'react';
import { generateClient } from 'aws-amplify/api';
import * as queries from '../../graphql/queries'; 

const client = generateClient();

const useGetUser = () => {
  const getUser = useCallback(async (id) => {
    try {
      const user = await client.graphql({
        query: queries.getUser, 
        variables: { id },
      });
      return user;
    } catch (error) {
      console.error("Error fetching user:", error);
      throw new Error("Could not fetch user.");
    }
  }, []);

  return getUser;
};

export default useGetUser;
