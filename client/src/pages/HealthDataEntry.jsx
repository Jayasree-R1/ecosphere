/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../styles/HealthDataEntry.css"; // Ensure you create this CSS file
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const HealthDataEntry = () => {
  const [existingCondition, setExistingCondition] = useState("");
  const [dob, setDob] = useState("");
  const [weight, setWeight] = useState("");
  const [disability, setDisability] = useState("No");
  const [sex, setSex] = useState("");
  const [location, setLocation] = useState("");
  const [ageError, setAgeError] = useState("");
  const [conditionError, setConditionError] = useState("");
  const [weightError, setWeightError] = useState("");
  const navigate = useNavigate();

  const validateAge = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age >= 18;
  };

  const handleHealthDataSubmit = async (e) => {
    e.preventDefault();
    setAgeError(""); // Reset age error
    setConditionError(""); // Reset condition error
    setWeightError(""); // Reset weight error

    // Check if existing condition is selected
    if (!existingCondition) {
      setConditionError("Chronic condition is required.");
      return; // Stop the submission
    }

    // Validate weight
    if (weight <= 0) {
      setWeightError("Weight must be a positive number.");
      return; // Stop the submission
    }

    const healthData = {
      existingCondition,
      dob,
      weight,
      disability,
      sex,
      location,
    };

    const token = JSON.parse(localStorage.getItem("auth")); // Retrieve the token

    try {
      await axios.post("http://localhost:3000/api/v1/healthdata", healthData, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the header
        },
      });
      toast.success("Health data submitted successfully");

      // Store the health data in localStorage or sessionStorage
      localStorage.setItem("healthData", JSON.stringify(healthData));
      navigate("/congratulations");
    } catch (err) {
      toast.error("Error submitting health data: " + err.message);
    }
  };

  const handleDobChange = (e) => {
    const dobValue = e.target.value;
    setDob(dobValue);
    if (!validateAge(dobValue)) {
      setAgeError("You must be at least 18 years old.");
    } else {
      setAgeError(""); // Clear the error if age is valid
    }
  };

  const handleWeightChange = (e) => {
    const weightValue = e.target.value;
    setWeight(weightValue);
    if (weightValue <= 0) {
      setWeightError("Weight must be a positive number.");
    } else {
      setWeightError(""); // Clear the error if weight is valid
    }
  };

  const handleResetForm = () => {
    setExistingCondition("");
    setDob("");
    setWeight("");
    setDisability("No");
    setSex("");
    setLocation("");
  };

  return (
    <div className="health-data-entry-main">
      <h2 className="title">Vital Health Information</h2>
      <div className="form-container">
        <form onSubmit={handleHealthDataSubmit}>
          {/* Form Fields */}
          <div className="form-group">
            <label htmlFor="existingCondition">
              What chronic conditions do you have?{" "}
              <span className="error">*</span>
            </label>
            <select
              id="existingCondition"
              value={existingCondition}
              onChange={(e) => {
                setExistingCondition(e.target.value);
                if (e.target.value) setConditionError(""); // Clear error if valid
              }}
              required
            >
              <option value="">Select...</option>
              <option value="Asthma">Asthma</option>
              <option value="Chronic Obstructive Pulmonary Disease (COPD)">
                Chronic Obstructive Pulmonary Disease (COPD)
              </option>
              <option value="Allergies">Allergies</option>
              <option value="Rheumatoid Arthritis">Rheumatoid Arthritis</option>
              <option value="Osteoarthritis">Osteoarthritis</option>
              <option value="Migraines">Migraines</option>
              <option value="Multiple Sclerosis">Multiple Sclerosis</option>
              <option value="Fibromyalgia">Fibromyalgia</option>
              <option value="Chronic Sinusitis">Chronic Sinusitis</option>
              <option value="Heart Disease">Heart Disease</option>
              <option value="Hypertension">Hypertension</option>
              <option value="Diabetes">Diabetes</option>
              <option value="Eczema">Eczema</option>
              <option value="Psoriasis">Psoriasis</option>
              <option value="Other">Other</option>
            </select>
            {conditionError && (
              <div className="error-message">{conditionError}</div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="dob">
              Enter your date of birth: <span className="error">*</span>
            </label>
            <input
              type="date"
              id="dob"
              value={dob}
              onChange={handleDobChange}
              required
            />
            {ageError && <div className="error-message">{ageError}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="weight">
              Your weight (in lbs): <span className="error">*</span>
            </label>
            <input
              type="number"
              id="weight"
              value={weight}
              onChange={handleWeightChange}
              required
            />
            {weightError && <div className="error-message">{weightError}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="disability">Do you have any disabilities?</label>
            <select
              id="disability"
              value={disability}
              onChange={(e) => setDisability(e.target.value)}
              required
            >
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="sex">
              Your gender identity: <span className="error">*</span>
            </label>
            <select
              id="sex"
              value={sex}
              onChange={(e) => setSex(e.target.value)}
              required
            >
              <option value="">Select...</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Non-binary">Non-binary</option>
              <option value="Transgender Male">Transgender Male</option>
              <option value="Transgender Female">Transgender Female</option>
              <option value="Genderqueer">Genderqueer</option>
              <option value="Agender">Agender</option>
              <option value="Two-Spirit">Two-Spirit</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="location">
              Your current location: <span className="error">*</span>
            </label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter your location"
              required
            />
          </div>

          <div className="form-buttons">
            <button type="submit" className="submit-button">
              Submit
            </button>
            <button
              type="button"
              onClick={handleResetForm}
              className="reset-button"
            >
              Reset
            </button>
            <Link to="/dashboard" className="cancel-button">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HealthDataEntry;
