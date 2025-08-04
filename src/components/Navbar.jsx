// src/components/navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="brand-logo">Digital Library</Link>

      <div className="navbar-actions">
        {/* Link to the main page of books */}
        <Link to="/" className="nav-link">Home</Link>

        {/* ADDED: Link to the Bookmarks page */}
        <Link to="/bookmarks" className="nav-link">Bookmarks</Link>

        {/* This link is correct */}
        <Link to="/contact" className="nav-link">Contact</Link>

        {/* REMOVED: Login and Sign Up links are gone */}
      </div>
    </nav>
  );
}

export default Navbar;