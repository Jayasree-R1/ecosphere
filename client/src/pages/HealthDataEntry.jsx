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
  const navigate = useNavigate();

  const handleHealthDataSubmit = async (e) => {
    e.preventDefault();

    const healthData = {
      existingCondition,
      dob,
      weight,
      disability,
      sex,
      location,
    };

    try {
      await axios.post("http://localhost:3000/api/v1/healthdata", healthData);
      toast.success("Health data submitted successfully");
      navigate("/dashboard"); // Adjust the navigation as needed
    } catch (err) {
      toast.error("Error submitting health data: " + err.message);
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
      <h2>Health Data Entry</h2>
      <form onSubmit={handleHealthDataSubmit}>
        {/* Form Fields */}
        <div className="form-group">
          <label htmlFor="existingCondition">Existing Health Conditions:</label>
          <select
            id="existingCondition"
            value={existingCondition}
            onChange={(e) => setExistingCondition(e.target.value)}
            required
          >
            <option value="">Select...</option>
            <option value="Asthma">Asthma</option>
            <option value="Diabetes">Diabetes</option>
            <option value="Heart Disease">Heart Disease</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="weight">Weight (kg):</label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="disability">Disability Status:</label>
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
          <label htmlFor="sex">Sex:</label>
          <select
            id="sex"
            value={sex}
            onChange={(e) => setSex(e.target.value)}
            required
          >
            <option value="">Select...</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="location">Location:</label>
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
          <button type="submit">Submit</button>
          <button type="button" onClick={handleResetForm}>
            Reset
          </button>
          <Link to="/dashboard" className="cancel-button">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default HealthDataEntry;
