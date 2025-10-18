import React from 'react';

const Home = () => {
  const containerStyles = {
    padding: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: '#fff9f9',
    minHeight: 'calc(100vh - 100px)'
  };

  const headingStyles = {
    color: '#4a00e0',
    marginBottom: '1rem'
  };

  const paragraphStyles = {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    color: '#333'
  };

  return (
    <div style={containerStyles}>
      <h1 style={headingStyles}>Welcome to Our Website</h1>
      <p style={paragraphStyles}>This is the home page of our amazing application.</p>
    </div>
  );
};

export default Home;