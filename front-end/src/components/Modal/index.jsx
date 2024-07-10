import React from 'react'
import { MdOutlineCancel } from 'react-icons/md';
import { VscClose } from "react-icons/vsc";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import "./styles.css"

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
