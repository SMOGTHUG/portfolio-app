import React,  { useState }  from 'react';
import logo from '../images/logo.png'
import './navbar.css';
// import { Outlet } from 'react-router-dom';
function Navbar () {

    const [isOpen, setIsOpen] = useState(false);
  return (
      <section>
        <div className="navbar">
            <span className="nav-logo"><img src={logo} alt="unsplashage" /></span>
           
            <div className={`nav-items ${isOpen && "open"}`}>
            <a href="About us">About</a>
            <a href="services">Services</a>
            <a href="faqs">pricing</a>
            <a href="blog">Blog</a>
          </div>
    
           
          <div className='nav-foot'>
            <button className='btn-1'>Contact</button>
           
          </div>

            <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}> 
            <div className="bar"></div>
            </div>

            </div>

        {/* <Outlet/> */}
   
    </section>

  )
}

export default Navbar