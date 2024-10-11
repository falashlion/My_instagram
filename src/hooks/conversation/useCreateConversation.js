import { useState } from 'react';
import { generateClient } from 'aws-amplify/api';
import * as mutations from '../../graphql/mutations';

const client = generateClient();

const useCreateConversation = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [conversation, setConversation] = useState(null);

  const createConversationWithParticipant = async (title, participants) => {
    setLoading(true);
    try {
      // Create a new conversation
      const createConversationResponse = await client.graphql({
        query: mutations.createConversation,
        variables: {
          input: {
            title,
          },
        },
      });

      const conversation = createConversationResponse.data.createConversation;

      // Add participants to the conversation
      for (let participant of participants) {
        await client.graphql({
          query: mutations.createConversationParticipant,
          variables: {
            input: {
              conversationID: conversation.id,
              userID: participant.id,
              joinedAt: new Date().toISOString(),
            },
          },
        });
      }
      setConversation(conversation);
      return conversation;
    } catch (err) {
      setError('Error creating conversation.');
      console.error('Error creating conversation:', err);
    } finally {
      setLoading(false);
    }
  };

  return { createConversationWithParticipant, loading, error };
};

export default useCreateConversation;


