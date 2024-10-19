import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Coffee Flavours</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/flavours">Flavours</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
