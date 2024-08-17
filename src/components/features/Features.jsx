import React from 'react'
import './feature.css';
import Group from '../images/Group.png'
const Features = () => {
  return (
    <div className='feature'>
        <div  className='feature-container'>
            <div className='feature-title'>
                <h5>FEATURES</h5>
                <p>Long run, and work as an extension <br/>of the merchant's team.</p>
                <h6>Read more</h6>
            </div>

            <div className='feature-card'>
              <div className='feature-card1'>
              <img src={Group} width={50} height={50} alt="unsplashage" />
                <h4>professional</h4>
                <p>Full service range including <br/>technical skills, design.</p>
              </div>

              <div className='feature-card2'>
                <h4>Accessibility</h4>
                <p>Business understanding, <br/>ability to put themselves.</p>
              </div>
            </div>
       </div>
    </div>
  )
}

export default Features