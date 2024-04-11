import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@mui/material";

const ContactForm = () => {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Votre message a été envoyé avec succès!");
    setNom("");
    setEmail("");
    setTelephone("");
    setMessage("");
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <Paper elevation={3} style={{ padding: "20px", borderRadius: "10px", marginBottom: "20px" }}>
      <Typography variant="h4" gutterBottom style={{ textAlign: "center" }}>Contactez-nous</Typography>
      <Typography variant="body1" gutterBottom style={{ textAlign: "center", marginBottom: "20px" }}>
        N'hésitez pas à nous contacter si vous avez des questions ou si vous souhaitez prendre rendez-vous.
      </Typography>
      {showAlert && (
        <div className="alert alert-success" role="alert">
          Votre message a été envoyé avec succès!
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nom complet"
          variant="outlined"
          fullWidth
          margin="normal"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />
        <TextField
          label="Adresse email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Numéro de téléphone"
          variant="outlined"
          fullWidth
          margin="normal"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
        />
        <TextField
          label="Votre message"
          variant="outlined"
          fullWidth
          margin="normal"
          multiline
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button type="submit" variant="contained" fullWidth style={{ backgroundColor: "#1E88E5", color: "#FFF" }}>
          Envoyer
        </Button>
      </form>
    </Paper>
  );
};

export default ContactForm;
