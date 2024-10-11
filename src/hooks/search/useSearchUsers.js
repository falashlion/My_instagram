import { useState, useEffect } from 'react';
import * as queries from '../../graphql/queries';
import { generateClient } from 'aws-amplify/api';
const client = generateClient();

const useSearchUsers = (searchTerm) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        // Fetch all users
        const allUsersResponse = await client.graphql({
          query: queries.listUsers,
        });
        const allUsers = allUsersResponse.data.listUsers.items;

        // Filter users based on search term (matching full name or username)
        const filteredUsers = allUsers.filter(user => {
          const fullName = user.name ? user.name.toLowerCase() : '';
          const username = user.username ? user.username.toLowerCase() : '';
          const search = searchTerm.toLowerCase();
          
          return fullName.includes(search) || username.includes(search);
        });

        setUsers(filteredUsers);
      } catch (error) {
        setError("Error fetching users.");
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [searchTerm]);

  return { users, loading, error };
};

export default useSearchUsers;
