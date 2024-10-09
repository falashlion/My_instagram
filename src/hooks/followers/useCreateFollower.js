import { useCallback } from 'react';
import { generateClient } from 'aws-amplify/api';
import * as mutations from '../graphql/mutations';

const client = generateClient();

const useCreateFollower = () => {
  const createFollower = useCallback(async (followerData) => {
    try {
      const newFollower = await client.graphql({
        query: mutations.createFollower, 
        variables: { input: followerData },
      });
      return newFollower;
    } catch (error) {
      console.error("Error creating follower:", error);
      throw new Error("Could not create follower.");
    }
  }, []);

  return createFollower;
};

export default useCreateFollower;
