import "./index.css";
import { React, useState, useRef, useEffect } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteRequest } from "../../redux/pedidoAdocao/slice";
import { getRegisters } from "../../redux/pedidoAdocao/slice";
import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import Modal from "../Modal";

/**
 * @module Componente/Card_PedidoAdocao
 */

/**
 * @typedef PedidoAdocao
 * @type {React.FC}
 * @property {number}id - Identificador do pedido de adoção.
 * @property {string}nome - Nome do animal a ser adotado.
 * @property {URL}foto - URL da foto do animal a ser adotado.
 * @property {string}descricao - Descrição do animal a ser adotado.
 * @property {string}situacao - Situação do pedido de adoção (pendente, aprovado, recusado).
 *
 */
/**
 * Componente React para exibir informações de um pedido de adoção e permitir a exclusão do pedido(somente admin).
 * @param {object} pedido - O objeto que contem as informações
 * @returns {React.FC} - Retorna um componente React
 */

const PedidoAdocao = ({ pedido }) => {
  const id = pedido.id;
  console.log(id);
  const dispatch = useDispatch();
  const  navigate = useNavigate(); 

  const [visible, setVisible]=useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    // Adiciona um ouvinte de evento de clique ao documento inteiro
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        // Clique fora do botão de perfil, então ele é escondido
        setVisible(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    // Limpa o ouvinte de evento quando o componente de mostrar perfil é desmontado
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/verificando_pedido/${id}`);
    {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const Delete = () => {
    // e.preventDefault();
    dispatch(deleteRequest(id));
    dispatch(getRegisters());
  };
  return (
    <>
    <div className="cardadocao-main-div">
      <div className="left-side-div">
        <h3>Adotante: {pedido.nomeAdotante}</h3>
        <h3>Nome animal: {pedido.nomeAnimal}</h3>
      </div>
      <div className="right-side-div">
        
        <button id="btn-verify" onClick={handleClick}>
          DETALHES
        </button>
        {
          pedido.status == "pending" ?(
            <span className="status_pedido">
            status: NÃO VERIFICADO
          </span>
        ):(
          pedido.status == "approved" ?(
            <span className="status_pedido">
            status: <span style={{color:"green"}}>APROVADO</span>
          </span>

):(
  <span className="status_pedido">
           status: <span style={{color:"red"}}>NEGADO</span>
          </span>
        ))
      }
      </div>
      <FaTrash className="Pedido_Cancel" onClick={()=>{setVisible(true)}} />
    </div>
      <Modal 
        visivel={visible}
        close={()=>{setVisible(false)}}
        onClick={Delete}
        text={"Deseja excluir esse pedido?"}
        labelButton={`Excluir `}
        />
      </>
  );
};

export default PedidoAdocao;
