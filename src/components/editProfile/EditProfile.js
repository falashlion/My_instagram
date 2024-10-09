import React, { useState } from "react";
import "./EditProfile.css";
import useUpdateUser from "../../hooks/user/useUpdateUser"; 
import { useUser } from "../../context/userContext";
import Spinner from "../Spinner/Spinner"; 

const EditProfile = () => {
  const updateUser = useUpdateUser();
  const { user } = useUser(); 
  const [bio, setBio] = useState(user?.bio || "Web developer #amazing baller 🏀");
  const [Gender, setGender] = useState(user?.Gender || "Prefer not to say");
  const [suggestions, setSuggestions] = useState(false);
  const [loading, setLoading] = useState(!user); 

  // Ensure user ID is available
  const userId = user?.id; 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      id: userId, 
      bio,
      Gender,
    };

    try {
      setLoading(true); 
      const response = await updateUser(userData);
      console.log("User updated successfully:", response);
    } catch (error) {
      console.error("Update failed:", error);
    } finally {
      setLoading(false); 
    }
  };

  // Render a loading spinner if user data is not available yet
  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="edit-profile-container">
      <h2>Edit profile</h2>
      <div className="profile-header">
        <img
          className="profile-photo"
          src={user.avatar || "https://via.placeholder.com/80"}
          alt="Profile"
        />
        <div className="profile-info">
          <h3>{user.username}</h3>
          <p>{user.name}</p>
        </div>
        <button className="change-photo-btn">Change photo</button>
      </div>
      <form className="profile-form" onSubmit={handleSubmit}>
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          placeholder="Website"
          disabled
          className="disabled-input"
        />
        <p className="help-text">
          Editing your links is only available on mobile. Visit the Instagram app
          and edit your profile to change the websites in your bio.
        </p>
        <label htmlFor="bio">Bio</label>
        <textarea
          id="bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          maxLength={150}
        />
        <div className="char-count">{bio.length} / 150</div>
        <label htmlFor="Gender">Gender</label>
        <select
          id="Gender"
          value={Gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="Prefer not to say">Prefer not to say</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <p className="help-text">
          This won’t be part of your public profile.
        </p>
        <div className="suggestions-toggle">
          <label>Show account suggestions on profiles</label>
          <div className="toggle-container">
            <input
              type="checkbox"
              id="suggestions"
              checked={suggestions}
              onChange={() => setSuggestions(!suggestions)}
            />
            <label htmlFor="suggestions" className="toggle"></label>
          </div>
          <p className="help-text">
            Choose whether people can see similar account suggestions on your
            profile, and whether your account can be suggested on other profiles.
          </p>
        </div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
