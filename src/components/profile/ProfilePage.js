import React, { useState, useEffect } from "react";
import "./ProfilePage.css";
import image from '../../assets/images/igimage.png';
import NavBar from "../Sidebar/NavBar";
import { Link } from "react-router-dom";
import { useUser } from "../../context/userContext";
import useGetFollowersByUser from "../../hooks/followers/useGetFollowersByUser";
import useGetPostsByUser from "../../hooks/posts/useGetPostsByUser";
import useGetFollowersByFollowerID from "../../hooks/followers/followersByFollowerID";
import useUpdateUserAvatar from "../../hooks/user/useUpdateUserAvatar";

const ProfilePage = () => {
  const [followers, setFollowers] = useState('');
  const [followed, setFollowed] = useState('');
  const [posts, setPosts] = useState(1);
  const [selectedTab, setSelectedTab] = useState("posts"); 
  const { user } = useUser();
  const { followersList } = useGetFollowersByUser({ userId: user?.id });
  const Posts = useGetPostsByUser({ userId: user?.id });
  const { followedList, getFollowersByFollowerID } = useGetFollowersByFollowerID({ followerID: user?.id });
  const [showPopup, setShowPopup] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const { uploadImage, updateUserAvatar, loading, error, success } = useUpdateUserAvatar();

  const userId= user?.id;
  const handlePictureClick = () => {
    setShowPopup(true);
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!selectedFile) {
      alert('Please select a file to upload.');
      return;
    }
  
    try {
      const uploadedImageUrl = await uploadImage(selectedFile);
      if (!uploadedImageUrl) {
        throw new Error("Image upload failed. No URL returned.");
      }
  
      const updatedUser = await updateUserAvatar(userId);
      if (!updatedUser) {
        throw new Error("User update failed.");
      }
  
      console.log("Avatar updated successfully!");
      setShowPopup(false);
      return true;
    } catch (error) {
      // console.error("Error during image upload or user update", error);
      
      setShowPopup(false); 
      alert('An error occurred while updating your avatar. Please try again.');
    }
  };
  

  const handleClose = () => {
    setShowPopup(false);
  };


  useEffect(() => {
      getFollowersByFollowerID();
      setFollowed(followedList?.length);
      setFollowers(followersList?.length); 
      setPosts(Posts?.length); 
  }, [followers, posts, followed]);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const renderContent = () => {
    if (selectedTab === "posts") {
      return (
        <div className="profile-posts-grid mt-8 grid grid-cols-3 gap-4" id="posts-grid">
          {Array.isArray(posts) && posts.length > 0 ? (
            posts.map((imgUrl, index) => (
              <img key={index} className="w-full h-64 object-cover" src={imgUrl} alt="Post" />
            ))
          ) : (
            <p className="text-center">No posts available</p> 
          )}

        </div>
      );
    } else if (selectedTab === "saved") {
      return <div className="placeholder-content">No Saved content available.</div>;
    } else if (selectedTab === "tagged") {
      return <div className="placeholder-content"> No Tagged content yet.</div>;
    }
  };

  return (
    <div className="flex flex-col h-screen w-screen">
      <NavBar />
      <div className="flex-1 lg:ml-64 p-4 lg:mt-8 sm:ml-4 sm:mt-28 xs:mt-44 xs:ml-4">
        <div className="profile-header flex items-center space-x-4 lg:ml-48 sm:ml-4 xs:ml-4">
          <div className="profile-picture" onClick={handlePictureClick}>
            <img className="w-24 h-24 rounded-full shadow-md" src={user?.avatar || "https://via.placeholder.com/150"} alt="Profile" />
          </div>

          {/* Popup Overlay */}
            {showPopup && (
              <div className="popup-overlay fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
                <div className="popup-content bg-white p-6 rounded-lg shadow-lg relative">
                  <h3 className="text-xl font-bold mb-4">Upload New Profile Picture</h3>
                  <input 
                    type="file" 
                    onChange={handleFileChange}
                    accept="image/*"
                    className="mb-4"
                  />
                  <div className="flex justify-end">
                    <button
                      onClick={handleSubmit}
                      className="bg-blue-500 text-white px-4 py-2 rounded flex items-center"
                    >
                      Submit
                    </button>
                    <button 
                      onClick={handleClose}
                      className="ml-4 text-gray-500 hover:text-gray-700"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
          <div className="profile-info">
            <div className="profile-username flex items-center space-x-2">
              <h2 className="text-lg font-semibold">{user?.username}</h2>
              <Link className="bg-blue-500 text-white px-4 py-2 rounded" to="/settings">
                Edit Profile
              </Link>
            </div>
            <div className="profile-stats mt-2">
              <p>{posts} posts</p>
              <p>{followers} followers</p>
              <p>{followed} following</p>
            </div>
            <div className="profile-bio mt-2">
              <p><strong>{user?.name}</strong></p>
              <p> <span>{user?.bio}</span></p>
            </div>
          </div>
        </div>
        {/* {error && <p className="error-text">Error: {error}</p>} */}
      {success && <p className="success-text">Avatar updated successfully!</p>}
        {/* Navigation Buttons */}
        <div className="profile-nav mt-4 space-x-4">
          <button
            className={`profile-nav-button ${selectedTab === "posts" ? "active" : ""}`}
            onClick={() => handleTabClick("posts")}
          >
            POSTS
          </button>
          <button
            className={`profile-nav-button ${selectedTab === "saved" ? "active" : ""}`}
            onClick={() => handleTabClick("saved")}
          >
            SAVED
          </button>
          <button
            className={`profile-nav-button ${selectedTab === "tagged" ? "active" : ""}`}
            onClick={() => handleTabClick("tagged")}
          >
            TAGGED
          </button>
        </div>

        {/* Conditional Content */}
        {renderContent()}

        <footer />
      </div>
    </div>
  );
};

export default ProfilePage;
