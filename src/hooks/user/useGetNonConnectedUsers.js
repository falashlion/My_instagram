import { useState, useEffect } from 'react';
import * as queries from '../../graphql/queries';
import { generateClient } from 'aws-amplify/api';
const client = generateClient();

const useGetNonConnectedUsers = ({ userId }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNonConnectedUsers = async () => {
      try {
        // Fetch followers
        const followersResponse = await client.graphql({
          query: queries.followersByFollowedID,
          variables: {
            filter: {
              followedID: {
                eq: userId,
              },
            },
          },
        });
        const followers = followersResponse.data.followersByFollowedID.items.map(f => f.followerID);

        // Fetch following (users followed by this user)
        const followingResponse = await client.graphql({
          query: queries.followersByFollowerID,
          variables: {
            filter: {
              followerID: {
                eq: userId,
              },
            },
          },
        });
        const following = followingResponse.data.followersByFollowerID.items.map(f => f.followedID);

        // Combine followers and following IDs
        const connectedIds = new Set([...followers, ...following]);

        // Fetch all users in the system
        const allUsersResponse = await client.graphql({
          query: queries.listUsers,
        });
        const allUsers = allUsersResponse.data.listUsers.items;

        // Filter users who are neither followers nor being followed by the current user
        const nonConnectedUsers = allUsers.filter(user => !connectedIds.has(user.id) && user.id !== userId);

        setUsers(nonConnectedUsers);
      } catch (error) {
        setError("Error fetching non-connected users.");
        console.error("Error fetching non-connected users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNonConnectedUsers();
  }, [userId]);

  return { users, loading, error };
};

export default useGetNonConnectedUsers;
