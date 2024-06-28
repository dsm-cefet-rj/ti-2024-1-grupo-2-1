import React from 'react';
import "./style.css";

const TitlePage = ({text}) => {
  return (
    <div className="title-container">
        <span className="title">{text}</span>
        <span className="sublinha"></span>
      </div>
  )
}

export default TitlePage
