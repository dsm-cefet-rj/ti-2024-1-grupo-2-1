import React from "react";
import "./styles.css";


const RadioInput = ({name, items, value, onChange}) => {
  return (
    <>
      {items.map((item) => (
        <div style={{display:"flex"}}key={item.value}>
          <label className="radio-btn">
          <input
            className="radio"
            type="radio"
            id={name + item.value}
            name={name}
            value={item.value}
            checked={value === item.value}
            onChange={onChange}
          />
          <span className="checkmark"/>
          </label>
          <label for={name + item.value} className="label-radioBTN">{item.label}</label>
        </div>
      ))}
    </>
  );
};

export default RadioInput;
