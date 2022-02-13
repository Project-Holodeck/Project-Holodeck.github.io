// rename to index.js to run (or import in index.js)
import React from 'react';

import Card from './card.js'
import './card.css'

let sampleImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAAC"
              + "UFjqAAAADUlEQVQY02NgGAWkAwABNgABGtWNFwAAAABJRU5ErkJggg==";
const index = () => {
  return <div style={{display: "flex", gap: "100px", padding: "100px",
                      backgroundColor: "black"}}>
    <Card card={{
      className: "teamPageCardStyle1",
      image: sampleImg,
      name: "Name 1",
      position: "Position 1",
      discipline: "Discipline+Year 1",
      link1: "#",
      link2: "#"
    }}/>
    <Card card={{
      className: "teamPageCardStyle2",
      image: sampleImg,
      name: "Name 2",
      position: "Position 2",
      discipline: "Discipline+Year 2",
      link1: "#",
      link2: "#"
    }}/>
  </div>;
};


export default index;
