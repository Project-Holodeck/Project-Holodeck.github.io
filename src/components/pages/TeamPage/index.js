import React from "react";
import TeamPageBanner from "../Banner/Banner";
import BannerInfo from "../Banner/BannerInfo.js";
import CardGrid from "./CardGrid";
import Card from "./card";
import { CurrentExecInfo } from "./teamInfo";
import "./index.css";
import Footer from '../../Footer/Footer.js';

let sampleImg =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAAC" +
  "UFjqAAAADUlEQVQY02NgGAWkAwABNgABGtWNFwAAAABJRU5ErkJggg==";

const currentExecCards = CurrentExecInfo.map((memberData) => {
   return (
      <Card 
        card = {{
          className: "teamPageCardStyle1",
          image: memberData.image,
          name: memberData.name,
          position: memberData.position,
          discipline: memberData.discipline,
          link1: "#",
          link2: "#",
        }}
      />
   );
});

let testingCard2 = (
  <Card
    card={{
      className: "teamPageCardStyle2",
      image: sampleImg,
      name: "Name 2",
      position: "Position 2",
      discipline: "Discipline+Year 2",
      link1: "#",
      link2: "#",
    }}
  />
);

let myCards2 = [
  testingCard2,
  testingCard2,
  testingCard2,
  testingCard2,
  testingCard2,
];

let testingCard3 = (
  <Card
    card={{
      className: "teamPageCardStyle1",
      image: sampleImg,
      name: "Name 1",
      position: "Position 1",
      discipline: "Discipline+Year 1",
      link1: "#",
      link2: "#",
    }}
  />
);

let myCards3 = [testingCard3, testingCard3, testingCard3, testingCard3];

const index = () => {
  return (
    <div>
      <div>
        <TeamPageBanner banner={BannerInfo[1]} />
        <div className='TeamPageBannerSVG' >
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width: '100%'}}>
            <path d="M0.00,49.99 C152.03,-49.82 363.65,150.49 500.00,49.99 L500.00,150.00 L0.00,150.00 Z" 
            style={{stroke:'none', fill: 'white'}}>
            </path>
          </svg>
        </div>
      </div>
      <div className="ExecCardContainer">
        <div className="CurrentExecutiveTitleWrapper">
          <div className='ExecTitleBorderContainer'>
            <p className="BlackHeader">
              Current Executives
            </p>
          </div>
        </div>
        <div className="CardGridContainer">
          <CardGrid cards={currentExecCards} />
        </div>
      </div>
      <div className="GeneralCardContainer">
        <div className="GeneralTitleWrapper">
          <div className="GeneralMemberBorderContainer">
            <p className="BlackHeader">
              Current Members
            </p>
          </div>
        </div>
        <div className="CardGridContainer">
          <CardGrid cards={myCards2} />
        </div>
      </div>
      <div className="FormerCardContainer">
        <div style={{height: '150px', overflow: 'hidden'}} >
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width: '100%'}}>
            <path d="M0.00,49.99 C216.93,-61.67 348.98,150.49 500.00,49.99 L500.00,0.00 L0.00,0.00 Z" 
            style={{stroke: 'none', fill: 'white'}}>
            </path>
          </svg>
        </div>
        <div className="FormerTitleWrapper">
          <div className='FormerExecBorderContainer'>
            <p className="WhiteHeader">
              Former Executives
            </p>
          </div>
        </div>
        <div className="CardGridContainer">
          <CardGrid cards={myCards3} />
        </div>
        <Footer/>
      </div>
      
    </div>
  );
};

export default index;
