import React from 'react';

//TopSec Folder
import TopSec from './TopSec/TopSec.js';
import './TopSec/TopSec.css';
//MidSec Folder
import MidSec from './MidSec/MidSec.js';
import './MidSec/MidSec.css';
//BotSec Folder
import BotSec from './BotSec/BotSec.js';
import './BotSec/BotSec.css';

//Media or Image Files
import VrClipArt from './images/vr.png';
import LeapHands from './images/leaphands.jpeg';
import Slideshow from './Slideshow.js';

const FrontPage = () => {
    //TODO: Change the CSS of id="frontTop-header" section to be MORE RESPONSIVE. Namely, fix the layout for mobile
    return (
        <main>
            <TopSec />
            <MidSec />
            <BotSec />
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
    let vw = 0.01 * window.innerWidth; //by css definition
    let imgWidth = 20 * vw;
    //See TopSec.css for id styling and usage
    return (
        <figure id="frontTopSec-header-fig">
            <img src={VrClipArt} alt="" width={`${imgWidth}`} />
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
const BotSecContent = () => {
    //See BotSec.css for id styling and usage
    return (
        <aside>
            <p>Botsec Here</p>

            <Slideshow />
        </aside>
    );
};
const FooterContent = () => {
    //See BotSec.css for id styling and usage
    return (
        <footer>
            <p>footer Here</p>
        </footer>
    );
};
export { FrontPage, TopSecContent, TopSecFigure, MidSecContent, BotSecContent, FooterContent };
