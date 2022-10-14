import React from 'react';
import './AboutUs.css';
import  icon_first from '../images/icon-people.svg';
import  icon_second from '../images/icon-explorer.svg';

function AboutUs() {
    return (
      <div className="about_us" id='aboutUs'>
          <h2 className='about_us_title'>About Us</h2>
          <div className='about_us_list'>
            <article className='about_us_card'>
                <div className='about_us_frame'>
                    <img className='about_us_icon' alt='icon' src={icon_first}></img>
                    <span className='about_us_span'>We find guests and tenants</span>
                </div> 
            </article>
            <article className='about_us_card'>
                <div className='about_us_frame'>
                    <img className='about_us_icon' alt='icon' src={icon_second}></img>
                    <span className='about_us_span'>Prepare your property for rental</span>
                </div>
            </article>
            <article className='about_us_card'>
                <div className='about_us_frame'>
                    <img className='about_us_icon' alt='icon' src={icon_first}></img>
                    <span className='about_us_span'>Manage your property for you</span>
                </div>
            </article>
          </div>
      </div> 
    );
  }
  
  export default AboutUs;