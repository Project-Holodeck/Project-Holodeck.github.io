import React from 'react';
import Footer from '../../Footer/Footer.js';

const projectSection = () => {
    return (
        <div className="frontPageProjectSectionMainContainer">
            <div className="frontPageProjectSectionContainer">
                <h1 id="frontPageProjectSectionTitle">『Our Projects』</h1>

                <div className="frontPageProjectSectionProjectContainer"></div>
                <a className="frontPageProjectSectionReadMoreClick" href="/projects">
                    <div className="frontPageProjectSectionReadMore">
                        <button>
                            <span>Read More!</span>
                        </button>
                    </div>
                </a>
            </div>
            <Footer />
        </div>
    );
};

export default projectSection;
