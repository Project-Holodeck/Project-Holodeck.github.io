import React from 'react';

const WaveTransition = (svgPath) => {
    return (
        <div style={{height: "150px", overflow: 'hidden'}}>
            <svg viewBox='0 0 500 150' preserveAspectRatio='none' style={{height: '150px', overflow: 'hidden'}}>
                <path d={svgPath} style={{stroke: 'none', fill: 'white'}}/>
            </svg>
        </div>
    );
}