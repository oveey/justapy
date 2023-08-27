import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import event from '../../assets/event.png'; 






const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='Navbar'>
      <div className='Navbar__links'>
        <div className='Navbar__logo'>
          {<img src={event} alt="logo"/>}
        </div>
        <div className='Navbar__links-container'>
          <p><a href="#home">Venue</a></p>
          <p><a href="#faq">Vendor</a></p>
          <p><a href="#service">Tickets</a></p>
          <p><a href="#about">Host</a></p>
          <p><a href="#brand">Live events</a></p>
        </div>

      </div>
    

      <div className="navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#ff" size={28} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={28} onClick={() => setToggleMenu(true)} />
        } 
        {toggleMenu && (
          <div className="navbar-menu_container">
            <div className="navbar-menu_container-links">
              <p><a href="#venue">Venue</a></p>
              <p><a href="#vendor">Vendor</a></p>
              <p><a href="#tickets">Tickets</a></p>
              <p><a href="#host">Host</a></p>
              <p><a href="#liveevents">Live events</a></p>

            </div>
          
          </div>
        )}
      </div>
    </div>

   

  )
}

export default Navbar
