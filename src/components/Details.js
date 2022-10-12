import React from 'react';
import './Details.css';
import './Main.css';
import './Header.css';
import flowerImg from '../images/flower.png'

function Details() {
    return (
      <div className="details">
          <img className='details_img' alt='pict' src={flowerImg}></img>
          <form className='details_form'>
                <h2 className='title'>Contact us</h2>
                <input className='details_input' placeholder='Name' type="text" name="userName" id='userName'></input>
                <input className='details_input' placeholder='E-mail' type="email" name="email" id='email'></input>
                <textarea className='details_input margin' placeholder='Message' type="text" name="message" id='message'></textarea>
                <button className='button' type='button'>Send</button>
          </form>
      </div> 
    );
  }
  
  export default Details;