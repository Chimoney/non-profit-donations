"use client";
import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField
} from "@mui/material";
import React, { useState } from "react";

const ContactForm = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    const response = await fetch(
      "https://api.chimoney.io/v0.2/notification/email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.CHIMONEY_SECRET
        },
        body: JSON.stringify({
          email,
          message,
          notificationContext: "Contact Form"
        })
      }
    );
    // ... handle response
    setOpen(false);
  };

  return (
    <Container disableGutters align="center">
      <Button
        variant="outlined"
        onClick={handleOpen}
        style={{ borderRadius: "20px" }}
      >
        Contact
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Contact Form</DialogTitle>
        <DialogContent>
          <TextField
            label="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
            fullWidth
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            variant="outlined"
            multiline
            rows={4}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default ContactForm;
