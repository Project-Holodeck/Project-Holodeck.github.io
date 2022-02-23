import React from 'react';
import { BotSecContent, FooterContent } from '../index.js';
const BotSec = () => {
    return (
        <section id="frontBotSec-container">
            <div id="frontBotSec-gradient">
                <div id="frontBotSec-gradient-content">
                    <BotSecContent />
                    <FooterContent />
                </div>
                <div id="frontBotSec-gradient-container">
                    <svg viewBox={`0 0 500 325`} preserveAspectRatio="xMinYMin meet" id="frontBotSec-gradient-curve">
                        <defs>
                            <linearGradient id="frontBotGrad" gradientTransform="rotate(20)">
                                <stop offset="0%" stop-color="#c5dfea" />
                                <stop offset="30%" stop-color="#a9d0eb" />
                                <stop offset="55%" stop-color="#a2b5f3" />
                            </linearGradient>
                        </defs>
                        <path fill="url(#frontBotGrad)" d={`M0,225 C200,325 300,175 500,225 L500,00 L0,0 Z`} style={{ stroke: 'none' }} />
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default BotSec;
