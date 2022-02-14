import React from "react";
import { useState } from "react";
import "./Tabs.css";
import projectInfo from "./projectInfo";
import arcade from "./images/arcade.jpg";
import leapmotion from "./images/leapmotion.jpeg";
import roomscanner from "./images/roomscanner.jpg";
import shoes from "./images/shoes.jpg";
import treadmill from "./images/treadmill.jpg";
import ProjectContent from "./projectContent";

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);
  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };
  return (
    <div className="container">
      <ul className="tabs">
        {children.map((tab) => {
          const label = tab.props.label;
          return (
            <li className={label == activeTab ? "current" : ""} key={label}>
              <a href="#" onClick={(e) => handleClick(e, label)}>
                {label}
              </a>
            </li>
          );
        })}
      </ul>
      {children.map((one) => {
        if (one.props.label == activeTab)
          return (
            <div key={one.props.label} className="content">
              {one.props.children}
            </div>
          );
      })}
    </div>
  );
};

export default Tabs;
