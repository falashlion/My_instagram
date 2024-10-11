import { useCallback, useState } from 'react';
import { generateClient } from 'aws-amplify/api';
import * as queries from '../../graphql/queries'

const client = generateClient();

const useGetPostsByUser = () => {
  const [Posts, setPosts] = useState([]);
  const getPostsByUser = useCallback(async (userId) => {
    try {
      const posts = await client.graphql({
        query: queries.postsByUserID, 
        variables: { userID:{ eq: userId } },
      });
      setPosts(posts?.data?.postsByUserID?.items);
      return posts?.data?.postsByUserID?.items || [];
    } catch (error) {
      console.error("Error fetching posts for user:", error);
      throw new Error("Could not fetch posts for user.");
    }
  }, []);

  return Posts;
};

export default useGetPostsByUser;
