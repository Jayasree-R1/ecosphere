import React from "react";
import "../styles/Landing.css";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing-main">
      <h1>Welcome to EcoSphere</h1>
      <p>Your health is our priority!</p>
      {/* <p>
        Enter your health data and take control of your well-being. Our app not
        only tracks your health conditions but also monitors weather factors
        that directly impact your health.
      </p> */}
      <p>
        Stay ahead of potential risks and receive timely notifications tailored
        to your specific needs. Your health matters, and we’re here to help you
        stay safe and informed!
      </p>
      <Link to="/login" className="landing-login-button">
        Login
      </Link>
      <Link to="/register" className="landing-register-button">
        Register
      </Link>
    </div>
  );
};

export default Landing;
