import React, { useState } from "react";
import { Container, Paper, TextField, Button, Typography } from "@mui/material";
import { BsChatDotsFill } from "react-icons/bs";

const ChatApp = () => {
  const [messages, setMessages] = useState([
    { sender: "User", text: "Hello!" },
    { sender: "Bot", text: "I'm a Bot!" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "User", text: input };
    const botReply = { sender: "Bot", text: "I'm a Bot!" };

    setMessages([...messages, userMessage, botReply]);
    setInput("");
  };

  return (
    <Container maxWidth="sm" className="d-flex flex-column align-items-center mt-4">
      <Paper elevation={3} className="p-3 w-100" style={{ borderRadius: "10px", overflow: "hidden" }}>
      
        <div className="d-flex align-items-center justify-content-center p-2 bg-secondary text-white">
          <BsChatDotsFill className="me-2" />
          <Typography variant="h6">Let's Start Chat!</Typography>
        </div>

        
        <div className="chat-box p-3" style={{ height: "400px", overflowY: "auto" }}>
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`d-flex ${msg.sender === "User" ? "justify-content-start" : "justify-content-end"}`}
            >
              <Typography
                className="p-2 m-1 rounded"
                sx={{
                  backgroundColor: msg.sender === "User" ? "#d4ffbf" : "#add8e6",
                  display: "inline-block",
                  borderRadius: "10px"
                }}
              >
                <strong>{msg.sender}:</strong> {msg.text}
              </Typography>
            </div>
          ))}
        </div>

       
        <div className="d-flex p-2 border-top">
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button variant="contained" color="secondary" className="ms-2" onClick={handleSend}>
            Send
          </Button>
        </div>
      </Paper>
    </Container>
  );
};

export default ChatApp;
