import { useCallback, useState } from 'react';
import { generateClient } from 'aws-amplify/api';
import * as queries from '../../graphql/queries';

const client = generateClient();

const useGetFollowersByFollowerID = ({ followerID }) => {
  const [followedList, setFollowedList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getFollowersByFollowerID = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await client.graphql({
        query: queries.followersByFollowerID, 
        variables: {
          followerID, 
        },
      });

      const followers = result?.data?.followersByFollowerID?.items || [];
      setFollowedList(followers);
    } catch (err) {
      console.error('Error fetching followers:', err);
      setError('Could not fetch followers.');
    } finally {
      setLoading(false);
    }
  }, [followerID]);

  return { followedList, loading, error, getFollowersByFollowerID };
};

export default useGetFollowersByFollowerID;
