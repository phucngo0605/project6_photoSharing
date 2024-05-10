const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Photo = require("../db/photoModel");
const commentSchema = new mongoose.Schema({
  // The text of the comment.
  comment: String,
  // The date and time when the comment was created.
  date_time: { type: Date, default: Date.now },
  // The ID of the user who created the comment.
  user_id: mongoose.Schema.Types.ObjectId,
});
router.post("/", async (request, response) => {});

// router.get("/", async (request, response) => {
//   const comment = await Photo.find({commentSchema});
//   if (photos) {
//     response.status(200).json(photos); // Send users data with appropriate status code
//   } else {
//     response.status(404).send("No photos found"); // Send clear message if no users found
//   }
// });
