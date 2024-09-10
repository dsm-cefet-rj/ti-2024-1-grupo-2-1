import "./index.css";
import { Component, React, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteVisitation, getVisitations } from "../../redux/agendamento/slice";

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
  const dispatch = useDispatch();

  const [infoOpen, setInfoOpen] = useState(false);

  const Delete = (e) => {
    e.preventDefault();
    dispatch(deleteVisitation(id));
    dispatch(getVisitations());
  };
 let datas = infos.data
 datas = datas.split('-');
 datas = datas[2]+'/'+datas[1]+'/'+datas[0];
  return (
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
        <button className="Agendamento_Cancel" onClick={Delete}>
          <FaTrash className="agendamento_options"/>
        </button>
      </div>
        <ul className={`informacoes_Agendamentos ${infoOpen && 'ativo'}`}>
          <div className="la-line"></div>
          <p className="usuario">Nome do agendante: {infos.nome}</p>
          <p className="usuario">Contato: {infos.email}</p>
        </ul>
    </div>
  );
};

export default Agendamento;
