import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className="header">
        <a href="/" className="header__link">
            Tefo Oy
        </a>
        <a href="/" className="header__link">
            About us
        </a>
    </div> 
  );
}

export default Header;