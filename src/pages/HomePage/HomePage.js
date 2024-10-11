import React, { useState } from "react";
import "./HomePage.css";
import Navbar from "../../components/Sidebar/NavBar.js";
import { useUser } from "../../context/userContext";
import useGetFollowerPosts from "../../hooks/posts/useGetFollowerPosts.js"; 
import useGetUser from "../../hooks/user/useGetUser.js";
import useGetNonConnectedUsers from "../../hooks/user/useGetNonConnectedUsers.js";
import { Link } from "react-router-dom";
import useCreateLike from "../../hooks/like/useCreateLike.js";

const HomePage = () => {
  const [postUser, setPostUser] = useState([])
  const [postId, setPostId] = useState(null);
  const { user } = useUser();
  const getUser = useGetUser({ userId: postUser });
  const getPosts = useGetFollowerPosts({ userId: user?.id });
  const followSugestions = useGetNonConnectedUsers({ userId: user?.id });
  
  const likeData = {
    postId,
    userId: user?.id,
  }
  const createLike = useCreateLike({likeData });
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  if(!getPosts){
    return( <div className="posts-feed">
     <p>Loading posts...</p>
     </div>
    )
  }
console.log(getPosts);
  return (
    <div className="homepage-container">
      {/* Main Content */}
      <div className="content-container top-0">
        <div className="stories-posts-section ">

          {/* Posts Section */}
          <div className="posts-feed shadow-lg">
          {getPosts?.posts.length === 0 ? (
            <div className="no-posts-message">
              <p>No posts found.</p>
            </div>
            ) : (
            getPosts?.posts.map((post, i) => (
              <div key={i} className="post">
                <div className="post-header">
                  <img
                    src={post.mediaURL || "https://via.placeholder.com/50"}
                    alt="User"
                    className="post-user-avatar"
                  />
                  <span>{"post.user.username"}</span>
                </div>
                <img
                  src={post.mediaURL || `https://via.placeholder.com/500?text=Post+${i + 1}`}
                  alt={`Post ${i + 1}`}
                  className="post-img"
                />
                <div className="post-actions">
                  <div className="flex flex-col space-y-4">
                    <div className="flex space-x-4">
                      <svg aria-label="Like" className=" fill-black x1lliihq x1n2onr6 cursor-pointer hover:fill-red-500"
                        color="rgb(0, 0, 0)" fill="rgb(245, 245, 245)" height="24" role="img" viewBox="0 0 24 24" width="24">
                        <title onClick={()=> setPostId(post?.id)}>Like</title>
                        <path
                          d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z">
                        </path>
                      </svg>
                      <svg aria-label="Comment" className="fill-black text-black x1lliihq x1n2onr6 cursor-pointer hover:text-gray-400"
                        color="rgb(245, 245, 245)" fill="rgb(245, 245, 245)" height="24" role="img" viewBox="0 0 24 24" width="24">
                        <Link to='/posts/comments'>Comment</Link>
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
                    <div class="my-2 font-medium text-sm">{"post?.likes"} likes</div>
                    <div className="post-caption">
                      <strong>{post?.content}</strong> 
                    </div>
                  </div>
                </div>
              </div>
            )))}
          </div>
        </div>

        <aside className="sidebar">
          <div className="user-profile">
            <img
              src={user?.avatar || 
                "https://via.placeholder.com/50"}
              alt="User"
              className="profile-img"
            />
            <div className="flex flex-col items-center space-y-0">
              <Link to='/profile'><strong>{user?.username}</strong></Link>
              <span className="subtext">{user?.name}</span>
            </div>
          </div>
          <div className="suggestions">
            <h2>Suggestions for you</h2>
            {followSugestions?.users.map((user, i) => (
              <div key={i} className="suggestion">
                <img
                  src={user?.avatar ||`https://via.placeholder.com/40?text=Sugg+${i + 1}`}
                  alt="Suggestion"
                  className="suggestion-img"
                />
                <div>
                  <strong>{user?.username}</strong>
                  <span className="subtext">Followed by </span>
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
