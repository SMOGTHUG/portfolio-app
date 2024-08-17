import React from 'react';
import './home.css';
import Navbar from '../navbar/Navbar';
import Banner from '../banner/Banner';
import Hero from '../hero/Hero';
import Footer from '../footer/Footer';
import Project from '../projects/Project';
import Work from '../work/Work';
import Tech from '../tech/Tech';
import Services from '../services/Services';
import Features from '../features/Features';
import Products from '../products/Products';
import Agency from '../agency/Agency';

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Banner />
        <Project />
        <Work />
        <Tech />
        <Services />
        <Features />
        <Products />
        <Agency />
        <Footer /> 
    </div>
  )
}

export default Home