import React from 'react';

import Banner from '../Banner/Banner';
import projectInfo from './projectInfo';
import arcade from './images/arcade.jpg';
import leapmotion from './images/leapmotion.jpeg';
import roomscanner from './images/roomscanner.jpg';
import shoes from './images/shoes.jpg';
import treadmill from './images/treadmill.jpg';
import ProjectContent from './projectContent';


const index = () => {
  return (
    <>
      <Banner />
      <ProjectContent project={projectInfo[0]} imgSrc={treadmill} />
      <ProjectContent project={projectInfo[1]} imgSrc={arcade} />
      <ProjectContent project={projectInfo[2]} imgSrc={shoes} />
      <ProjectContent project={projectInfo[3]} imgSrc={roomscanner} />
      <ProjectContent project={projectInfo[4]} imgSrc={leapmotion} />

    </>
  );
};

export default index;
