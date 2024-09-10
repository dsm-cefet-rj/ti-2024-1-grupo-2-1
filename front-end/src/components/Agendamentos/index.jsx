import "./index.css";
import React, { useEffect, useState, useRef } from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteVisitation, getVisitations } from "../../redux/agendamento/slice";
import Modal from "../Modal";

/** 
 * @module Cards/Cards_de_Agendamento
 *  */

/** 
 * @typedef Agendamento
 * @type {React.FC}
 * @property {number} id - Identificador.
 * @property {string} data - Dia do agendamento
 * @property {string} hora - Horário do agendamento
*/

/** 
  Renderiza cards contendo informações de agendamentos realizados,juntamente com um botão de excluir.
 * @param {Object} infos - Objeto agendamento com informações do agendamento
  @returns {React.FC} O componente renderizado.
*/

const Agendamento = ({ infos }) => {
  const id = infos.id;
  const [visible, setVisible]=useState(false);
  const dispatch = useDispatch();
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

  const [infoOpen, setInfoOpen] = useState(false);

  const Delete = () => {
    // e.preventDefault();
    dispatch(deleteVisitation(id));
    dispatch(getVisitations());
  };
 let datas = infos.data
 datas = datas.split('-');
 datas = datas[2]+'/'+datas[1]+'/'+datas[0];
  return (
    <>
    <div className="cardagendamento-div">
      <div className="namoral">
        <div className="left-div">
          <h3>Data: {datas}</h3>
        </div>
        <div className="middle-div">
          <h3>Hora: {infos.hora}</h3>
        </div>
        <div className="right-div">
          <button
            className="btn-details"
            onClick={() => {
              setInfoOpen(!infoOpen);
            }}
            >
            DETALHES
          </button>
        </div>
        <button className="Agendamento_Cancel" ref={modalRef} onClick={()=>{setVisible(true)}}>
          <FaTrash className="agendamento_options"/>
        </button>
      </div>
        <ul className={`informacoes_Agendamentos ${infoOpen && 'ativo'}`}>
          <div className="la-line"></div>
          <p className="usuario">Nome do agendante: {infos.nome}</p>
          <p className="usuario">Contato: {infos.email}</p>
        </ul>
    </div>
        <Modal 
        visivel={visible}
        close={()=>{setVisible(false)}}
        onClick={Delete}
        text={"Deseja excluir esse agendamento?"}
        labelButton={`Excluir `}
        />
    </>
  );
};

export default Agendamento;
