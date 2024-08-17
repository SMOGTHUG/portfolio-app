import React from 'react'
import './services.css';
import check from '../images/check.png';
import pic2 from '../images/pic2.png';
const Services = () => {
  return (
    <div className='service'>
        <div className='service-container'>
          <div className='service-site'>
              <h5>FEATURES</h5>
              <h2>Give Your Site <br/>A New Look</h2>
              <p>Service range including technical skills, design, <br/>business understanding.</p>
              <div className='service-mid'>
            <div>
            <img src={check}   alt="unsplashage" />
            </div>
            <div  className='service-mid'>
              <p>Range including technical skills</p>
            </div>
          </div>

          <div className='service-mid'>
            <div >
            <img src={check}   alt="unsplashage" />
            </div>
            <div className='service-mid'>
              <p>Business understanding</p>
            </div>
          </div>

          <div className='service-mid'>
            <div>
            <img src={check}   alt="unsplashage" />
            </div>
            <div  className='service-mid'>
              <p>Partner on the long run</p>
            </div>
          </div>
            </div>

         

          
            <div>
              <img src={pic2} width={400} alt="unsplashage" />
            </div>
          
        </div>
    </div>
  )
}

export default Services