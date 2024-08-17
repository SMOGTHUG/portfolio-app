import React from 'react'
import './footer.css';
import social from '../images/social.png'

const Footer = () => {
  return (
    <div className='foot'>
        <div className='footer'>
        <div className='footer-card'>
            <h4>Agency</h4>
            
        </div>
        <div className='footer-card1'>
            <h5>MENU</h5>
            <p>About</p>
            <p>Services</p>
            <p>Blog</p>
            <p>Contact</p>
        </div>
        <div className='footer-card1'>
            <h5>SERVICE</h5>
            <p>Design</p>
            <p>Development</p>
            <p>Marketing</p>
            <p>See more</p>
        </div>
        <div className='footer-card3'>
            <img src={social} alt="unsplashage" />
        </div>
        
    </div>
   
       <hr className='footer-border'/>

       <div className='footing'>
            <div className='foots'>
                <p>Copyright © 2022 Laaqiq. All Rights Reserved.</p>
            </div>

           <div className='footed'>
           <div className='foots'>
                <p>Terms of Use</p>
                
            </div>
            <div className='feet'>
                <p>Privacy Policy</p>
            </div>
           </div>


       </div>

    </div>
  )
}

export default Footer