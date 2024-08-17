import React from 'react'
import map from '../images/map.png';
import map1 from '../images/map1.png';
import map2 from '../images/map2.png';
import map3 from '../images/map3.png';
import map4 from '../images/map4.png';
import pic1 from '../images/pic1.png';


import Combined from '../images/Combined.png';
import Oval from '../images/Oval.png'
import './banner.css';
const Banner = () => {
  return (
    <div className='banner'>
       <div className='banner-list'>
            <img src={map}   alt="unsplashage" />
            <img src={map1}   alt="unsplashage" />
            <img src={map2}   alt="unsplashage" />
            <img src={map3}   alt="unsplashage" />
            <img src={map4}   alt="unsplashage" />

            
       </div>

       <hr className='banner-border'/>



       <div className='banner-con'>  
            <div>
                <img src={pic1} width={400} height={400}   alt="unsplashage" />    
            </div> 

            <div className='banner-text'>
                <h5>ABOUT</h5>
                <h1>An Experience <br/>Design Agency</h1>
                <h6>Provides a full service range</h6> 
                <p>Ability to put themselves in the merchant's shoes. It is <br/>meant to partner on the long run, and work as an extension <br/>of the merchant's team.</p>
                <button className='banner-btn'>ABOUT US</button>
            </div> 
       </div>





      

      


    </div>
  )
}
  
export default Banner