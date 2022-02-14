import React from 'react';
import './TeamPageBanner.css';

// This banner will have a straight border instead of a wavy one
const TeamPageBanner = () => {
    return (
        <div className='TeamPageBanner'>
            <div className='TeamPageTitleWrapper'>
                <p className='ourTeamHeader'><arrow>⌜</arrow>Our<x> Team</x><arrow>⌟</arrow></p>
            </div>
        </div>
    );
}

export default TeamPageBanner;