import React from 'react';
import AboutImage from '../assets/pizza_banner3.jpg';
import '../styles/About.css'

function About() {
  return (
  <div className="about">

    <div className='aboutTop' style={{ backgroundImage: `url(${AboutImage})`}}></div>
    <div className='aboutBottom'>
        <h1>ABOUT US</h1>
        <p>We are authentic restaurent</p>
    </div>

  </div>
  );
}

export default About;
