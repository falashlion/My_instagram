import { useState, useEffect } from 'react';
import * as queries from '../../graphql/queries';  
import { generateClient } from 'aws-amplify/api';

const client = generateClient();

const useListUsers = ({ filter = null, limit = 10 } = {}) => {
  const [users, setUsers] = useState([]);
  const [nextToken, setNextToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUsers = async (token = null) => {
    setLoading(true);
    try {
      const response = await client.graphql({
        query: queries.listUsers,
        variables: {
          filter,
          limit,
          nextToken: token,
        },
      });

      const fetchedUsers = response.data.listUsers.items;
      const newNextToken = response.data.listUsers.nextToken;

      setUsers(prevUsers => [...prevUsers, ...fetchedUsers]);
      setNextToken(newNextToken);
    } catch (error) {
      setError("Error fetching users.");
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [filter, limit]);

  const loadMore = () => {
    if (nextToken) {
      fetchUsers(nextToken);
    }
  };

  return { users, loading, error, loadMore, hasMore: !!nextToken };
};

export default useListUsers;
