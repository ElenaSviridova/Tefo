import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
        <a href="/" className="header__logo">Tefo Oy</a>
        <button type='button' className='header__button button'>
          <a className='header__link' href='/'>login</a>
        </button>        
    </div> 
  );
}

export default Header;