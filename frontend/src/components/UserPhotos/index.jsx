import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import fetchModel from "../../lib/fetchModelData";

function UserPhotos() {
  const { userId } = useParams();
  const [photo, setPhoto] = useState(null); // State to store the photo data

  useEffect(() => {
    const fetchUserPhoto = async () => {
      try {
        const data = await fetchModel(`photo/${userId}`);
        console.log(data);
        setPhoto(data);
      } catch (error) {
        console.error("Error fetching user photo:", error);
      }
    };

    fetchUserPhoto();
  }, [userId]);

  if (!photo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Typography variant="body1">User Photo for User ID: {userId}</Typography>
      <div key={photo._id}>
        <img src={"/images/" + photo.file_name} />
        <Typography variant="body2">Time: {photo.date_time}</Typography>
        <Typography variant="h6">Comments</Typography>

        {photo.comments.map((comment) => (
          <div key={comment._id}>
            <Typography variant="body2">Comment: {comment.comment}</Typography>
            <Typography variant="body2">Time: {comment.date_time}</Typography>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserPhotos;
