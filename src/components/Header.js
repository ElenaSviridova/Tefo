import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className="header">
        <a href="/" className="header__logo">
            Tefo Oy
        </a>
        <div className='header_menu'>
            <a href="#aboutUs" className="header__link">
                About us
            </a>
            {/* <NavLink exact to="/" className="header__link info">
                Contact information
            </NavLink> */}
        </div>
        <button className='button'><a className='header_button_link' href='#contactUs'>Contact us</a></button>
    </div> 
  );
}

export default Header;