import React from 'react'
import "./style.css"
const Grid = (props) => {
  return (
    <div className='card-container'>
      {props.children}
    </div>
  )
}

export default Grid
