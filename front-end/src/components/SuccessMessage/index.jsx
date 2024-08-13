import React,{useState, useEffect, Component } from 'react';
import "./styles.css";
/** 
 * @module Componente/Mensagem_De_Sucesso
 *  */

/** 
 * @typedef SuccessMessage
 * @type {Component}
*/

/** 
 * Renderiza card contendo uma menssagem indicando que a ação realizada pelo usuário foi concluida com sucesso
 * @param {string} text - Informações da ação bem sucedida
*/

const SuccessMessage = ({text}) => {
  const [ativo, setAtivo] = useState(false);

    useEffect(() => {
      if (text != "") {
        setAtivo(true);
        setTimeout(() =>{ setAtivo(false)}, 1000); // Tempo de exibição da mensagem
      }
    }, [text]);
  
    return (
    <div className={`SuccessContainer ${ativo && 'ativo'}`}>
      <text className="SuccessText">{text}</text>
    </div>
  )
}


export default SuccessMessage