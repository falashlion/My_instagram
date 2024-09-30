import React from "react";
import "./HomePage.css";
import Navbar from "../../components/Sidebar/NavBar.js";

const HomePage = () => {
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  return (
    <div className="homepage-container">
      {/* Main Content */}
      <div className="content-container top-0">
        <div className="stories-posts-section ">
          {/* Stories Section */}
          <div className="stories-section ">
            <div className="stories flex space-x-2  ">
              {[...Array(8)].map((_, i) => (
                <div key={i} className=" flex flex-col items-center space-y-1 ">
                  <div
                    className="p-1 bg-gradient-to-tr from-yellow-400 to-fuchsia-600 rounded-full  flex items-center justify-center">
                    <img
                      src={`https://via.placeholder.com/60?text=Story+${i + 1}`}
                      alt="Story"
                      className="story-img bg-yellow-900  rounded-full border-2 border-white"
                    />
                  </div>
                  <span className="text-sm">
                    {truncateText('bigggest user names', 8)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Posts Section */}
          <div className="posts-feed">
            <h2>Posts</h2>
            {[...Array(3)].map((_, i) => (
              <div key={i} className="post">
                <div className="post-header">
                  <img
                    src="https://via.placeholder.com/50"
                    alt="User"
                    className="post-user-avatar"
                  />
                  <span>User {i + 1}</span>
                </div>
                <img
                  src={`https://via.placeholder.com/500?text=Post+${i + 1}`}
                  alt={`Post ${i + 1}`}
                  className="post-img"
                />
                <div className="post-actions">
                  <div className="flex flex-col space-y-4">
                    <div className="flex space-x-4">
                      <svg aria-label="Like" className=" fill-black x1lliihq x1n2onr6 cursor-pointer hover:fill-red-500"
                        color="rgb(0, 0, 0)" fill="rgb(245, 245, 245)" height="24" role="img" viewBox="0 0 24 24" width="24">
                        <title>Like</title>
                        <path
                          d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z">
                        </path>
                      </svg>
                      <svg aria-label="Comment" className="fill-black text-black x1lliihq x1n2onr6 cursor-pointer hover:text-gray-400"
                        color="rgb(245, 245, 245)" fill="rgb(245, 245, 245)" height="24" role="img" viewBox="0 0 24 24" width="24">
                        <title>Comment</title>
                        <path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor"
                          stroke-linejoin="round" stroke-width="2"></path>
                      </svg>
                      <svg aria-label="Share Post" className="fill-black text-black x1lliihq x1n2onr6 cursor-pointer hover:text-gray-400"
                        color="rgb(245, 245, 245)" fill="rgb(245, 245, 245)" height="24" role="img" viewBox="0 0 24 24" width="24">
                        <title>Share Post</title>
                        <line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3"
                          y2="10.083"></line>
                        <polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor"
                          stroke-linejoin="round" stroke-width="2"></polygon>
                      </svg>
                    </div>
                    <div class="my-2 font-medium text-sm">4,047 likes</div>
                    <div className="post-caption">
                      <strong>User {i + 1}</strong> Awesome day at the beach!
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="sidebar">
          <div className="user-profile">
            <img
              src="https://via.placeholder.com/50"
              alt="User"
              className="profile-img"
            />
            <div>
              <strong>Username</strong>
              <span className="subtext">Full Name</span>
            </div>
          </div>
          <div className="suggestions">
            <h2>Suggestions for you</h2>
            {[...Array(3)].map((_, i) => (
              <div key={i} className="suggestion">
                <img
                  src={`https://via.placeholder.com/40?text=Sugg+${i + 1}`}
                  alt="Suggestion"
                  className="suggestion-img"
                />
                <div>
                  <strong>Suggested User {i + 1}</strong>
                  <span className="subtext">Followed by User X</span>
                </div>
                <button className="follow-btn">Follow</button>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default HomePage;
