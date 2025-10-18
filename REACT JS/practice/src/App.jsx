import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Number from "./pages/Number";

const App = () => {
  return (
    <Router>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/">Home</Link> | <Link to="/number">Number</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/number" element={<Number />} />
      </Routes>
    </Router>
  );
};

export default App;
