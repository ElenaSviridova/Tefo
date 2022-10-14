import React from 'react';
import './Details.css';
import './Main.css';
import './Header.css';
import flowerImg from '../images/flower.png'

function Details() {
    return (
      <div className="details" id='contactUs'>
          <img className='details_img' alt='pict' src={flowerImg}></img>
          <article className='details_article'>
            <p className='details_text'>Our service is available in Finland, Spain, France, UK.
            If you have a property to rent and don't want a hassle with the process, get in touch with us!</p>
            <button className='button' type='submit'>Contact us</button>
          </article>

          {/* <form className='details_form'>
                <h2 className='title'>Contact us</h2>
                <input className='details_input' placeholder='Name' type="text" name="userName" id='userName' required></input>
                <input className='details_input' placeholder='E-mail' type="email" name="email" id='email' required></input>
                <textarea className='details_input margin' placeholder='Message' type="text" name="message" id='message'></textarea>
                <button className='button' type='submit'>Send</button>
          </form> */}
      </div> 
    );
  }
  
  export default Details;