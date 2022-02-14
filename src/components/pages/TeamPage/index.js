import React from 'react';
import TeamPageBanner from '../Banner/TeamPageBanner';
import CardGrid from './CardGrid';

const index = () => {
  return (
    <div>
      <TeamPageBanner />
      <div className='ExecCardContainer'>
        <div className='CurrentExecutiveTitleWrapper'>

        </div>
        <div className='CardGridContainer'>
          <CardGrid />
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
