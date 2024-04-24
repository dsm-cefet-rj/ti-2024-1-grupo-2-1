import "./index.css";
import { React, useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteVisitation } from "../../redux/agendamento/slice";

export const Agendamento = ({ infos }) => {
  const id = infos.id;
  const dispatch = useDispatch();

  const [infoOpen, setInfoOpen] = useState(false);

  const Delete = (e) => {
    e.preventDefault();
    dispatch(deleteVisitation(id));
    window.location.reload();
  };

  return (
    <div className="cardagendamento-div">
      <div className="namoral">
        <div className="left-div">
          <h3>Data: {infos.data}</h3>
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
        <MdOutlineCancel className="Agendamento_Cancel" onClick={Delete} />
      </div>
      {infoOpen && (
        <ul>
          <div className="la-line"></div>
          <p className="usuario">Nome do agendante: {infos.nome}</p>
          <p className="usuario">Contato: {infos.email}</p>
        </ul>
      )}
    </div>
  );
};

export default Agendamento;
