import React, { useEffect } from 'react';
import event1 from '../../assets/event1.png';
import star from '../../assets/star.png';
import './header.css';
import 'animate.css';
import  AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles





const Header = () => {

  useEffect(() => {
    AOS.init({
      duration: 2000, // Set your desired duration for animations
      once: false, // Animations will only occur once
      startEvent: 'DOMContentLoaded', // Trigger animations when the DOM is fully loaded
      offset: 120, // Adjust this value as needed


    });
  }, []);

  return (
    <div className="header section__padding">
      <div className="header-content">
        <h1>Welcome to <span className='gradient__text1'>NotJustEvent,</span> your all-in-one event  planning solution!</h1>
        <h2>The Future of <span className='gradient__text'>Event Planning</span> is Almost Here. Be Among the First to <span className='gradient__text1'>Experience</span> it !</h2>
        <p>Get notified when we launch and get a free early access.<img src={star} alt="Star" className="Star"/></p>

        <div class="input-container">
          <input class="input-field" type="text" placeholder="Enter your email address"></input>
          <button class="button1">Join the waitlist</button>

        </div>

      </div>
      <div className='gradient'></div>

      <div className="header-content1"  data-aos="fade-up" data-aos-duration="3000" >
          {<img src={event1} alt="Event1"/> }
      </div>

     
    </div>

  )
}

export default Header