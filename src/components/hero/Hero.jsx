import React from 'react';
import './hero.css';
import pic from '../images/pic.png';
import Bit from '../images/Bit.png';


const Hero = () => {
  return (
    <div className='hero'>
       <div className='hero-title'>
        
          <div className='hero-ban'>
            <h5>MODERN STUDIO</h5>
            <h1>We're Help <br/>To Build Your <br/>Dream Project</h1>
          </div> 
        <p>Agency provides a full service range including technical <br/>skills, design, business understanding.</p>

        <button className='hero-btn'>HOW WE WORK</button>
        <button className='hero-btn2'>Contact Us</button>

        <div className='hero-banner'>
            <div>
                <img src={Bit}   alt="unsplashage" />
            </div>
            <div className='heroes'>
                <p>"Put themselves in the merchant's shoes"</p>
                <h6>Meta Inc.</h6>
            </div>
        </div>

       </div>

       <div>
            <img src={pic} width={600} height={600}   alt="unsplashage" />
       </div>
    </div>
  )
}

export default Hero