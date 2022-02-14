import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footerMainContainer">
        <div className="footerTextContainer">
          <div className="footerTextMiddle">
            <p>©2022 by University of Toronto Project Holodeck</p>
            <p>Website designed by University of Toronto Freelancer's Organization</p>
            <p>Icon designed by CFA</p>
          </div>
        </div>
        <div className="footerGradient">
          <svg viewBox="0 0 1000 180">
            <path fill="#eeecec" d="M0,180 L0,25 C0,25 150,100 300,100 C300,100 450,100 600,50 C600,50 750,0 950,0 L1000,0 1000,180 Z"/>
          </svg>
        </div>
    </footer>
  )
}

export default Footer