import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>Group 6</h1>
      <h3>Group Member:Chen Nili (1901883) , Lin Shixuan (1901849), Wu JiaJie (1901828) </h3>
      
    </div>
  );
}

export default HeroSection;
