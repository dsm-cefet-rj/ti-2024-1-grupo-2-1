import React from 'react'
import "./style.css"
const Grade = (props) => {
  return (
    <div className='card-container'>
      {props.children}
    </div>
  )
}

export default Grade
