const mongoose = require("mongoose");

const HealthDataSchema = new mongoose.Schema({
  existingCondition: { type: String, required: true },
  dob: { type: Date, required: true },
  weight: { type: Number, required: true },
  disability: { type: String, required: true },
  sex: { type: String, required: true },
  location: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Reference to the User model
});

module.exports = mongoose.model("HealthData", HealthDataSchema);
