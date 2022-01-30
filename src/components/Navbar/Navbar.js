import React from 'react';
import './Navbar.css';
import { MenuItems } from './MenuItems.js';
import utophIcon from './images/utoph-icon.png';

const Navbar = () => {

  const pagePath = (title) => {
    let path = window.location.pathname;
    if((title === "HOME" && path === "/") || (title === "TEAM" && path === "/team") || (title === "PROJECTS" && path === "/projects")) 
      return <p style={{borderColor: 'rgb(0, 2, 132)', color: 'rgb(46, 46, 46)'}}>{title}</p>
    else
      return <p>{title}</p>
  }


  return (
    <div className="navbarContainer">

      <div className="navbarIconContainer">
       <a href="/">
        <img className="navbarIcon" src={utophIcon} alt=""/>
        <h1>UTOPH</h1>
       </a>
      </div>

      <div className="navbarItemContainer">
        {MenuItems.map((item) => {
            return (
              <>
              <div className="navbarItems">
                <a href={item.url}>
                  
                    {pagePath(item.title)}
                </a>
              </div>
              <p className="navbarLine"></p>
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
