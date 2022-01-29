import React from 'react';
import './Navbar.css';
import { MenuItems } from './MenuItems.js';
import utophIcon from './images/utoph-icon.png';

const Navbar = () => {
  return (
    <div className="navbarContainer">

      <div className="navbarIconContainer">
       <img className="navbarIcon" src={utophIcon} alt=""/>
       <h1>UTOPH</h1>
      </div>

      <div className="navbarItemContainer">
        {MenuItems.map((item) => {
            return (
              <>
              <div className="navbarItems">
                <a href={item.url}>
                  <p>{item.title}</p>
                </a>
              </div>
              <p className="navbarLine">|</p>
              </>
              
            )
          })}

          <div className="navbarItems navbarSignUp">
            <a href="/signup">
              <p>SIGN UP</p>
            </a>
          </div>
      </div>
        
    </div>
  );
}; // This is a test comment

export default Navbar;
