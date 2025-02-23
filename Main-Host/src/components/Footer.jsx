import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#333",
        padding: "20px",
        textAlign: "center",
        color: "white",
        position: "fixed",
        bottom: 0,
        // right  : 0,
        width: "100%",
        borderRadius: "5px",
      }}
    >
      <Typography variant="body2">© 2024 MicroFrontend. All rights reserved by Happy.</Typography>
    </Box>
  );
};

export default Footer;
