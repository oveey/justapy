import React from 'react'
import image from '../../assets/image.png';
import star from '../../assets/star.png';
import './header.css';



const Header = () => {
  return (
    <div className="header section__padding" id="home">
      <div className="header-content">
        <h1>Welcome to <span className='gradient__text1'>NotJustEvent,</span> your all-in-one event  planning solution!</h1>
        <h2>The Future of <span className='gradient__text'>Event Planning</span> is Almost Here. Be Among the First to <span className='gradient__text'>Experience</span> it !</h2>
        <p>Get notified when we launch and get a free early access.<img src={star} alt="Star" className="Star"/></p>

        <div class="input-container">
          <input class="input-field" type="text" placeholder="Enter your email address"></input>
          <button class="button">Join the waitlist</button>

        </div>

      </div>

      <div className="header-content1">
          {<img src={image} alt="image"/> }
      </div>

     
    </div>

  )
}

export default Header