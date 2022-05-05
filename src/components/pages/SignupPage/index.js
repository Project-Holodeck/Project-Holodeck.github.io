import * as React from 'react';
import './signUp.css';
import Footer from '../../Footer/Footer.js';
import { useEffect } from 'react';

export default function App() {
  //TODO: Fix eventListeners
  //I tried to fix scrolling with event listeners, but they are not working properly. if it is not a huge deal, it is better to simply remove these event listeners altogether.

    return (
        <>
            <main>
                <div className="signUp-container">
                    <div className="signUp-gradient">
                        <div class="signUp-gradient-content">
                            <div id="signUp-header">
                                <p>
                                    <span id="signUp-header-one">DESIGN TEAM</span>
                                </p>
                                <p id="signUp-header-second">
                                    <span id="signUp-header-two">SIGN UP</span>
                                </p>
                                <div id="signUp-header-message-box">
                                    <hr id="signUp-hr-one"></hr>
                                    <p id="signUp-header-message">
                                        If you'd like to join our club, feel free to contact us here.
                                        <br /> We look forward to hearing from you!
                                    </p>
                                    <hr id="signUp-hr-two"></hr>
                                </div>
                            </div>
                        </div>
                        <div className="signUp-gradient-container">
                            <svg viewBox="0 0 500 250" preserveAspectRatio="xMinYMin meet" id="signUp-gradient-curve">
                                <defs>
                                    <linearGradient id="gradient" gradientTransform="rotate(-20)">
                                        <stop offset="0%" stop-color="#c5dfea" />
                                        <stop offset="15%" stop-color="#a9d0eb" />
                                        <stop offset="45%" stop-color="#a2b5f3" />
                                    </linearGradient>
                                </defs>
                                <path fill="url(#gradient)" d="M0,150 C200,100 300,250 500,150 L500,00 L0,0 Z" style={{ stroke: 'none' }} />
                            </svg>
                        </div>
                    </div>
                    <div>
                        <p>If the form below does not work, click <a style={{fontWeight: 'bold'}} href="https://docs.google.com/forms/u/0/d/e/1FAIpQLScenISOijNdX7NOdIK_biXc_xRmeWiwWkob5khDIwO43CpUEQ/formResponse?embedded=true" target="_blank">here</a> instead! </p>
                    </div>
                    <section className="signUp-form" style={{minHeight: 1.4*window.innerHeight}}>
                        <iframe
                            src="https://docs.google.com/forms/u/0/d/e/1FAIpQLScenISOijNdX7NOdIK_biXc_xRmeWiwWkob5khDIwO43CpUEQ/formResponse?embedded=true"
                            scrolling="no"
                        >
                            iframe not supported!
                        </iframe>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}
