import React, { useState, useEffect } from "react";
import "./ProfileUser.css";
import image from '../../assets/images/igimage.png'
import NavBar from "../Sidebar/NavBar";
import footer from "../footer/footer";

const ProfileUser = () => {
  const [followers, setFollowers] = useState(289);
  const [posts, setPosts] = useState(1);
  const [following, setFollowing] = useState(1051);

  // Mock data for posts
  const postImages = [
    "https://placekitten.com/200/300",
    "https://placekitten.com/201/300",
    "https://placekitten.com/202/300",
    "https://placekitten.com/203/300",
    "https://placekitten.com/204/300",
    "https://placekitten.com/205/300",
  ];

  useEffect(() => {
    // Simulate dynamic updates to followers and posts count
    const timer = setTimeout(() => {
      setFollowers(followers + 1); // Mock increment in followers
      setPosts(posts + 1); // Mock increment in posts
    }, 3000); // Update after 3 seconds
    return () => clearTimeout(timer); // Clean up the timer
  }, [followers, posts]);

  const handleEditProfile = () => {
    alert("Edit Profile button clicked!");
  };

  const handleViewArchive = () => {
    alert("View Archive button clicked!");
  };

  const scrollToPosts = () => {
    const postsSection = document.getElementById("posts-grid");
    if (postsSection) {
      postsSection.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col h-screen w-screen ">
    <NavBar/>
     
     <div className="flex-1 lg:ml-64 p-4 lg:mt-8 sm:ml-4 sm:mt-28 xs:mt-44 xs:ml-4 "> 
        <div className="profile-header flex items-center space-x-4 lg:ml-48 sm:ml-4 xs:ml-4">
          <div className="profile-picture">
            <img className="w-24 h-24 rounded-full" src={image} alt="Profile" />
          </div>
          <div className="profile-info">
            <div className="profile-username flex items-center space-x-2">
              <h2 className="text-lg font-semibold">lion.o22</h2>
              <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleEditProfile}>
                Edit Profile
              </button>
            </div>
            <div className="profile-stats flex space-x-6 mt-2">
              <p>{posts} posts</p>
              <p>{followers} followers</p>
              <p>{following} following</p>
            </div>
            <div className="profile-bio mt-2">
              <p><strong>Forchu Felix</strong></p>
              <p>Web developer <span>#amazing</span> baller 🏀</p>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="profile-nav mt-4 space-x-4">
          <button className="px-4 py-2 bg-gray-200" onClick={scrollToPosts}>POSTS</button>
          <button className="px-4 py-2 bg-gray-200">SAVED</button>
          <button className="px-4 py-2 bg-gray-200">TAGGED</button>
        </div>

        {/* Posts Grid */}
        <div className="profile-posts-grid mt-8 grid grid-cols-3 gap-4" id="posts-grid">
          {postImages.map((imgUrl, index) => (
            <img key={index} className="w-full h-64 object-cover" src={imgUrl} alt="Post" />
          ))}
        </div>
        <footer/>
      </div>
    </div>
  );
};
export default ProfileUser;
