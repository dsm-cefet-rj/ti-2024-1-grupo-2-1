import React from 'react';
import "./style.css";
/**
 * @module Componente/TittlePage
 */

/**
 * @typedef TittlePage
 * @type {React.FC}
 */
/**
 * Componente React para exibir os Titulos de cada pagina da aplicação
 * @param {string} text - Representa o titulo da pagina.
 * @returns {React.FC} - Retorna um componente React
 */
const TitlePage = ({text}) => {
  return (
    <div className="title-container">
        <span className="title">{text}</span>
        <span className="sublinha"></span>
      </div>
  )
}

export default TitlePage
