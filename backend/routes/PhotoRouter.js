const express = require("express");
const Photo = require("../db/photoModel");
const router = express.Router();

router.post("/", async (request, response) => {});

router.get("/", async (request, response) => {
  const photos = await Photo.find({});
  if (photos) {
    response.status(200).json(photos); // Send users data with appropriate status code
  } else {
    response.status(404).send("No photos found"); // Send clear message if no users found
  }
});

module.exports = router;
