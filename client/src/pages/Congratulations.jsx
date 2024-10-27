// Congratulations.jsx

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import "../styles/Congratulations.css";

const Congratulations = () => {
  const [width, height] = [window.innerWidth, window.innerHeight];
  const [confettiVisible, setConfettiVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setConfettiVisible(false);
      }, 2000);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="congratulations-main">
      {confettiVisible && (
        <Confetti
          width={width}
          height={height}
          className={fadeOut ? "fade-out" : ""}
        />
      )}

      <h1>Congratulations!</h1>
      <p>You’re now equipped with EcoSphere for a healthier lifestyle!</p>

      {/* Interactive Buttons */}
      <div className="button-container">
        <h2>Select an Option:</h2>
        <div className="card-container">
          <div className="card" onClick={() => handleNavigation("/")}>
            <h3>Home</h3>
            <p>Return to the main page</p>
          </div>
          <div className="card" onClick={() => handleNavigation("/profile")}>
            <h3>Profile</h3>
            <p>View your health profile</p>
          </div>
          <div
            className="card"
            onClick={() => handleNavigation("/health-data-entry")}
          >
            <h3>Edit Data</h3>
            <p>Update your health information</p>
          </div>
          <div
            className="card"
            onClick={() => handleNavigation("/health-information")}
          >
            <h3>Health Data </h3>
            <p>Learn about chronic conditions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Congratulations;
