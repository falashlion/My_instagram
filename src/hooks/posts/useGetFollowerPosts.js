import { useState, useEffect } from 'react';
import * as queries from '../../graphql/queries';
import { generateClient } from 'aws-amplify/api';
const client = generateClient();

const useGetFollowerPosts = ({userId}) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [Followers, setFollowers] = useState([]);

  useEffect(() => {
    const fetchFollowerPosts = async () => {
      try {

        const followersResponse = await client.graphql({
          query: queries.followersByFollowedID,
          variables: {
              followedID:  userId,
          },
        });

        const followers = followersResponse.data.followersByFollowedID.items;
        setFollowers(followers);
        const followingIds = followers.map(follower => follower.followerID);

        const postsResponse = await client.graphql({
          query: queries.listPosts,
          // variables: {
          //   // filter: {
          //   //   userID: {
          //   //     eq: followingIds,
          //   //   },
          //   },
          // },
        });

        setPosts(postsResponse.data.listPosts.items);
      } catch (error) {
        setError("Error fetching follower posts.");
        console.error("Error fetching follower posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFollowerPosts();
  }, []);

  return { posts, loading, error, Followers };
};

export default useGetFollowerPosts;
