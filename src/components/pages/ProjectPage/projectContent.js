import React from 'react';
import './index.css';

const projectContent = ({ project, imgSrc }) => {
  console.log(imgSrc)
  return (
    <div>
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
    </div>
  );
};

export default projectContent;
