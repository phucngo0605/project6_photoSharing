import React from "react";
import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import models from "../../modelData/models";

function UserPhotos() {
  const { userId } = useParams();
  const userPhotos = models.photoOfUserModel(userId);
  console.log(userPhotos);

  return (
    <div>
      <Typography variant="body1">
        User Photos for User ID: {userId}
      </Typography>
      <div>
        {userPhotos.map((photo) => (
          <img
            key={photo._id}
            src={require(`../../images/${photo.file_name}`)}
            alt={`Photo by ${photo.user_id}`}
            style={{ width: "200px", height: "auto", margin: "5px" }}
          />
        ))}
      </div>
    </div>
  );
}

export default UserPhotos;