import React, { useEffect } from 'react';
import  icon from '../../assets/icon.png';
import  image2 from '../../assets/image2.png';
import './customers.css';
import  AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles






const Customers = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Set your desired duration for animations
      once: false, // Animations will only occur once
      startEvent: 'DOMContentLoaded', // Trigger animations when the DOM is fully loaded
      offset: 100, // Adjust this value as needed


    });
  }, []);

  return (
    <div className="customer section__padding">
      <div className="customer-content" data-aos="fade-up" data-aos-duration="1000">
        <p>We are on a mission to simplify and enhance your <span className='gradient__text1'>event planning</span> and management experience, and we're glad you've decided to join us on this exciting journey.</p>
        <hr className='custom-line'/>
      </div>

      <div className="customer-content">
        <div className="customer-text">
         <h1>Why Sign up</h1>
         <h2>By signing up for our waitlist, you will be among the first to be notified when our platform launches. But that's not all! As an early adopter, you will also get</h2>

        </div>
       

      </div>

      <div className="customer__text">
        <div className='icons'>
          <p className='para'><img src={icon} alt="Icon" className="icon" /> Exclusive early access to new features </p>
          <p className='para'><img src={icon} alt="Icon" className="icon" /> Opportunity to provide feedback and shape </p>
          <p className='para'><img src={icon} alt="Icon" className="icon" /> Our platform Special discounts and shape our platform</p>
          <p className='para'><img src={icon} alt="Icon" className="icon" /> Promotional offers Earn huge via our referral program</p>
        </div>
     
        
        <div className="image2" data-aos="fade-left">
          {<img src={image2} className="image"  alt="image2"/> }
        </div>

      </div>

      
           
    </div>




  );
}

export default Customers;