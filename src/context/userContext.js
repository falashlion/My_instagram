// src/context/UserContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetchUserAttributes } from 'aws-amplify/auth';
import { generateClient } from 'aws-amplify/api';
import * as mutations from '../graphql/mutations';
import * as queries from '../graphql/queries';

const UserContext = createContext();
const client = generateClient();
export const useUser = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const currentUser = await fetchUserAttributes();
        console.log(currentUser);
        const username = currentUser.username;
        const variables = {
            limit: 1,
            filter: { username: { eq: username } }
        };
        // Try to fetch the user from the GraphQL API by their username
        const userdata = await client.graphql({
            query: queries.listUsers,
            variables: variables,
          });
        const data = userdata.data.listUsers.items[0];

        if (data) {
          // If user exists, set it
          setUser(data);
        } else {
          // If user doesn't exist, create a new user in the GraphQL API
          const newUser = {
            username: currentUser.preferred_username,
            email: currentUser.email,
            name: currentUser.name,
            isPrivate: false,
            Gender: currentUser.gender,
            avatar: currentUser.picture,
            Phone: currentUser.phone_number,
          };
          const createdUser = await client.graphql({
            query: mutations.createUser,
            variables: { input: newUser }
          });
          setUser(createdUser.data.createUser);
        }
      } catch (error) {
        console.error('Error fetching user: ', error);
      }
    };

    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
