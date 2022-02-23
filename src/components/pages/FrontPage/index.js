import React from 'react';

//TopSec Folder
import TopSec from './TopSec/TopSec.js';
import './TopSec/TopSec.css';
//MidSec Folder
import MidSec from './MidSec/MidSec.js';
import './MidSec/MidSec.css';

//Media or Image Files
import VrClipArt from './images/vr.png';
import LeapHands from './images/leaphands.jpeg';

import ProjectSection from './projectSection.js';

import './frontPage.css';

const FrontPage = () => {
    return (
        <main>
            <TopSec />
            <MidSec />
            <ProjectSection />
        </main>
    );
};

const TopSecContent = () => {
    //See TopSec.css for id styling and usage
    return (
        <header id="frontTopSec-header">
            <p>
                『<span id="frontTopSecTopSec-header-one">PROJECT</span>
            </p>
            <p id="frontTopSec-header-second">
                <span id="frontTopSec-header-two">HOLODECK</span>』
            </p>
            <div id="frontTop-header-div">
                <hr id="frontTopSec-hr-one"></hr>
                <p id="frontTopSec-header-message">A Design Team for Virtual Reality [VR] and Augmented Reality [AR]</p>
                <hr id="frontTopSec-hr-two"></hr>
            </div>
        </header>
    );
};
const TopSecFigure = () => {
    //See TopSec.css for id styling and usage
    return (
        <figure id="frontTopSec-header-fig">
            <img src={VrClipArt} alt="" />
        </figure>
    );
};
const MidSecContent = () => {
    let vw = 0.01 * window.innerWidth;
    let imgWidth = 15 * vw;

    //See MidSec.css for id styling and usage
    return (
        <article id="frontMidSecArticle">
            <div id="frontMidSec">
                <figure id="coloredDiv"></figure>
                <figure id="imgDiv">
                    <img src={LeapHands} alt="Failed to Load. See Leap Arcade for More Details!" width={`${imgWidth}`} />
                </figure>
            </div>
            <section>
                <h1>Hi</h1>
                <p>
                    If Signor Leonato be her father, she would not have his head on her shoulders for all Messina, as like him as she is. I wonder that you will
                    still be talking, Signor Benedick. Nobody marks you. What, my dear Lady Disdain! Are you yet living? Is it possible disdain should die while
                    she hath such meet food to feed it as Signor Benedick? Courtesy itself must convert to disdain if you come in her presence. Much Ado About
                    Nothing I.iv.
                </p>
            </section>
        </article>
    );
};
export { FrontPage, TopSecContent, TopSecFigure, MidSecContent };
