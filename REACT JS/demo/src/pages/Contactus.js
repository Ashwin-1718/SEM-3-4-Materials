// src/pages/Contactus.js
import React from 'react';

const Contactus = () => {
  const containerStyles = {
    padding: '2rem',
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: '#fffaf0',
    minHeight: 'calc(100vh - 100px)'
  };

  const headingStyles = {
    color: '#8b0000',
    marginBottom: '2rem',
    textAlign: 'center'
  };

  const contactItemStyles = {
    backgroundColor: '#fff',
    padding: '1rem',
    marginBottom: '1rem',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s ease',
    ':hover': {
      transform: 'translateY(-3px)'
    }
  };

  return (
    <div style={containerStyles}>
      <h1 style={headingStyles}>Contact Us</h1>
      <div style={contactItemStyles}>
        <p>Feel free to reach out to us with any questions or inquiries.</p>
      </div>
      <div style={contactItemStyles}>
        <p><strong>Email:</strong> contact@example.com</p>
      </div>
      <div style={contactItemStyles}>
        <p><strong>Phone:</strong> (123) 456-7890</p>
      </div>
    </div>
  );
};

export default Contactus;