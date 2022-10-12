import React from 'react';
import './AboutUs.css';
import  icon_first from '../images/icon-people.svg';
import  icon_second from '../images/icon-explorer.svg';

function AboutUs() {
    return (
      <div className="about_us">
          <h2 className='about_us_title'>About Us</h2>
          <div className='about_us_list'>
            <article className='about_us_card'>
                <div className='about_us_frame'>
                    <img className='about_us_icon' alt='icon' src={icon_first}></img>
                    <span className='about_us_span'>High level of specialists qualification</span>
                </div> 
            </article>
            <article className='about_us_card'>
                <div className='about_us_frame'>
                    <img className='about_us_icon' alt='icon' src={icon_second}></img>
                    <span className='about_us_span'>Great experience</span>
                </div>
            </article>
            <article className='about_us_card'>
                <div className='about_us_frame'>
                    <img className='about_us_icon' alt='icon' src={icon_first}></img>
                    <span className='about_us_span'>High level of specialists qualification</span>
                </div>
            </article>
          </div>
      </div> 
    );
  }
  
  export default AboutUs;