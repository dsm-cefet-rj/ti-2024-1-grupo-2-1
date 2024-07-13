import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderMain from "../../components/HeaderMain";
import Footer from "../../components/Footer";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./style.css";
// import animal from "../../components/Animal/animal";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addVisitation } from "../../redux/agendamento/slice";
import ErrorMessage from "../../components/Error";
import SuccessMessage  from "../../components/SuccessMessage";
import TitlePage from "../../components/Title-Page";
/**
 * @module Page/Tela_deAgendamento
 */
/**
* @typedef Agendamento
* @type {React.FC}
*/
/**
* Componente React para realizar o agendamento de uma visita.
* @returns {React.FC} - Um componente React que renderiza a tela onde realiza os agendamentos.
 */
const Agendamento = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer);

  const [date, setDate] = useState(new Date());
  const [selecao, setSelecao] = useState("");
  const[err, setErr]=useState("");
  const[success, setSuccess]=useState("");

  const { id } = useParams();
  const [animais, setAnimais] = useState([]);
  const navigate = useNavigate();

  // Função para verificar se uma data é anterior à data atual
  /**
   * @function isDateDisabled
   * @param {string} date -Informa qual a data foi escolhida.
   * @returns {string} - retorna a data escolhida 
   */
  const isDateDisabled = (date) => {
    const currentDate = new Date();
    if (date >= currentDate) {
      return setDate(date);
    }
  };
/**
   * @function handleChange
   * @param {*} e -Evento
   * @returns {string} - retorna o dia escolhida 
   */
  const handleChange = (event) => {
    setSelecao(event.target.value);
  };
  /**
   * @function handleConfirm
   * @param {*} e -Evento
   */
  const handleConfirm = (e) => {
    e.preventDefault();

    if (!selecao) {
      setErr("Selecione uma hora para visitação!")
      setTimeout(()=>{
        setErr("")
      },3500)
      return;
    }

    const dateFinal = date.toISOString().split("T");

    dispatch(
      addVisitation({
        nome: currentUser.nome,
        idUsuario: currentUser.id,
        email: currentUser.email,
        data: dateFinal[0],
        hora: selecao,
      })
    );
    setSuccess("Agendamento confirmado com êxito")
    setTimeout(()=>{
      setErr("")
    },3000)
    setTimeout(()=>{
      navigate(`/registro_adocao/${id}`);
      {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    },3000)
  };

  return (
    <div>
      <HeaderMain />
      <div>
        <TitlePage text={"Agendamento"}/>
        <div className="div-mainContainer">
          <div className="div-top">
            <div className="div-left">
              <Calendar onChange={isDateDisabled} value={date} />
            </div>
            <div className="div-right">
              <div className="div-day">
                <h3>Dia: </h3>
                <strong>{date.toLocaleDateString()}</strong>
              </div>
              <div className="div-hour">
                <h3 id="text-hour">Hora: </h3>
                <select value={selecao} onChange={handleChange}>
                  <option value="">Selecione...</option>
                  <option value="12:00h">12:00h</option>
                  <option value="14:00h">14:00h</option>
                  <option value="14:30h">14:30h</option>
                  <option value="16:00h">16:00h</option>
                  <option value="16:30h">16:30h</option>
                </select>
              </div>
              <div className="div-button">
                <input
                  type="button"
                  value="Confirmar Agendamento"
                  onClick={handleConfirm}
                  id="confirm-button"
                />
              </div>
               <ErrorMessage text={err}/>
                <SuccessMessage text={success}/>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Agendamento;
