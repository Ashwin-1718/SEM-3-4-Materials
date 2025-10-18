import React from 'react';
import './App.css';
import Bill from './Bill';

export default function App() {
  const handleMenuClick = (page) => {
    alert(`${page} page`);
  };


  return (
    <>
      {/* <div className='bootstrap'>
        <h1><strong>Welcome</strong></h1>
      </div> */}

      <div className="App">
        {/* Header */}
        <header className="header">
          <nav>
            <ul className="menu">
              <li onClick={() => handleMenuClick('Home')}>Home</li>
              <li onClick={() => handleMenuClick('About Us')}>About Us</li>
              <li onClick={() => handleMenuClick('Contact Us')}>Contact Us</li>
            </ul>
          </nav>
        </header>
        {/* Body */}
        <main className="body">
          <h1><strong>Welcome to my page :)</strong></h1>
        </main>

        <Bill />

        {/* Footer */}
        <footer className="footer">
          <p>Page designed by ♪<strong> Ashwin</strong></p>
        </footer>
      </div>


    </>
  );
}
