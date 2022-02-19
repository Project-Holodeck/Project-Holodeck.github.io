import React from "react";
import TeamPageBanner from "../Banner/Banner";
import BannerInfo from "../Banner/BannerInfo.js";
import CardGrid from "./CardGrid";
import Card from "./card";
import { CurrentExecInfo } from "./teamInfo";
import "./index.css";

let sampleImg =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAAC" +
  "UFjqAAAADUlEQVQY02NgGAWkAwABNgABGtWNFwAAAABJRU5ErkJggg==";

const currentExecCards = CurrentExecInfo.map((memberData) => {
   return (
      <Card 
        card = {{
          className: "teamPageCardStyle1",
          image: memberData.image,
          name: memberData.name,
          position: memberData.position,
          discipline: memberData.discipline,
          link1: "#",
          link2: "#",
        }}
      />
   );
});

let testingCard2 = (
  <Card
    card={{
      className: "teamPageCardStyle2",
      image: sampleImg,
      name: "Name 2",
      position: "Position 2",
      discipline: "Discipline+Year 2",
      link1: "#",
      link2: "#",
    }}
  />
);

let myCards2 = [
  testingCard2,
  testingCard2,
  testingCard2,
  testingCard2,
  testingCard2,
];

let testingCard3 = (
  <Card
    card={{
      className: "teamPageCardStyle1",
      image: sampleImg,
      name: "Name 1",
      position: "Position 1",
      discipline: "Discipline+Year 1",
      link1: "#",
      link2: "#",
    }}
  />
);

let myCards3 = [testingCard3, testingCard3, testingCard3, testingCard3];

const index = () => {
  return (
    <div className="teamPage">
      <TeamPageBanner banner={BannerInfo[1]} />
      <div className="ExecCardContainer" id="ExecDiv">
        <div className="CurrentExecutiveTitleWrapper">
          <p className="BlackHeader">
            <arrow>⌜</arrow>Current Executive Members<arrow>⌟</arrow>
          </p>
        </div>
        <div className="CardGridContainer">
          <CardGrid cards={currentExecCards} />
        </div>
      </div>
      <div style={{ height: "150px", overflow: "hidden" }}>
        {/* An svg with a gradient applied */}
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: "150px", overflow: "hidden", width: "100%" }}
        >
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" className="myStop1" />
              <stop offset="100%" className="myStop2" />
            </linearGradient>
          </defs>
          <path
            d="M-2.59,64.64 C233.29,196.88 321.33,-64.64 500.22,69.56 L500.00,150.00 L0.00,150.00 Z"
            fill="url(#grad1)"
          />
        </svg>
      </div>
      <div className="GeneralCardContainer" id="GeneralDiv">
        <div className="GeneralTitleWrapper">
          <p className="WhiteHeader">
            <arrow>⌜</arrow>General Members<arrow>⌟</arrow>
          </p>
        </div>
        <div className="CardGridContainer">
          <CardGrid cards={myCards2} />
        </div>
        <div
          style={{
            height: "150px",
            overflow: "hidden",
            background: "linear-gradient(0.25turn, #c5dfea, #a9d0eb, #a2b5f3)",
          }}
        >
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            style={{ height: "150px", overflow: "hidden", width: "100%" }}
          >
            <path
              d="M-2.59,64.64 C233.29,196.88 321.33,-64.64 500.22,69.56 L500.00,150.00 L0.00,150.00 Z"
              style={{ stroke: "none", fill: "white" }}
            />
          </svg>
        </div>
      </div>
      <div className="FormerCardContainer" id="FormerDiv">
        <div className="FormerTitleWrapper">
          <p className="BlackHeader">
            <arrow>⌜</arrow>Former Executive Members<arrow>⌟</arrow>
          </p>
        </div>
        <div className="CardGridContainer">
          <CardGrid cards={myCards3} />
        </div>
      </div>
    </div>
  );
};

export default index;
