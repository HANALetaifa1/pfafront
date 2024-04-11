import React from 'react';
import { Container, Grid, Typography, Paper } from '@mui/material';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import Menu from "./Menu";
import ContactForm from './ContactForm';
import Footer from './Footer';

const Contact = () => {
  return (
    <>
      <Menu />
      <Container maxWidth="lg" style={{ paddingTop: '50px' }}>
        <Grid container spacing={4} justifyContent="center" style={{ marginTop: '50px' }}>
          <Grid item xs={12} sm={4}>
            <Paper elevation={3} style={styles.contactInfo}>
              <FaMapMarkerAlt size={50} style={styles.contactIcon} />
              <Typography variant="h6" gutterBottom>Tunisie, Sfax</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper elevation={3} style={styles.contactInfo}>
              <FaPhone size={50} style={styles.contactIcon} />
              <Typography variant="h6" gutterBottom>+216 22 236 407</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper elevation={3} style={styles.contactInfo}>
              <FaEnvelope size={50} style={styles.contactIcon} />
              <Typography variant="h6" gutterBottom>amalguizeni1@gmail.com</Typography>
            </Paper>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" style={{ marginTop: '50px' }}>
          <Grid item xs={12} sm={8}>
            <ContactForm />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

const styles = {
  contactInfo: {
    padding: '30px',
    textAlign: 'center',
    backgroundColor: '#1E88E5',
    color: '#FFF',
    borderRadius: '10px',
    transition: 'transform 0.3s ease',
    marginBottom: '20px',
  },
  contactIcon: {
    marginBottom: '20px',
  }
};

export default Contact;
