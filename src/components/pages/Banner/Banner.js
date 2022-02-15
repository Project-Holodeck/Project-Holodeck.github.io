import React from "react";
import "./Banner.css";

// This banner will have a straight border instead of a wavy one
const TeamPageBanner = ({ banner }) => {
  return (
    <div className="Banner">
      <div className="TitleWrapper">
        <p className="Header">
          <arrow>⌜</arrow>Our<x> {banner.title}</x>
          <arrow>⌟</arrow>
        </p>
      </div>
      <div className="BlurbWrapper">
        <p>{banner.blurb}</p>
      </div>
    </div>
  );
};

export default TeamPageBanner;
