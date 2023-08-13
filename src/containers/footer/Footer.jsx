import React from 'react'
import './footer.css';
import event from '../../assets/event.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin,faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  
  return (
    <div className="footer section__padding">
      <div className='footer-logo'>
        { <img src={event}  alt="event" />}
      </div>
      <p className='footer-text'>Connect with us on social media: Follow us on platforms for the latest updates, news, and exclusive content.</p>


        

      <div className='footer2'>
        <a href="https://twitter.com/your_twitter_profile_here" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="https://twitter.com/your_twitter_profile_here" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href="https://twitter.com/your_twitter_profile_here" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
        <a href="https://twitter.com/your_twitter_profile_here" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
        <hr className='line2'/>
      </div>
      <div className='Copyright'>
       <p>© 2023 Not just event. All rights reserved</p>
      </div>

      

        

     
    </div>

    
  )
}

export default Footer