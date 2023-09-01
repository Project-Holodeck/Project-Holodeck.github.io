import React from "react";
import ProjectPageBanner from "../Banner/Banner.js";
import BannerInfo from "../Banner/BannerInfo.js";

import Tabs from "./Tabs.js";
import ProjectContent from "./projectContent";
import projectInfo from "./projectInfo";

import Footer from '../../Footer/Footer.js';

const index = () => {
  return (
    <>
      <ProjectPageBanner banner={BannerInfo[0]} />
      
      <Tabs>
        {projectInfo.map((project, index) => {
          return (
            <div key={index} label={project.title}>
              <ProjectContent project={project} imgSrc={project.image} />
            </div>
          )
        })}
      </Tabs>
      <Footer/>
    </>
  );
};

export default index;
