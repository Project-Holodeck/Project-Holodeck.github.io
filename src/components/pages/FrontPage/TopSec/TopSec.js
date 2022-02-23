import React from 'react';
import { TopSecContent, TopSecFigure } from '../index.js';
const TopSec = () => {
    return (
        <section id="frontTopSec-container">
            <div id="frontTopSec-gradient">
                <div id="frontTopSec-gradient-content">
                    <TopSecContent />
                    <TopSecFigure />
                </div>
                <div id="frontTopSec-gradient-container">
                    <svg viewBox={`0 0 500 325`} preserveAspectRatio="xMinYMin meet" id="frontBotSec-gradient-curve">
                        <defs>
                            <linearGradient id="frontTopGrad" gradientTransform="rotate(-20)">
                                <stop offset="0%" stop-color="#c5dfea" />
                                <stop offset="15%" stop-color="#a9d0eb" />
                                <stop offset="45%" stop-color="#a2b5f3" />
                            </linearGradient>
                        </defs>
                        <path fill="url(#frontTopGrad)" d={`M0,225 C200,325 300,175 500,225 L500,00 L0,0 Z`} style={{ stroke: 'none' }} />
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default TopSec;
