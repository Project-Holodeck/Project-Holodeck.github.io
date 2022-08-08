import React from 'react';
import './Navbar.css';
import { useState} from 'react';
import { MenuItems } from './MenuItems.js';
import utophIcon from './images/utoph-icon.png';


const Navbar = () => {


  let actualTab = {
    "HOME": false,
    "TEAM": false,
    "PROJECTS": false,
    "SIGNUP": false
  }

  const [tab, setTab] = useState({
    ...actualTab
  });

  const pagePath = (title) => {
    let path = window.location.hash;
    if((title === "HOME" && tab["HOME"] === true) || (title === "TEAM" && tab["TEAM"] === true) || (title === "PROJECTS" && tab["PROJECTS"] === true)) 
      return <p style={{borderColor: 'rgb(0, 2, 132)', color: 'rgb(46, 46, 46)'}}>{title}</p>
    else
      return <p>{title}</p>
  }

  const [click, onClick] = useState(false);

  const toggleMenu = () => {
    onClick(!click);
  }

  const changeTab = (title) => {
    actualTab = {
      "HOME": false,
    "TEAM": false,
    "PROJECTS": false,
    "SIGNUP": false
    };

    actualTab[title] = true;

    setTab({...actualTab});

    console.log(tab);
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
                  <a className={item.cName} href={"#" + item.url} onClick={() => changeTab(item.title)} >
                      {pagePath(item.title)}
                  </a>
                </div> 
              )
            })}

          <div className="navbarItems navbarSignUp">
            <a className="nav-links" href={ "#" + "/signup" } onClick={() => changeTab("SIGNUP")}>
              <p>JOIN US</p>
            </a>
          </div>
        </div>
      </div>
      
        
    </nav>
  );
}; // This is a test comment

export default Navbar;
