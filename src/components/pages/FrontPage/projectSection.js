import React from 'react'
import Footer from '../../Footer/Footer.js';

const projectSection = () => {
  return (
    <div className="frontPageProjectSectionMainContainer">
      <div className="frontPageProjectSectionContainer">
        <p id="frontPageProjectSectionTitle">『Our Projects』</p>
        
        <div className="frontPageProjectSectionProjectContainer">

        </div>
        <a className="frontPageProjectSectionReadMoreClick" href="/projects">
          <div className="frontPageProjectSectionReadMore">
            <p>Read More!</p>
          </div>
        </a>
      </div>
      <Footer/>
    </div>
  )
}

export default projectSection