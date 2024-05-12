const express = require("express");
const bcrypt = require("bcryptjs-react");
const User = require("../db/userModel"); // Assuming userModel defines the User model
const router = express.Router();
router.post("/login", async (request, response) => {
  try {
    const { login_name, password } = request.body;
    const user = await User.findOne({ login_name });
    if (!user) {
      console.log("ko thay user");
      return response.status(401).send("Invalid username or password");
    }

    // Compare hashed password instead of plain text
    const passwordMatch = await bcrypt.compareSync(password, user.password);
    console.log(passwordMatch);
    if (!passwordMatch) {
      console.log("ko dung mat khau");
      return response.status(401).send("Invalid username or password");
    }
    console.log("login");
    // ... rest of the login logic

    response.status(200).send(user);
  } catch (error) {
    console.error("Login error:", error);
    response.status(500).send("Internal server error");
  }
});
// router.get("/admin", async (req, res) => {
//   res.send({ message: "admin page" });
// });
router.post("/register", async function (request, response) {
  try {
    if (request.body.login_name) {
      const user = await User.findOne({ login_name: request.body.login_name });
      if (user === null) {
        if (
          request.body.first_name !== "" &&
          request.body.last_name !== "" &&
          request.body.password !== ""
        ) {
          await User.create({
            first_name: request.body.first_name,
            last_name: request.body.last_name,
            location: request.body.location,
            description: request.body.description,
            occupation: request.body.occupation,
            login_name: request.body.login_name,
            password: request.body.password,
            latest_act: "Registered as a user",
          });
          response.status(200).send("Create user success");
        } else {
          response.status(400).send("Missing information");
        }
      } else {
        response.status(400).send("Exist user name");
      }
    }
  } catch (err) {
    response.status(400).send(JSON.stringify(err));
  }
});

module.exports = router;
