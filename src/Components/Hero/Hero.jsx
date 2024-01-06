import React from 'react'
import './Hero.css';
import hand_icon from '../Asset/hand_icon.png'
import arrow_icon from '../Asset/arrow.png'
import hero_img from '../Asset/hero_image.png'


const Hero = () => {
  return (
    <div className='Hero'>
      
      <div className="hero-left">
        <h2> NEW ARRIVALS ONLY</h2>

        <div>
          <div className="hand-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>

      <div className="hero-right">
        <img src={hero_img} alt="" />

      </div>
    </div>
  )
}

export default Hero
