import React, { useState, useEffect } from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import "./styles.css";
import axios from "axios";
/**
 * Define UserList, a React component of Project 4.
 */
function UserList() {
  const [users, setUsers] = useState();
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:8081/api/user/list");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        // Handle error gracefully, e.g., display an error message to the user
      }
    };

    fetchUsers(); // Call the function to fetch users on component mount
  }, []); // Em
  if (users)
    return (
      <div>
        <Typography variant="body1">
          This is the user list, which takes up 3/12 of the window. You might
          choose to use <a href="https://mui.com/components/lists/">Lists</a>{" "}
          and <a href="https://mui.com/components/dividers/">Dividers</a> to
          display your users like so:
        </Typography>
        <List component="nav">
          {users.map((item) => (
            <React.Fragment key={item.id}>
              <ListItem button component={Link} to={`/users/${item._id}`}>
                <ListItemText primary={item.last_name} />
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
        <Typography variant="body1">
          The model comes in from models.userListModel()
        </Typography>
      </div>
    );
}

export default UserList;
