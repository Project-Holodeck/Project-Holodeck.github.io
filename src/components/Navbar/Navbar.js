import React from 'react';
import './Navbar.css';
import { useState} from 'react';
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

  const [click, onClick] = useState(false);

  const toggleMenu = () => {
    onClick(!click);
  }


  return (
    <nav className="navbarContainer">
      

      <div className="navbarIconContainer">
       <a href="/">
        <img className="navbarIcon" src={utophIcon} alt=""/>
        <h1>UTOPH</h1>
       </a>
      </div>
      <div>
        <div className="navbarMenuIcon" onClick={toggleMenu}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}>
          </i>
        </div>
        <div className={click ? "navbarItemContainer active" : "navbarItemContainer"}>
        
          {MenuItems.map((item) => {
              return (
                <div className="navbarItems">
                  <a className={item.cName} href={item.url}>
                    
                      {pagePath(item.title)}
                  </a>
                </div> 
              )
            })}

          <div className="navbarItems navbarSignUp">
            <a className="nav-links" href="/signup">
              <p>JOIN US</p>
            </a>
          </div>
        </div>
      </div>
      
        
    </nav>
  );
}; // This is a test comment

export default Navbar;
