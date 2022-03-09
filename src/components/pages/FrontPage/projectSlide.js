import React from 'react';
import { projectSlideInfo } from './projectSlideInfo.js';

const projectSlide = ({ image, text, projectNum }) => {
    return (
        <>
            <div className="frontPageProjectSectionProjectImage">
                <img src={image} alt="" />

                <div className="frontPageProjectSectionProjectSelection">
                    {projectSlideInfo.map((project) => {
                        return project.id === projectNum ? (
                            <svg width="4vw">
                                <circle cx="2vw" cy="2vw" r="1vw" stroke="white" stroke-width="0.25vw" fill="rgb(0, 0, 0, 0)" />
                                <circle cx="2vw" cy="2vw" r="0.75vw" fill="white" />
                            </svg>
                        ) : (
                            <svg width="4vw">
                                <circle cx="2vw" cy="2vw" r="0.75vw" stroke="white" stroke-width="0.25vw" fill="rgb(0, 0, 0, 0)" />
                            </svg>
                        );
                    })}
                </div>
            </div>
            <div className="frontPageProjectSectionProjectText">{text}</div>
        </>
    );
};

export default projectSlide;
