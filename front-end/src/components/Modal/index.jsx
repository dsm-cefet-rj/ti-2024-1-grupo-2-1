import React from 'react'
import { MdOutlineCancel } from 'react-icons/md';
import { VscClose } from "react-icons/vsc";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import "./styles.css"
/** 
 * @module Componente/Modal
 *  */

/** 
 * @typedef Modal
 * @type {React.FC}
*/

/** 
 * Renderiza um modal para que haja exclusão de objetos
 * @param {boolean} visivel - Indica se o modal está ativo ou não.
 * @param {Function} close - Função para fechar o modal
 * @param {Function} onClick - Função para excluir o objeto.
 * @param {string} text - Texto que fica dentro do modal.
 * @param {string} labelButton - Texto do botão
 * @returns {React.FC} O componente renderizado.
*/
const Modal = ({visivel, close, onClick, text, labelButton}) => {

  return (
    <div className={`div_modal ${visivel && 'ativo'}`}>
        <div className="modalContainer">
            <div className="modalContent">
                <VscClose className="close-modal"onClick={close}/>
                <text className='modal-Text'>{text}</text>
                <div className="modal_btn">
                    <button  className='delete-Botao'
                    onClick={ ()=>{
                      onClick()
                      close()
                    }
                    }
                    >{labelButton}<FaTrash/></button>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Modal
