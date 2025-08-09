import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404 - Page Not Found</h1>
      <p style={styles.message}>Sorry, the page you're looking for doesn't exist.</p>
      <Link to="/" style={styles.link}>Go back to Home</Link>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    color:"white",
  },
  heading: {
    fontSize: '48px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  message: {
    fontSize: '18px',
    marginBottom: '20px',
  },
  link: {
    fontSize: '16px',
    color: '#007BFF',
    textDecoration: 'none',
  }
};

export default NotFound;
