const express = require("express");
const Photo = require("../db/photoModel");
const router = express.Router();

router.post("/", async (request, response) => {});

router.get("/:id", async (req, res) => {
  var id = req.params.id;
  // console.log(id);
  Photo.findOne({ user_id: id })
    .then((photo) => {
      if (!photo) {
        console.log("User with _id:" + id + " not found.");
        return res.status(400).send("Not found");
      }

      return res.status(200).send(photo);
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).send("Internal server error"); // Handle errors appropriately
    });
});
router.get("/", async (req, res) => {
  try {
    const photo = await Photo.find({});
    if (photo) {
      res.status(200).json(photo); // Send users data with appropriate status code
    } else {
      res.status(404).send("No users found"); // Send clear message if no users found
    }
  } catch (error) {
    // Handle errors gracefully
    console.error(error); // Log the error for debugging
    res.status(500).send("Error retrieving users"); // Send generic error message
  }
});
module.exports = router;
