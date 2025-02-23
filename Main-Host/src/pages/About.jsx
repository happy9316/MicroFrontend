import React from "react";
import { Container, Typography, Box } from "@mui/material";

const About = () => {
  return (
    <Container sx={{marginBottom:"50px", padding: "50px", textAlign: "center" }}>
      {/* About Me Section */}
      <Box sx={{ marginBottom: "40px" }}>
        <Typography variant="h4" fontWeight="bold">About Me</Typography>
        <Typography variant="body1" sx={{ marginTop: "20px" }}>
          Hello! I'm <strong>Harpreet Singh</strong>, a passionate developer with expertise in building modern, responsive web applications. 
          My core skills include React, Node.js, and other web technologies. I love crafting intuitive user interfaces and 
          staying updated with the latest trends in frontend development.
        </Typography>
      </Box>

      {/* About This Project Section */}
      <Box sx={{ marginBottom: "40px" }}>
        <Typography variant="h4" fontWeight="bold">About This Project</Typography>
        <Typography variant="body1" sx={{ marginTop: "20px" }}>
          This website is built using <strong>Micro-Frontend Architecture</strong>, an approach that modularizes the frontend 
          into smaller, independently developed and deployed units. This is my first micro-frontend project, showcasing 
          how scalable and maintainable applications can be built using this method.
        </Typography>
      </Box>

      {/* Micro-Frontends Overview */}
      <Box sx={{ marginBottom: "40px", textAlign: "left" }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center">Understanding Micro-Frontends</Typography>
        
        <Typography variant="h5" fontWeight="bold" sx={{ marginTop: "30px" }}>What are Micro-Frontends?</Typography>
        <Typography variant="body1" sx={{ marginTop: "10px" }}>
          Micro-frontends extend the concept of microservices to the frontend world. Instead of having a monolithic UI, 
          the application is divided into smaller, self-contained modules that can be built, tested, and deployed independently. 
          These modules can use different frameworks like React, Angular, or Vue, ensuring seamless integration.
        </Typography>

        <Typography variant="h5" fontWeight="bold" sx={{ marginTop: "30px" }}>Benefits of Micro-Frontends</Typography>
        <ul>
          <li><Typography variant="body1"><b>Scalability:</b> Teams can develop and deploy different parts of the application independently.</Typography></li>
          <li><Typography variant="body1"><b>Technology Flexibility:</b> Different micro-frontends can use different frameworks or libraries.</Typography></li>
          <li><Typography variant="body1"><b>Faster Development:</b> Parallel development speeds up release cycles.</Typography></li>
          <li><Typography variant="body1"><b>Independent Deployment:</b> Individual parts of the application can be updated without affecting the whole system.</Typography></li>
          <li><Typography variant="body1"><b>Better Maintainability:</b> Smaller, modular codebases improve debugging and maintenance.</Typography></li>
        </ul>

        <Typography variant="h5" fontWeight="bold" sx={{ marginTop: "30px" }}>Where are Micro-Frontends Used?</Typography>
        <ul>
          <li><Typography variant="body1"><b>Enterprise Applications:</b> Large organizations use micro-frontends to manage various teams working on different sections.</Typography></li>
          <li><Typography variant="body1"><b>E-commerce Platforms:</b> Shopping carts, product listings, and checkout processes are handled separately.</Typography></li>
          <li><Typography variant="body1"><b>Content Management Systems (CMS):</b> Allows modular management of content and user interactions.</Typography></li>
          <li><Typography variant="body1"><b>Analytics & Dashboards:</b> Different teams can manage data visualization tools independently.</Typography></li>
        </ul>
      </Box>

      {/* Conclusion */}
      <Typography variant="body1" sx={{ marginTop: "30px" }}>
        Micro-Frontend Architecture is a game-changer for web development, allowing teams to collaborate efficiently 
        while ensuring high performance and flexibility. This project serves as a stepping stone in understanding 
        and implementing this powerful approach.
      </Typography>
    </Container>
  );
};

export default About;
