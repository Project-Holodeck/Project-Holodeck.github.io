import React from 'react'

const projectSlide = ({image, text}) => {
  return (
    <>
        <div className="frontPageProjectSectionProjectImage">
            <img src={image} alt=""/>
        </div>
        <div className="frontPageProjectSectionProjectText">
            {text}
        </div>
    </>
  )
}

export default projectSlide;
