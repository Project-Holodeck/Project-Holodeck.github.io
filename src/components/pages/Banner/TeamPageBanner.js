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
                <div className='linkContainer'>
                    <div className='CurrentExecLink'>
                        <p>[<a href='#ExecDiv'>Executives</a>]</p>
                    </div>
                    <div className='GeneralLink'>
                        <p>[<a href='#GeneralDiv'>Members</a>]</p>
                    </div>
                    <div className='FormerExecLink'>
                        <p>[<a href='#FormerDiv'>Former Executives</a>]</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default TeamPageBanner;