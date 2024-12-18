import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Картины</div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Главная</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
