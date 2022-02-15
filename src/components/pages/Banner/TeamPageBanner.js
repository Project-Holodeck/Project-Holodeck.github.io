import React from 'react';
import './TeamPageBanner.css';
import './ProjectPageBanner.css';

// This banner will have a straight border instead of a wavy one
const TeamPageBanner = () => {
    return (
        <div className='TeamPageBanner'>
            <div className='box0'>
                <div className='box1'>
                    <p className='ourTeamHeader'><arrow>⌜</arrow>Our<x> Team</x><arrow>⌟</arrow></p>
                </div>
            </div>
            <div className='box2'>
                <div className='projectBorderContainerTop'>
                    <div className='projectBorder'></div>
                </div>
                <div className='box4'>
                    <p>Wondering who makes up our design team? <br />
                    Read here to learn about our...</p>
                </div>
                <div className='projectBorderContainerBottom'>
                    <div className='projectBorder'></div>
                </div>
            </div>
        </div>
    );
}

export default TeamPageBanner;