const HealthData = require("../models/HealthData"); // Adjust the model import based on your structure

const submitHealthData = async (req, res) => {
  try {
    const { existingCondition, dob, weight, disability, sex, location } =
      req.body;

    // Create and save the new health data entry
    const healthDataEntry = new HealthData({
      existingCondition,
      dob,
      weight,
      disability,
      sex,
      location,
      userId: req.user.id, // Assuming you have user info from auth middleware
    });

    await healthDataEntry.save();
    res.status(201).json({ message: "Health data submitted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { submitHealthData };
