import React from "react";
import './Demo.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Number from './Number';
import Demo from './Demo';
import Smallest from "./Smallest";
import Vote from "./Vote";
import Leap from "./Leap";
import Prime from './Prime';
import Color from "./Color";
import StateUpdate from "./StateUpdate";
import EffectDemo from "./EffectDemo";
import UserData from "./UserData";
import Qr from "./Qr";
import Timer from "./Timer";
import Barcode from "./Barcode";
import Name from "./Name";
import Locationdemo from "./Locationdemo";
import QR_Barcode from "./QR-Barcode";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import Contactus from './pages/Contactus';
import Api from "./Api";
import UserForm from "./UserForm";
import Cart from "./Cart";
import HabitTracker from "./HabitTracker";
import ToggleMessage from "./ToggleMessage";



function App() {
  function handleMenuClick(page) {
    alert(`You clicked on ${page}`);
  }

  return (
    <>

        {/* Header */}
      <div className="App">
        <header className="header">
          <nav>
            <ul className="menu">
              <li onClick={() => handleMenuClick('Home')}>Home</li>
              <li onClick={() => handleMenuClick('About Us')}>About Us</li>
              <li onClick={() => handleMenuClick('Contact Us')}>Contact Us</li>
            </ul>
          </nav>
        </header>

        {/* Main Content */}
        <div className="container">
          {/* <Api/> */}

          {/* <BrowserRouter>
            <Layout />
            <Routes>
              <Route path='/' index element={<Home />} />
              <Route path='/about' element={<Aboutus />} />
              <Route path='/contact' element={<Contactus />} />
            </Routes>
          </BrowserRouter> */}

          {/* <Number n={9} /> */}
          <br />
          {/* <Prime number={7} /> */}
          <br />
          {/* <Smallest a={12} b={45} c={5} /> */}
          <br />
          {/* <Vote age = {20} /> */}
          <br />
          {/* <Leap year={2024} /> */}
          <br />
          {/* <Color /> */}
          <br />
          {/* <StateUpdate /> */}
          <br />
          {/* <EffectDemo /> */}
          <br />
          {/* <Timer /> */}
          <br />
          {/* <Barcode /> */}
          <br />
          {/* <Qr/> */}
          <br />
          {/* <Locationdemo /> */}
          <br />
          {/* <UserForm/> */}
          <br />
          {/* <QR_Barcode /> */}
          <br />
          {/* <HabitTracker/> */}
          <br />
          {/* <Name/> */}
          <br />
          {/* <Cart/> */}
          <br />
          <HabitTracker />
          <br />
          {/* <ToggleMessage/> */}
        </div>

        {/* Footer */}
        <footer className="footer">
          <p>Page designed by <strong>Ashwin</strong></p>
        </footer>
      </div>
    </>
  );
}

export default App;