import React from 'react';
import './Main.css';
import housePicture from '../images/house.png';


function Main() {
    return (
      <div className="main">
          <div className='main__paragraph'>
            <h1 className='title'>we rent out your properties and fully manage them since 2007</h1>
            <ul className='main__text'>
                We:
                <li className='main__li'>prepare your property for rental</li>
                <li className='main__li'>find guests and tenants</li>
                <li className='main__li'>manage your property</li>
                <li className='main__li'>have local expertise in Finland, Spain, France, UK</li>
                <li className='main__li'>develop and implement house automation</li>
               If you have property to rent and don’t want to hassle with the process, get in touch with us!
            </ul>
            <button className='main__button button'><a className='header__link' href='/'>Details</a></button>
          </div>
          <img className='main__img' src={housePicture} alt='pic'></img>
      </div> 
    );
  }
  
  export default Main;