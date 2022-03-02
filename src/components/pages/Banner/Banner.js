import React from "react";
import "./Banner.css";

// This banner will have a straight border instead of a wavy one
const TeamPageBanner = ({ banner }) => {
  return (
    <div className="Banner">
      <div className="TitleWrapper">
        <p className="Header">
          Our<x> {banner.title}</x>
        </p>
      </div>
      <div className="BlurbWrapper">
        <hr id="frontTopSec-hr-one"></hr>
        <p>{banner.blurb}</p>
        <hr id="frontTopSec-hr-two"></hr>
      </div>
    </div>
  );
};

export default TeamPageBanner;
