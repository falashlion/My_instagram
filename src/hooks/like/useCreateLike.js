import { useCallback } from 'react';
import { generateClient } from 'aws-amplify/api';
import * as mutations from '../graphql/mutations';

const client = generateClient();

const useCreateLike = () => {
  const createLike = useCallback(async (likeData) => {
    try {
      const newLike = await client.graphql({
        query: mutations.createLike, 
        variables: { input: likeData },
      });
      return newLike;
    } catch (error) {
      console.error("Error creating like:", error);
      throw new Error("Could not create like.");
    }
  }, []);

  return createLike;
};

export default useCreateLike;

