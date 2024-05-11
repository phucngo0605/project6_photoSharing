const express = require("express");
const router = express.Router();
const Photo = require("../db/photoModel");

router.post("/", async (request, response) => {});

router.get("/:id", async (req, res) => {
  var id = req.params.id;
  // console.log(id);
  Photo.findOne({ _id: id })
    .then((photo) => {
      if (!photo) {
        console.log("User with _id:" + id + " not found.");
        return res.status(400).send("Not found");
      }

      return res.status(200).send(photo.comments);
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).send("Internal server error"); // Handle errors appropriately
    });
});
module.exports = router;
