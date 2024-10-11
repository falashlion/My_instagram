import { useCallback } from 'react';
import { generateClient } from 'aws-amplify/api';
import * as queries from '../../graphql/queries'; 

const client = generateClient();

const useGetPost = () => {
  const getPost = useCallback(async (id) => {
    try {
      const post = await client.graphql({
        query: queries.getPost, 
        variables: { id },
      });
      return post;
    } catch (error) {
      console.error("Error fetching post:", error);
      throw new Error("Could not fetch post.");
    }
  }, []);

  return getPost;
};

export default useGetPost;
