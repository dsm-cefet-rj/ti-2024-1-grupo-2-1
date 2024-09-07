import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./style.css";
import { useState } from "react";
/** 
 * @module Componente/Input_Usuario
 *  */

/** 
 * @typedef InputUsuario
 * @type {React.FC}
*/

/** 
 * Renderiza um input personalizado para atividades do usuário 
 * @param {string} valor - O valor que o input adquire
 * @param {string} type - Tipo do input
 * @param {string} value - O valor que o input adquire
 * @param {Function} onChange - Função que muda o valor do input a cada iteração
 * @param {string} label - Texto que server como placeholder
 * @param {string} error - Mostrará uma mensagem de erro, caso haja um.
 * @returns {React.FC} O componente renderizado.
*/
const InputUsuario = ({
  isLogin,
  valor,
  type,
  value,
  onChange,
  label,
  error,
  id,
  history,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    isLogin ?
    <>
      <div className="wrap-input-user">
        <input
          className={`${valor !== "" ? "has-val input-user" : "input-user"}`}
          type={
            type && type === "password"
              ? showPassword
                ? "text"
                : "password"
              : type
          }
          value={value}
          onChange={onChange}
          id={id}
        />
        <span className="focus-input-user" data-placeholder={label}></span>
        {type === "password" && (
          <span className="olho" onClick={togglePasswordVisibility}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        )}
      </div>
      <label className="erro">{error}</label>
    </>
    :
    
        <div className={`${history? "hasHistoryBox" : "inputBox"}`}>
         { history? 
         <textarea type="text" required="required" 
            value={value}
            onChange={onChange}
            id={id}
            rows={10}
            /> 
            :
         <input type="text" required="required" 
            value={value}
            onChange={onChange}
            id={id}
            />}
            <span>{label}</span>
          <label className="erro-box">{error}</label>
        </div>
  
  
  );
};

export default InputUsuario