import React from 'react';
import "./style.css";

export const Grade = (props) => {
  return (
    <div className='card-container'>
      {props.children}
    </div>
  )
}
