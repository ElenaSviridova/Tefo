import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
        <div className='header_menu'>
            <a href="/" className="header__logo">
            Tefo Oy
            </a>
            <a href="#aboutUs" className="header__link">
                About us
            </a>
            <a className='header__link' href='#contactUs'>Contact us</a>
            {/* <NavLink exact to="/" className="header__link info">
                Contact information
            </NavLink> */}
        </div>
        
    </div> 
  );
}

export default Header;