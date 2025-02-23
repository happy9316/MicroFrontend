import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Container, TextField, Button, Card, CardContent, Typography } from "@mui/material";
import { AiOutlineMail, AiOutlineUser, AiOutlineMessage } from "react-icons/ai";



const Contactus = () => {
  const form = useRef();
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_cz71x7s", "template_36pkf6y", form.current, {
        publicKey: "ZVuqDieuuQLVIybzI",
      })
      .then(
        () => {
          setStatus({ success: true, message: "Email sent successfully!" });
        },
        (error) => {
          setStatus({ success: false, message: "Failed to send email. Try again later." });
        }
      );
  };

  return (
    <>
   
    <Container className="d-flex justify-content-center align-items-center mt-5">
      <Card sx={{ width: 400, boxShadow: 3, borderRadius: 3 }}>
        <CardContent>
          <Typography variant="h5" align="center" gutterBottom>
            <AiOutlineMail size={30} /> Contact Us
          </Typography>

          <form ref={form} onSubmit={sendEmail}>
          
            <div className="mb-3">
              <AiOutlineUser size={20} className="me-2" />
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                name="user_name"
                required
              />
            </div>

            <div className="mb-3">
              <AiOutlineMail size={20} className="me-2" />
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                type="email"
                name="user_email"
                required
              />
            </div>

            
            <div className="mb-3">
              <AiOutlineMessage size={20} className="me-2" />
              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                name="message"
                required
              />
            </div>

            
            <Button fullWidth variant="contained" color="primary" type="submit">
              Send
            </Button>

            
            {status && (
              <Typography
                variant="body2"
                align="center"
                color={status.success ? "green" : "red"}
                sx={{ marginTop: 2 }}
              >
                {status.message}
              </Typography>
            )}
          </form>
        </CardContent>
      </Card>
    </Container>
   
    </>
  );
};

export default Contactus
