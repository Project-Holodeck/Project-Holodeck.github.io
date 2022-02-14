import React from 'react';
import TeamPageBanner from '../Banner/TeamPageBanner';
import CardGrid from './CardGrid';
import Card from './card';
import './index.css';

let sampleImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAAC"
              + "UFjqAAAADUlEQVQY02NgGAWkAwABNgABGtWNFwAAAABJRU5ErkJggg==";

let testingCard = 
  <Card card={{
    className: "teamPageCardStyle1",
    image: sampleImg,
    name: "Name 1",
    position: "Position 1",
    discipline: "Discipline+Year 1",
    link1: "#",
    link2: "#"
  }}/>;

let myCards = [testingCard, testingCard, testingCard, testingCard];

let testingCard2 = 
  <Card card={{
    className: "teamPageCardStyle2",
    image: sampleImg,
    name: "Name 2",
    position: "Position 2",
    discipline: "Discipline+Year 2",
    link1: "#",
    link2: "#"
  }}/>

let myCards2 = [testingCard2, testingCard2, testingCard2, testingCard2, testingCard2];

let testingCard3 = 
  <Card card={{
    className: "teamPageCardStyle1",
    image: sampleImg,
    name: "Name 1",
    position: "Position 1",
    discipline: "Discipline+Year 1",
    link1: "#",
    link2: "#"
  }}/>;

let myCards3 = [testingCard3, testingCard3, testingCard3, testingCard3, ]

const index = () => {
  return (
    <div >
      <TeamPageBanner />
      <div className='ExecCardContainer'>
        <div className='CurrentExecutiveTitleWrapper'>
          <h1>Current Executive Members</h1>
        </div>
        <div className='CardGridContainer'>
          <CardGrid cards={myCards}/>
        </div>
      </div>
      <div className='GeneralCardContainer'>
        <div className='GeneralTitleWrapper'>
          <h1>General Members</h1>
        </div>
        <div className='CardGridContainer'>
          <CardGrid cards={myCards2} />
        </div>
      </div>
      <div className='FormerCardContainer'>
        <div className='FormerTitleWrapper'>
          <h1>Former Executive Members</h1>
        </div>
        <div className='CardGridContainer'>
          <CardGrid cards={myCards3} />
        </div>
      </div>
    </div>
  );
};

export default index;
