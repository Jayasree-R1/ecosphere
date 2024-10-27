import React from "react";
import "../styles/Profile.css"; // Create a CSS file for styling

const Profile = () => {
  const userData = JSON.parse(localStorage.getItem("healthData"));

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    // Adjust age if the birthday hasn't occurred yet this year
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  return (
    <div className="profile-main">
      <h2>Your Health Profile</h2>
      <div className="profile-details">
        {userData ? (
          <>
            <p>
              <strong>Chronic Conditions:</strong> {userData.existingCondition}
            </p>
            <p>
              <strong>Date of Birth:</strong> {userData.dob} (Age:{" "}
              {calculateAge(userData.dob)})
            </p>
            <p>
              <strong>Weight:</strong> {userData.weight} kg
            </p>
            <p>
              <strong>Disability Status:</strong> {userData.disability}
            </p>
            <p>
              <strong>Gender Identity:</strong> {userData.sex}
            </p>
            <p>
              <strong>Location:</strong> {userData.location}
            </p>
          </>
        ) : (
          <p>No health data available.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
