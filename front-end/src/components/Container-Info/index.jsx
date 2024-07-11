import React, { Component } from 'react'
import "./styles.css"
/** 
 * @module ComponenteInformacao/ContainerInfo
 *  */

/** 
 * @typedef ContainerInfo
 * @type {React.FC}
*/

/** 
 * Renderiza uma linha com informações do pedido de adoção
 * @param {string} label  - Uma legenda da primeira informação 
 * @param {string} label2 - Uma legenda da segunda informação 
 * @param {string} info  - Informações que será apresentada
 * @param {string} info2  - Informações que será apresentada
 * @returns {React.FC} O componente renderizado.
*/

const ContainerInfo = ({label, label2, info, info2}) => {
  return (
    <div className='container-Info'>
        <div className="infor-esq">
            <p className='label'>{label}</p>
            <p className='informacao'>{info}</p>
        </div>
        <div className="infor-dir">
        <p className='label'>{label2}</p>
        <p className='informacao'>{info2}</p>
        </div>
      
    </div>
  )
}

export default ContainerInfo
