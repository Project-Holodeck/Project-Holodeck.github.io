import React from 'react';

//TopSec Folder
import TopSec from './TopSec/TopSec.js';
import './TopSec/TopSec.css';
//MidSec Folder
import MidSec from './MidSec/MidSec.js';
import './MidSec/MidSec.css';

import ProjectSection from './projectSection.js';
import Footer from '../../Footer/Footer.js';

//Media or Image Files
import VrClipArt from './images/vr.png';
import LeapHands from './images/leaphands.jpeg';

import './frontPage.css';

//TODO: needed to move Footer outside of main to fix resizing issues, but this has caused a new issue with the linear gradient background...need to fix this.
const FrontPage = () => {
    return (
        <>
            <main style={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                <TopSec />
                <MidSec />
                <ProjectSection />
            </main>
        </>
    );
};

const TopSecContent = () => {
    //See TopSec.css for id styling and usage
    return (
        <header>
            <div id="frontTopSec-header">
                <p id="frontTopSec-header-first">
                    <span id="frontTopSecTopSec-header-one">PROJECT</span>
                </p>
                <p id="frontTopSec-header-second">
                    <span id="frontTopSec-header-two">HOLODECK</span>
                </p>
            </div>
            <div id="frontTopSec-header-bottom">
                <figure id="frontTopSec-header-fig">
                    <img src={VrClipArt} alt="" />
                </figure>
                <div id="frontTopSec-message">
                    <hr id="frontTopSec-hr-one"></hr>
                    <p id="frontTopSec-header-message">
                        A design team for
                        <br /> Virtual Reality
                        <span style={{ color: '#4599FE', fontWeight: 900 }}> 「VR」 </span>
                        and <br />
                        Augmented Reality
                        <span style={{ color: '#265792', fontWeight: 900 }}> 「AR」 </span>
                    </p>
                    <hr id="frontTopSec-hr-two"></hr>
                </div>
            </div>
        </header>
    );
};
const TopSecFigure = () => {
    //See TopSec.css for id styling and usage
    return <></>;
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
                <h1 id="frontMidAbout">「About</h1>
                <h1 id="frontMidSecUTOPH">UTOPH」</h1>
                <p>
                    If Signor Leonato be her father, she would not have his head on her shoulders for all Messina, as like him as she is. I wonder that you will
                    still be talking, Signor Benedick. Nobody marks you. What, my dear Lady Disdain!
                    <br />
                    <br />
                    Are you yet living? Is it possible disdain should die while she hath such meet food to feed it as Signor Benedick? Courtesy itself must
                    convert to disdain if you come in her presence. Much Ado About Nothing I.iv.
                </p>
            </section>
        </article>
    );
};
export { FrontPage, TopSecContent, TopSecFigure, MidSecContent };
