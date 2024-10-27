import React from "react";
import "../styles/Profile.css"; // Ensure this CSS file is styled accordingly
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const userData = JSON.parse(localStorage.getItem("healthData"));
  const navigate = useNavigate();

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  // Array of positive quotes
  const quotes = [
    "Believe you can and you're halfway there.",
    "The only way to do great work is to love what you do.",
    "You are never too old to set another goal or to dream a new dream.",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Keep your face always toward the sunshine—and shadows will fall behind you.",
    "You are braver than you believe, stronger than you seem, and smarter than you think.",
    "It does not matter how slowly you go as long as you do not stop.",
    "Success is not how high you have climbed, but how you make a positive difference to the world.",
    "Your limitation—it's only your imagination.",
  ];

  // Function to get a random quote
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  };

  return (
    <div className="profile-main">
      <h2 className="title">Your Health Profile</h2>
      <div className="profile-details">
        {userData ? (
          <>
            <div className="info-group">
              <strong>Chronic Conditions:</strong> {userData.existingCondition}
            </div>
            <div className="info-group">
              <strong>Date of Birth:</strong> {userData.dob} (Age:{" "}
              {calculateAge(userData.dob)})
            </div>
            <div className="info-group">
              <strong>Weight:</strong> {userData.weight} lbs
            </div>
            <div className="info-group">
              <strong>Disability Status:</strong> {userData.disability}
            </div>
            <div className="info-group">
              <strong>Gender Identity:</strong> {userData.sex}
            </div>
            <div className="info-group">
              <strong>Location:</strong> {userData.location}
            </div>
          </>
        ) : (
          <p>No health data available.</p>
        )}
      </div>
      {/* Edit Button */}
      <button className="btn" onClick={() => navigate("/health-data-entry")}>
        Edit
      </button>

      {/* Display a random positive quote */}
      <div className="quote-section">
        <p>{getRandomQuote()}</p>
      </div>
    </div>
  );
};

export default Profile;
