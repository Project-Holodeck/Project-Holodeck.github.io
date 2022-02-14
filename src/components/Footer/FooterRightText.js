import React from 'react'

const FooterRightText = ({ text, image}) => {
  return (
    <div className="footerRightTextLine">
        <img src={image} alt=""/>
        <p>{text}</p>
    </div>
  )
}

export default FooterRightText