import React,{useEffect,useState} from 'react';
import "./styles.css";
import { Component } from 'react';
/** 
 * @module MessageReturn/Mensagem_De_Erro
 *  */

/** 
 * @typedef ErrorMessage
 * @type {React.FC}
*/

/** 
 * Renderiza cards contendo um erro sobre alguma falha cometida pelo usuário
 * @param {string} text - Informações do erro
 * @returns {React.FC} O componente renderizado.
*/

const ErrorMessage = ({text}) => {
    const [ativo, setAtivo] = useState(false);

    useEffect(() => {
      if (text != "") {
        setAtivo(true);
        setTimeout(() =>{ setAtivo(false)}, 2000); // Tempo de exibição da mensagem
      }
    }, [text]);
  
    return(
    <div className={`ErrorContainer ${ativo && 'ativo'}`}>
      <text className="ErrorText">{text}</text>
    </div>
  ) 
}

export default ErrorMessage
