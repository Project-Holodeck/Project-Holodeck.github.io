import React from 'react';
import './index.css';
import project_info from './project_info';

import Banner from '../Banner/Banner';

import arcade from './images/arcade.jpg';
import leapmotion from './images/leapmotion.jpeg';
import roomscanner from './images/roomscanner.jpg';
import shoes from './images/shoes.jpg';
import treadmill from './images/treadmill.jpg';

const Project = ({ project, imgSrc }) => {
  return (
    <div className='projectContainer'>
      <div className='projectImageContainer'>
        <img className='projectImage' src={imgSrc} alt={project.name} />
      </div>
      <div className='projectDetailContainer'>
        <div className='projectBorderContainerTop'>
          <div className='projectBorder'></div>
        </div>

        <h3>About the {project.title.toLowerCase()} project</h3>
        <p>{project.description}</p>
        <p>Project Start Date: {project.start}</p>
        <p>Completion Date: {project.end}</p>
        <p>Project Members: {project.members}</p>

        <div className='projectBorderContainerBottom'>
          <div className='projectBorder'></div>
        </div>
      </div>
    </div>
  );
};

const index = () => {
  const project = project_info[0];

  return (
    <div>
      <Banner />
      <Project project={project} imgSrc={roomscanner} />
    </div>
  );
};

export default index;
