const express = require("express");
const User = require("../db/userModel"); // Assuming userModel defines the User model
const router = express.Router();

// Improved GET Route for Retrieving Users:
router.get("/list", async (request, response) => {
  try {
    const users = await User.find({});
    if (users) {
      response.status(200).json(users); // Send users data with appropriate status code
    } else {
      response.status(404).send("No users found"); // Send clear message if no users found
    }
  } catch (error) {
    // Handle errors gracefully
    console.error(error); // Log the error for debugging
    response.status(500).send("Error retrieving users"); // Send generic error message
  }
});

module.exports = router;
