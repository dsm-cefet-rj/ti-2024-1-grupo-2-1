import React from "react";
import { FaEye, FaEyeSlash  } from "react-icons/fa";
import "./style.css";
import { useState } from "react";

export const InputUsuario = (
  { valor, type, value, onChange, label, error }
) => {

    const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div className="wrap-input-user">
      <input
        className={`${valor !== "" ? "has-val input-user" : "input-user"}`}
        type={type && type === "password" ?( showPassword? 'text'  : 'password'):(type) }
        value={value}
        onChange={onChange}
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
  );
};
