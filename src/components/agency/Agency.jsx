import React from 'react';
import './agency.css';
import Group1 from '../images/Group1.png';
import Group3 from '../images/Group3.png'
import Group2 from '../images/Group2.png'

const Agency = () => {
  return (
    <div className='agency'>
       <div className='agency-title'>
            <h5>SERVICE</h5>
            <h3>How Our Agency<br/>Can Help</h3>
       </div>
        <div className='agency-card'>
            <div className='agency-card1'>
                <img src={Group1}  width={50} alt="unsplashage" />
                <h4>Design</h4>
                <p>Agency provides a full service range <br/>including technical skills, design.</p>
                <h6 className='agency-card2'>Learn More</h6>

            </div>
            <div className='agency-card1'>
                <img src={Group3} width={50}  alt="unsplashage" />
                <h4>Development</h4>
                <p>Full service range including technical <br/>skills, design, business.</p>
                <h6 className='agency-card2'>Discover More</h6>


            </div>
            <div className='agency-card1'>
                <img src={Group2} width={50}  alt="unsplashage" />
                <h4>Marketing</h4>
                <p>Technical skills, design, business <br/>understanding, ability.</p>
                <h6 className='agency-card2'>Explore Now</h6>

            </div> 

        </div>
    </div>
  )
}

export default Agency