import React from 'react';
import './Footer.css';
import locationIcon from './images/location.png';
import mailIcon from './images/mail.png';
import discordIcon from './images/discord.png';

import FooterRightText from './FooterRightText.js';

const Footer = () => {
  return (
    <footer className="footerMainContainer">
        <div className="footerTextContainer">
          <div className="footerTextMiddle">
            <p>©2022 by University of Toronto Project Holodeck</p>
            <p>Website designed by University of Toronto Freelancer's Organization</p>
            <p>Icon designed by CFA</p>
          </div>
          <div className="footerTextRight">
            <FooterRightText text="Room 515 in 256 McCaul Street" image={locationIcon}/>
            <FooterRightText text="UTOPH@g.skule.ca" image={mailIcon} />
            <a className="footerDiscord" href="https://discord.gg/dUnuPXHkAv" target="_blank" rel="noreferrer">
              <FooterRightText text="Join our Discord Server!" image={discordIcon}/>
            </a>
          </div>
        </div>
        <div className="footerGradient">
          <svg viewBox="0 0 1000 165">
            <path fill="#eeecec" d="M0,165 L0,25 C0,25 150,100 300,100 C300,100 450,100 600,50 C600,50 750,0 950,0 L1000,0 1000,165 Z"/>
          </svg>
        </div>
    </footer>
  )
}

export default Footer