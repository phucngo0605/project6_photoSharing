import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import axios from "axios";
import "./styles.css";
import { useParams, Link } from "react-router-dom";
import UserPhotos from "../UserPhotos";
import models from "../../modelData/models";

/**
 * Define UserDetail, a React component of Project 4.
 */
function UserDetail() {
  const { userId } = useParams();
  const [showUserPhotos, setShowUserPhotos] = useState(false);

  const handleViewUserPhotos = () => {
    setShowUserPhotos(true);
  };

  const [user, setUser] = useState();
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8081/api/user/" + userId
        );
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        // Handle error gracefully, e.g., display an error message to the user
      }
    };

    fetchUsers(); // Call the function to fetch users on component mount
  }, []); // Em
  console.log(user);
  if (user)
    return (
      <>
        <Typography variant="body1">
          <div>
            <div>Last name : {user.last_name}</div>
            <div>Location : {user.location}</div>
            <div>Desciption : {user.description}</div>
          </div>
        </Typography>
        <Link to={`/photos/${userId}`} onClick={handleViewUserPhotos}>
          View User Photos
        </Link>
      </>
    );
}

export default UserDetail;
