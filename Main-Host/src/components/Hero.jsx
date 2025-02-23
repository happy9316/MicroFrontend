import React from "react";
import { Container, Box, Typography, Button } from "@mui/material";

const Hero = () => {
  return (
    <Container sx={{ marginTop: "40px", textAlign: "center" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "linear-gradient(to right, #6a11cb, #2575fc)",
          borderRadius: "10px",
          padding: "40px",
        }}
      >
        {/* Left Content */}
        <Box sx={{ textAlign: "left", color: "white", maxWidth: "50%" }}>
          <Typography variant="h3" fontWeight="bold">
            Welcome to Our Website
          </Typography>
          <Typography variant="h6" sx={{ marginY: "10px" }}>
            Discover amazing features of micro-frontends by{" "}
            <span style={{ color: "#8e44ad", fontWeight: "bold" }}>Happy</span>.
            <br />
            This website is completely created using micro-frontend architecture.
          </Typography>
          <Typography variant="body1" sx={{ marginY: "10px" }}>
            Micro-frontend architecture allows building scalable and maintainable web applications. 
            It enables different teams to work independently on various features without conflicts. 
            Each micro-frontend can be developed using different frameworks. 
            This approach improves performance by lazy-loading only the required parts of the application. 
            Micro-frontends promote code reusability and faster development cycles.
          </Typography>
          <Button variant="contained" color="warning">
            Get Started
          </Button>
        </Box>

        {/* Right Content - Image */}
        <Box
          sx={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "5px 5px 20px rgba(0,0,0,0.2)",
          }}
        >
          <img
            src="https://miro.medium.com/max/1200/1*_WDSkWUQ_-0WpnUf54bVqA.jpeg"
            alt="Micro-Frontend Architecture"
            style={{ width: "250px", height: "auto", borderRadius: "10px" }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Hero;
