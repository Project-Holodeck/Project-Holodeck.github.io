import React from 'react';
import './teamPage.css';
import Container from './Container.js';
import MemberCard from './MemberCard.js';
import ExecutiveCard from './ExecutiveCard.js';
import { ExecutiveCardInfo } from './ExecutiveCardInfo.js';
import { MemberCardInfo } from './MemberCardInfo.js';
import { FormerExecutiveCardInfo } from './FormerExecutiveCardInfo.js';

const index = () => {
  return <>
      <div className="teamPageHeaderContainer">
        <h1>
          Meet The Project 
        </h1>
        <h1 style={{position: 'relative', marginTop: -60}}>
          Holodeck Team
        </h1>
      </div>
      <div className="teamPageCategoriesContainer">
        <Container cards={<ExecutiveCard cardInfo={ExecutiveCardInfo}/>} title="Current Executive Members"/>

        <svg className="teamPageLine">
          <line x1="10%" y1="0" x2="90%" y2="0" className="teamPageLine"/>
        </svg>

        <Container cards={<MemberCard cardInfo={MemberCardInfo}/>} title="General Members"/>

        <svg className="teamPageLine">
          <line x1="10%" y1="0" x2="90%" y2="0" className="teamPageLine"/>
        </svg>

        <Container cards={<MemberCard cardInfo={FormerExecutiveCardInfo}/>} title="Former Executive Members"/>

      </div>


  </>;
};

export default index;
