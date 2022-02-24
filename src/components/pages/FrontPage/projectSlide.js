import React from 'react'

const projectSlide = ({image, text, projectNum}) => {
  return (
    <>
        <div className="frontPageProjectSectionProjectImage">
            <img src={image} alt=""/>
            <div className="frontPageProjectSectionProjectSelection">

            </div>
        </div>
        <div className="frontPageProjectSectionProjectText">
            {text}
        </div>
    </>
  )
}

export default projectSlide;
