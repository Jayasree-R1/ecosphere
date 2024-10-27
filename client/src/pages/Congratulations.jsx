/* eslint-disable no-unused-vars */
import React from "react";
// eslint-disable-next-line no-unused-vars
import { useLocation } from "react-router-dom";

const Congratulations = () => {
  //   const { state } = useLocation();
  //   const { userName } = state || { userName: "User" }; // Default to "User" if not provided

  return (
    <div className="congratulations-main">
      {/* <h1>Congratulations, {userName}!</h1> */}
      <h1>congratulations!</h1>
      <p>You are all set with EcoSphere</p>
    </div>
  );
};

export default Congratulations;
