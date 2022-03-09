import React from 'react';
import { useState } from 'react';
import ProjectSlide from './projectSlide.js';
import { projectSlideInfo } from './projectSlideInfo.js';

import Footer from '../../Footer/Footer.js';

const ProjectSection = () => {
    const [projectNum, setProjectNum] = useState(0);

    const projectSetNum = (left) => {
        let projectNumber = projectNum;

        left ? projectNumber-- : projectNumber++;

        if (projectNumber >= projectSlideInfo.length) projectNumber = 0;
        else if (projectNumber < 0) projectNumber = projectSlideInfo.length - 1;

        setProjectNum(projectNumber);
    };

    return (
        <div className="frontPageProjectSectionMainContainer">
            <div className="frontPageProjectSectionContainer">
                <p id="frontPageProjectSectionTitle">Our Projects</p>

                <div className="frontPageProjectSectionProjectContainer">
                    <div className="frontPageProjectSectionLeftArrow" onClick={() => projectSetNum(true)}>
                        <p>〈</p>
                    </div>
                    <div className="frontPageProjectSectionRightArrow" onClick={() => projectSetNum(false)}>
                        <p>〉</p>
                    </div>
                    <ProjectSlide image={projectSlideInfo[projectNum].image} text={projectSlideInfo[projectNum].text} projectNum={projectNum} />
                </div>

                <a className="frontPageProjectSectionReadMoreClick" href="/projects">
                    <div className="frontPageProjectSectionReadMore">
                        <button>
                            <span>Read More!</span>
                        </button>
                    </div>
                </a>
            </div>
            <Footer/>
        </div>
    );
};

export default ProjectSection;
