/* eslint-disable no-unused-vars */
import React from "react";
import Confetti from "react-confetti"; // Import the Confetti component
import "../styles/Congratulations.css"; // Adjust the path as necessary

const Congratulations = () => {
  const [width, height] = [window.innerWidth, window.innerHeight];

  return (
    <div className="congratulations-main">
      {/* Render the Confetti component */}
      <Confetti width={width} height={height} />

      {/* <h1>Congratulations, {userName}!</h1> */}
      <h1>Congratulations!</h1>
      <p>You’re now equipped with EcoSphere for a healthier lifestyle!</p>
    </div>
  );
};

export default Congratulations;
