import React, { useState } from "react";
import "./EditProfile.css";
import useUpdateUser from "../../hooks/user/useUpdateUser"; 
import { useUser } from "../../context/userContext";
import Spinner from "../Spinner/Spinner"; 
import useUpdateUserAvatar from "../../hooks/user/useUpdateUserAvatar";

const EditProfile = () => {
  const updateUser = useUpdateUser();
  const { user } = useUser(); 
  const [bio, setBio] = useState(user?.bio );
  const [Gender, setGender] = useState(user?.Gender || "Prefer not to say");
  const [suggestions, setSuggestions] = useState(false);
  const [loading, setLoading] = useState(!user); 
  const [showPopup, setShowPopup] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const { uploadImage, updateUserAvatar, success } = useUpdateUserAvatar();

  const handlePictureClick = () => {
    setShowPopup(true);
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmitImage = async() => {
    
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
      setLoading(false);
    } catch (error) {
      console.error("Update failed:", error);
    } finally {
      setLoading(false); 
    }
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="edit-profile-container">
      <div className="profile-header">
        <img
          className="profile-photo"
          src={user.avatar || "https://via.placeholder.com/80"}
          alt="Profile"
          onClick={handlePictureClick}
        />
        <div className="profile-info">
          <h3>{user.username}</h3>
          <p>{user.name}</p>
        </div>
        <button className="change-photo-btn"onClick={handlePictureClick}>Change photo</button>
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
                      onClick={handleSubmitImage}
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
