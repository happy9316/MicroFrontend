import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Paper } from "@mui/material";
import { AiOutlineArrowLeft } from "react-icons/ai";

const emails = [
  { id: 1, sender: "John Doe", subject: "Meeting Reminder", content: "Don't forget our meeting at 3 PM.", time: "10:30 AM" },
  { id: 2, sender: "Google", subject: "Security Alert", content: "Your account was accessed from a new device.", time: "12:00 PM" },
  { id: 3, sender: "React Team", subject: "React v18 Released!", content: "Check out the new features in React v18.", time: "2:15 PM" },
];

const EmailView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const email = emails.find((e) => e.id === parseInt(id));

  if (!email) return <h5>Email not found</h5>;

  return (
    <Paper className="p-4">
      <Button startIcon={<AiOutlineArrowLeft />} onClick={() => navigate("/")}>Back</Button>
      <h4>{email.subject}</h4>
      <h6>From: {email.sender}</h6>
      <p>{email.content}</p>
    </Paper>
  );
};

export default EmailView;
