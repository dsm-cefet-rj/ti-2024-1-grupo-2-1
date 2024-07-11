import React from "react";
import "./styles.css";
/**
 * @module Componente/RadioInput
 */

/**
 * @typedef RadioInput
 * @type {React.FC}
 */
/**
 * Componente React para exibir inputs do tipo button radio
 * @param {string} name - o texto que serve como opção
 * @param {Array} items - Array que contem a quantidade de opções
 * @param {string} value - Indica o valor do input.
 * @param {Function} onChange - Função que altera o valor do input.
 * @returns {React.FC} - Retorna um componente React
 */

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
