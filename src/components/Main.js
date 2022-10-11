import React from 'react';
import { NavLink } from 'react-router-dom';
import './Main.css';


function Main() {
    return (
      <div className="main">
          <div className='main_paragraph'>
            <h1 className='main_title'>Renting apartments and their maintenance</h1>
            <h2 className='main_subtitle'>We will help you find an apartment</h2>
            <button className='button'>Details</button>
          </div>
      </div> 
    );
  }
  
  export default Main;