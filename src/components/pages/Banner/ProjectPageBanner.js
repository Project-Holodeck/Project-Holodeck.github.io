import React from 'react';
import './ProjectPageBanner.css';
// This banner will have a straight border instead of a wavy one
const ProjectPageBanner = () => {
    return (
        <div className='ProjectPageBannercontainer'>
            <div className='box0'>
                <div className='box1'>
                    <p className='description'><arrow>⌜</arrow>Our<x> Projects</x><arrow>⌟</arrow></p>
                </div>
            </div>
            <div className='box2'>
                <div className='projectBorderContainerTop'>
                    <div className='projectBorder'></div>
                </div>
                <div className='box4'>
                    <p>Find out more about our projects we have done
                    </p>
                </div>
                <div className='projectBorderContainerBottom'>
                    <div className='projectBorder'></div>
                </div>
            </div>
        </div>
    );
}

export default ProjectPageBanner;