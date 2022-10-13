import React from 'react';
import './BurgerMenu.css';


function BurgerMenu() {
    return (
    <>
    <header className="burger_menu">
        <div class="burger_menu_button">
		    <span></span>
		    <span></span>
		    <span></span>
	    </div>
      </header>
      <div class="menu">
        <nav>
            <ul>
            <li><a href="#">About us</a></li>
            <li><a href="#">Contacts</a></li>
            </ul>
        </nav>
    </div> 
    </>
      
    );
  }
  
  export default BurgerMenu;