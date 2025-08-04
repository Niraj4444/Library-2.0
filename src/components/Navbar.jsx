// src/components/Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="brand-logo">Digital Library</Link>

      <div className="navbar-actions">
        <Link to="/contact" className="nav-link">Contact</Link>
        {/* Login and Sign Up links are now removed. */}
      </div>
    </nav>
  );
}

export default Navbar;