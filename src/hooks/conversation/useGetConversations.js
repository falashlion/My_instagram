import { useState, useEffect, useCallback } from 'react';
import { conversationParticipantsByUserID } from '../../graphql/queries';
import { useUser } from '../../context/userContext';
import { generateClient } from 'aws-amplify/api';
const client = generateClient();

const useGetConversations = () => {
  const { user } = useUser(); 
  const [conversations, setConversations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchConversations = useCallback(async () => {
    if (!user?.id) {
      return; 
    }
    
    setLoading(true); // Start loading
    try {
      const response = await client.graphql({
        query: conversationParticipantsByUserID,
        variables: {
          userID: user?.id
        },
      });
      const fetchedConversations = response.data.conversationParticipantsByUserID.items || [];
      setConversations(fetchedConversations); 
    } catch (err) {
      console.error("Error fetching conversations:", err);
      setError(err); 
    } finally {
      setLoading(false); 
    }
  }, [user]);

  useEffect(() => {
    fetchConversations(); 
  }, [fetchConversations]);

  return { conversations, loading, error };
};

export default useGetConversations;
