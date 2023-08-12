import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.png'; 






const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='Navbar'>
      <div className='Navbar__links'>
        <div className='Navbar__logo'>
          {<img src={logo} alt="logo"/>}
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
          ? <RiCloseLine color="#000" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#000" size={27} onClick={() => setToggleMenu(true)} />
        } 
        {toggleMenu && (
          <div className="navbar-menu_container">
            <div className="navbar-menu_container-links">
            <p><a href="#home">Venue</a></p>
            <p><a href="#faq">Vendor</a></p>
            <p><a href="#service">Tickets</a></p>
            <p><a href="#about">Host</a></p>
            <p><a href="#brand">Live events</a></p>

            </div>
          
          </div>
        )}
      </div>
    </div>

   

  )
}

export default Navbar
