import React from 'react'
import "./styles.css"

const SelectInput = ({ name, value, items, onChange}) => {
  return (
    <div style={{display:"flex", width:"100%",marginTop:"3%"}}>
    <select value = {value}className="select_input"onChange={onChange}>
      {console.log(value)}
        {items.map((item)=>(
            <option 
                id={name+item.value}
                name={name}
                value={item.value}>{item.label}</option>
        ))}

    </select>
    </div>
  )
}

export default SelectInput
