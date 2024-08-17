import React from 'react'
import './tech.css';
import Bitmap from '../images/Bitmap.png'
import play from '../images/play.png';
import time from '../images/time.png';
const Tech = () => {
  return (
    <div className='tech'>
        <div className='tech-container'>
          <div>
            <img src={Bitmap} width={400}   alt="unsplashage" />
           <div className='tech-play'>
           <img src={play}  width={100}  alt="unsplashage" />
           
           </div>
           <div className='tech-time'>
           <img src={time}   alt="unsplashage" />

           </div>
            </div>

          <div className='tech-card'>
              <h5>VIDEO REEL</h5>
              <h3>Unlock The Greatest <br/>Value Possible</h3>
              <p>Design, business understanding, ability to put themselves <br/>in the merchant's shoes meant to partner.</p>
          </div>
       </div>
    </div>
  )
}

export default Tech