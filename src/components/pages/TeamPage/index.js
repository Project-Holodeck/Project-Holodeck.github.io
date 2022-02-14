import React from 'react';
import TeamPageBanner from '../Banner/TeamPageBanner';
import CardGrid from './CardGrid';
import Card from './card';

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

let myCards = [testingCard, testingCard, testingCard];

const index = () => {
  return (
    <div>
      <TeamPageBanner />
      <div className='ExecCardContainer'>
        <div className='CurrentExecutiveTitleWrapper'>

        </div>
        <div className='CardGridContainer'>
          <CardGrid cards={myCards}/>
        </div>
      </div>
      <div className='GeneralCardContainer'>
        <div className='GeneralTitleWrapper'>

        </div>
        <div className='CardGridContainer'>
          
        </div>
      </div>
      <div className='FormerCardContainer'>
        <div className='FormerTitleWrapper'>

        </div>
        <div className='CardGridContainer'>
          
        </div>
      </div>
    </div>
  );
};

export default index;
