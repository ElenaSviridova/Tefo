import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className="header">
        <NavLink exact to="/" className="header__logo">
            Tefo Oy
        </NavLink>
        <div className='header_menu'>
            <NavLink exact to="/" className="header__link">
                About us
            </NavLink>
            <NavLink exact to="/" className="header__link info">
                Contact information
            </NavLink>
        </div>
        <button className='button'>Contact us</button>
    </div> 
  );
}

export default Header;