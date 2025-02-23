import React from "react";
import { AppBar, Toolbar, Button, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#333", padding: "10px",  borderRadius: "5px"  }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" fontWeight="bold">
          Micro-Frontend
        </Typography>
        <Box sx={{ display: "flex", gap: "20px" }}>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
          <Button color="inherit" component={Link} to="/contact">Contact</Button>
        </Box>
        <Box>
            <Link to="/mail" style={{ textDecoration: "none", color: "white" }}>
          <Button variant="contained" color="warning" sx={{ marginRight: "10px" }}>
            Email
          </Button>
            </Link>
            <Link to="/chat" style={{ textDecoration: "none", color: "white" }}>
          <Button variant="contained" color="warning">
            Chat
          </Button>
            </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
