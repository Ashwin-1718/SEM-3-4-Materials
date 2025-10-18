import { Link, useLocation } from 'react-router-dom';
import React from 'react';

const Layout = () => {
  const location = useLocation();
  
  // Style objects
  const navStyles = {
    backgroundColor: '#f8f9fa',
    padding: '1rem',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };

  const ulStyles = {
    display: 'flex',
    gap: '20px',
    listStyle: 'none',
    margin: 0,
    padding: 0
  };

  const linkStyles = (path) => ({
    textDecoration: 'none',
    color: location.pathname === path ? '#4a00e0' : '#333',
    fontWeight: location.pathname === path ? 'bold' : 'normal',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    transition: 'all 0.3s ease',
    ':hover': {
      backgroundColor: '#e9ecef'
    }
  });

  return (
    <nav style={navStyles}>
      <ul style={ulStyles}>
        <li>
          <Link to="/" style={linkStyles('/')}>Home</Link>
        </li>
        <li>
          <Link to="/about" style={linkStyles('/about')}>About Us</Link>
        </li>
        <li>
          <Link to="/contact" style={linkStyles('/contact')}>Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Layout;