// src/components/Profile.js
import React from "react";
import "../assets/Profile.css";
import profilePicture from "../gambar/download.jpeg";

const Profile = () => {
  return (
    <div className="profile-container">
      <img className="profile-picture" src={profilePicture} alt="Profile" />
      <div className="profile-info">
        <h2 className="profile-name">SETYA ABIL PRATAMA</h2>
        <p className="profile-title"></p>
        <p className="profile-description"></p>
      </div>
    </div>
  );
};

export default Profile;
