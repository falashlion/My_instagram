import React, { useState } from "react";
import './ConversationsList.css';
import useGetFollowersByUser from "../../hooks/followers/useGetFollowersByUser";
import { useUser } from "../../context/userContext";
import useCreateConversation from '../../hooks/conversation/useCreateConversation';

const ConversationsList = ({ conversations, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUser();
  const { followersList } = useGetFollowersByUser({ userId: user?.id });
  const { createConversationWithParticipant, loading, error } = useCreateConversation();

  const [selectedParticipants, setSelectedParticipants] = useState([]);
  const [conversationTitle, setConversationTitle] = useState('');

  // Function to toggle the modal
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle form submission
  const handleCreateConversation = async () => {
    if (!conversationTitle || selectedParticipants.length === 0) {
      alert("Please provide a title and select participants.");
      return;
    }

    try {
      await createConversationWithParticipant(conversationTitle, selectedParticipants);
      toggleModal(); // Close the modal after creating the conversation
    } catch (err) {
      console.error('Failed to create conversation:', err);
    }
  };

  // Handle participant selection
  const handleParticipantChange = (e) => {
    const selectedUsername = e.target.value;
    const selectedUser = followersList.find(follower => follower.username === selectedUsername);
    setSelectedParticipants([selectedUser]); // Allow only one participant in this example
  };

  return (
    <div className="border-2 flex ml-20 w-80 flex-col h-screen border-r-2 bg-white backdrop-blur-md border border-white border-opacity-30 drop-shadow-xl rounded-lg sm:mt-32 md:mt-0">
      
      <button className="flex justify-items-start mt-4 px-4 py-2 text-white rounded-md hover:bg-gray-200 transition" onClick={toggleModal}>
      <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 24 24" fill="none">
        <path d="M11 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40974 4.40973 4.7157 4.21799 5.09202C4 5.51985 4 6.0799 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.0799 20 7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V12.5M15.5 5.5L18.3284 8.32843M10.7627 10.2373L17.411 3.58902C18.192 2.80797 19.4584 2.80797 20.2394 3.58902C21.0205 4.37007 21.0205 5.6364 20.2394 6.41745L13.3774 13.2794C12.6158 14.0411 12.235 14.4219 11.8012 14.7247C11.4162 14.9936 11.0009 15.2162 10.564 15.3882C10.0717 15.582 9.54378 15.6885 8.48793 15.9016L8 16L8.04745 15.6678C8.21536 14.4925 8.29932 13.9048 8.49029 13.3561C8.65975 12.8692 8.89125 12.4063 9.17906 11.9786C9.50341 11.4966 9.92319 11.0768 10.7627 10.2373Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>

      {/* Modal Pop-up */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">

            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">New Conversation</h2>
              <button className="text-gray-600 hover:text-gray-800" onClick={toggleModal}>
                &times;
              </button>
            </div>

            <div>
              <p>Title:</p>
              <input
                type="text"
                value={conversationTitle}
                onChange={(e) => setConversationTitle(e.target.value)}
                className="border p-2 rounded w-full"
                placeholder="Enter conversation title"
              />
              <p>To:</p>
              <form className="max-w-sm mx-auto">
                <label htmlFor="participants" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select a participant</label>
                <select id="participants" className="border text-gray-900 text-sm rounded-lg focus:ring-gray-200 focus:border-gray-500 block w-full p-2.5" onChange={handleParticipantChange}>
                  <option value="" disabled selected>Choose a person</option>
                  {followersList.map((follower, index) => (
                    <option key={index} value={follower.username}>
                      {follower.name}
                    </option>
                  ))}
                </select>
              </form>
            </div>

            {/* Modal Footer */}
            <div className="mt-4 flex justify-end">
              <button className="px-4 py-2 bg-gray-300 rounded-md mr-2 hover:bg-gray-400" onClick={toggleModal}>
                Cancel
              </button>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" onClick={handleCreateConversation} disabled={loading}>
                {loading ? 'Creating...' : 'Create'}
              </button>
            </div>

            {error && <p className="text-red-500 mt-2">{error}</p>}
          </div>
        </div>
      )}

      {conversations.map((conv) => (
        <div key={conv.id} className="conversation-item hover:bg-gray-100" onClick={() => onSelect(conv)}>
          <div className="conversation-name flex flex-row p-2">
            <img className="w-10 h-10 rounded-full" src={conv.user.avatar || "https://placehold.co/400"} alt="Rounded avatar" />
            <span className="ml-2 mt-2">{conv.title}</span>
          </div>
          <div className="conversation-last-message">{conv.lastMessage}</div>
        </div>
      ))}
    </div>
  );
};

export default ConversationsList;
