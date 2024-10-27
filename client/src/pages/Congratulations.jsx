/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti"; // Import the Confetti component
import "../styles/Congratulations.css"; // Adjust the path as necessary

const Congratulations = () => {
  const [width, height] = [window.innerWidth, window.innerHeight];
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();

  const handleSelectChange = (e) => {
    const value = e.target.value;
    setSelectedOption(value);
    if (value) {
      navigate(value);
    }
  };

  return (
    <div className="congratulations-main">
      {/* Render the Confetti component */}
      <Confetti width={width} height={height} />

      <h1>Congratulations!</h1>
      <p>You’re now equipped with EcoSphere for a healthier lifestyle!</p>

      {/* Dropdown for navigation */}
      <select value={selectedOption} onChange={handleSelectChange}>
        <option value="">Select an option...</option>
        <option value="/health-information">Health Information</option>
        <option value="/health-data-entry">Edit Data</option>
        <option value="/">Home</option>
        <option value="/profile">Profile</option>
      </select>
    </div>
  );
};

export default Congratulations;
