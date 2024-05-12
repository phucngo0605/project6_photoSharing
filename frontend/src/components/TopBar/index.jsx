import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import "./styles.css";
import axios from "axios";
import "./styles.css";

/**
 * Define TopBar, a React component of Project 4.
 */
function TopBar(props) {
  const handleUploadButtonClicked = (event) => {
    event.preventDefault();

    if (event.target.files.length > 0) {
      const formData = new FormData();
      formData.append("uploadedphoto", event.target.files[0]);

      axios
        .post("/photos/new", formData)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.error("POST ERR:", err));
    }
  };
  const handleLogoutButtonClicked = async () => {
    try {
      await axios.post("/admin/logout", {});
      props.changeStatus(false); // Assuming changeStatus is a function passed as a prop
    } catch (error) {
      console.error("Error logging out:", error);
    }
    props.changeStatus(false);
  };
  return (
    <AppBar className="cs142-topbar-appBar" position="absolute">
      <Toolbar>
        <Typography variant="h5" color="inherit">
          RAN LE
        </Typography>

        <Typography
          className="version"
          variant="body1"
          color="inherit"
        ></Typography>

        {props.userIsLoggedIn ? (
          <>
            <Typography className="login" variant="h5" color="inherit">
              {`Hi ${props.user.first_name}`}
            </Typography>
            <div className="logoutButton">
              {/* <input
                type="file"
                accept="image/*"
                ref={(ref) => (this.uploadInput = ref)}
              /> */}
              <Button variant="contained" onClick={handleUploadButtonClicked}>
                Add photo
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleLogoutButtonClicked}
              >
                Logout
              </Button>
            </div>
          </>
        ) : (
          <Typography className="login" variant="h5" color="inherit">
            Please Login
          </Typography>
        )}

        <Typography className="info" variant="h5" color="inherit">
          {/* {message} */}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
