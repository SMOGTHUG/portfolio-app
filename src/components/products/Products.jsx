import React from 'react'
import './product.css';
import pic3 from '../images/pic3.png';
import bitt from '../images/bitt.png'

const products = () => {
  return (
    <div className='products'>
        <div>
            <img src={pic3} width={400}  alt="unsplashage" />
        </div>

        <div >
            <div className='product-title'>
                <h5>SERVICE</h5>
                <h2>Making Complex <br/>Digital Products</h2>
                <p>Agency provides a full service range including <br/>technical skills, design, business.</p>

            </div>

            <div className='product-card'>
                <div>
                    <img src={bitt}   alt="unsplashage" />
                </div>
                <div>
                    <p className='product1'>"Understanding, ability to put themselves in the <br/>merchant's shoes. It is meant to partner."</p>
                    <p >Jenny Murtaugh</p>
                 </div>
                
            </div>
            <button className='product-btn'>EXPLORE</button>
        </div>
    </div>
  )
}

export default products