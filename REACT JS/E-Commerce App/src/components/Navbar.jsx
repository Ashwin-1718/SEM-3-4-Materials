import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search functionality
    console.log("Searching for:", searchQuery);
    // You can redirect to search results page or filter products
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        {/* Logo */}
        <Link to="/" className="navbar__logo">
          <span className="logo__highlight">E</span>Commerce
        </Link>

        {/* Search Bar - Desktop */}
        <form className="navbar__search" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="search__button">
            <FaSearch />
          </button>
        </form>

        {/* Main Navigation - Desktop */}
        <div className="navbar__links">
          <Link to="/" className="navbar__link">
            Home
          </Link>
          <Link to="/products" className="navbar__link">
            Products
          </Link>
          <Link to="/about" className="navbar__link">
            About
          </Link>
          <Link to="/contact" className="navbar__link">
            Contact
          </Link>
        </div>

        {/* Icons - Desktop */}
        <div className="navbar__icons">
          <Link to="/cart" className="navbar__icon">
            <FaShoppingCart />
            <span className="cart__count">3</span>
          </Link>
          <Link to="/profile" className="navbar__icon">
            <FaUser />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="navbar__toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile__menu ${isMenuOpen ? "active" : ""}`}>
        {/* Search Bar - Mobile */}
        <form className="mobile__search" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="search__button">
            <FaSearch />
          </button>
        </form>

        {/* Mobile Navigation Links */}
        <div className="mobile__links">
          <Link to="/" className="mobile__link" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/products" className="mobile__link" onClick={toggleMenu}>
            Products
          </Link>
          <Link to="/about" className="mobile__link" onClick={toggleMenu}>
            About
          </Link>
          <Link to="/contact" className="mobile__link" onClick={toggleMenu}>
            Contact
          </Link>
          <Link to="/profile" className="mobile__link" onClick={toggleMenu}>
            My Account
          </Link>
          <Link to="/cart" className="mobile__link" onClick={toggleMenu}>
            Shopping Cart
          </Link>
        </div>
      </div>
    </nav>
  );
}