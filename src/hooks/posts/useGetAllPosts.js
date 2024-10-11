import { useState, useEffect } from 'react';
import { generateClient } from 'aws-amplify/api';
import * as queries from '../../graphql/queries';

const client = generateClient();

const useGetAllPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await client.graphql({
          query: queries.listPosts,
        });
        setPosts(response.data.listPosts.items);
      } catch (error) {
        setError("Error fetching posts.");
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, loading, error };
};

export default useGetAllPosts;
