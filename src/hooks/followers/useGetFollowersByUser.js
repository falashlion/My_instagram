import { useCallback, useState } from 'react';
import { generateClient } from 'aws-amplify/api';
import * as queries from '../../graphql/queries';

const client = generateClient();

const useGetFollowersByUser = ({userId}) => {
const [followersList, setFollowerList] = useState([]);

  const getFollowersByUser = useCallback(async () => {
    try {
      const followers = await client.graphql({
        query: queries.followersByFollowedID, 
        variables: { followedID:{eq: userId} },
      });
      setFollowerList(followers?.data?.listFollowersByUser?.items);
      // return followers?.data?.listFollowersByUser?.items || [];
    } catch (error) {
      console.error("Error fetching followers for user:", error);
      throw new Error("Could not fetch followers for user.");
    }
  }, []);

  return { followersList };
};

export default useGetFollowersByUser;
