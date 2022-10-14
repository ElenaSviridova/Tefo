import React from 'react';
import './Main.css';


function Main() {
    return (
      <div className="main">
          <div className='main_paragraph'>
            <h1 className='title'>We will rent your property and also take care of it</h1>
            {/* <h2 className='main_subtitle'>We will help you find an apartment</h2> */}
            <button className='button'><a className='button_link' href='#contactUs'>Details</a></button>
          </div>
      </div> 
    );
  }
  
  export default Main;