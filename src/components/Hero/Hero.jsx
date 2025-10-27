import React from 'react';
import './Hero.css';
import heroImage from '../../assets/hero.jpg';
import waveSvg from '../../assets/wave-yellow.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <img src={heroImage} alt="Hero background" className="hero-image" />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-welcome">Welcome to</p>
          <h1 className="hero-title">GOLDEN RAFFLE LTD</h1>
          <p className="hero-description">
            The home of golden raffle prizes with winners from all over Scotland and across the UK! 
            Make sure you follow us on social media for updates on the latest prize draws!
          </p>
          <button className="hero-button">
            Browse Competitions
          </button>
        </div>
      </div>
      
      <div className="hero-wave">
        <img src={waveSvg} alt="Wave" className="wave-image" />
      </div>
    </section>
  );
};

export default Hero;
