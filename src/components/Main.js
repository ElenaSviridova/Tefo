import React from 'react';
import './Main.css';
import housePicture from '../images/house.png';


function Main() {
    return (
      <div className="main">
          <div className='main__paragraph'>
            <h1 className='title'>we rent out your properties and fully manage them since 2007</h1>
            <article className='main__text'>We:
                prepare your property for rental
                find guests and tenants
                manage your property
                have local expertise in Finland, Spain, France, UK
                develop and implement house automation

                If you have property to rent and don’t want to hassle with the process, get in touch with us!
</article>
            <button className='main__button button'><a className='header__link' href='/'>Details</a></button>
          </div>
          <img className='main__img' src={housePicture} alt='pic'></img>
      </div> 
    );
  }
  
  export default Main;