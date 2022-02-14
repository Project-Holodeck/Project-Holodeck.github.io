import React from 'react';
import Card from './card';
import './CardGrid.css';

let sampleImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAAC"
              + "UFjqAAAADUlEQVQY02NgGAWkAwABNgABGtWNFwAAAABJRU5ErkJggg==";

let testingCard = 
    <Card card={{
        className: "teamPageCardStyle1",
        image: sampleImg,
        name: "Name 1",
        position: "Position 1",
        discipline: "Discipline+Year 1",
        link1: "#",
        link2: "#"
    }}/>;

const CardGrid = () => {
    return (
        <div className='CardGrid'>
            {testingCard}
            {testingCard}
            {testingCard}
        </div>
    );
}

export default CardGrid;