const express = require("express");
const router = express.Router();

const {
  login,
  register,
  dashboard,
  getAllUsers,
} = require("../controllers/user");
const { submitHealthData } = require("../controllers/healthData");
const authMiddleware = require("../middleware/auth");

router.route("/login").post(login);
router.route("/register").post(register);
router.route("/dashboard").get(authMiddleware, dashboard);
router.route("/users").get(getAllUsers);
router.route("/healthdata").post(authMiddleware, submitHealthData); // New route for health data submission

module.exports = router;
