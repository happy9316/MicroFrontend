import React from "react";
import { Link } from "react-router-dom";
import { List, ListItem, ListItemText, Button, Paper, Typography } from "@mui/material";
import { AiFillStar, AiOutlineInbox, AiOutlineSend } from "react-icons/ai";
import { MdDrafts, MdDelete } from "react-icons/md";

const Sidebar = ({ onCompose }) => {
  return (
    <Paper elevation={3} className="p-3 border-end" style={{ width: "250px", minHeight: "100vh" }}>
      <Typography variant="h6" className="mb-3 text-primary">📧 Gmail Clone</Typography>
      <Button variant="contained" color="primary" fullWidth onClick={onCompose}>
        Compose
      </Button>
      <List className="mt-3">
        {[
          { text: "Inbox", icon: <AiOutlineInbox />, path: "/" },
          { text: "Starred", icon: <AiFillStar />, path: "/" },
          { text: "Sent", icon: <AiOutlineSend />, path: "/" },
          { text: "Drafts", icon: <MdDrafts />, path: "/" },
          { text: "Trash", icon: <MdDelete />, path: "/" },
        ].map((item, index) => (
          <ListItem button key={index} component={Link} to={item.path} className="rounded">
            {item.icon} <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default Sidebar;
