import "./index.css"
import {React} from "react";

export const Agendamento = ({infosAgendamento}) => {

    return(
        <div className="cardagendamento-div">
            <div className="left-div">
                <h3>Data: </h3>
            </div>
            <div className="middle-div">
                <h3>Hora: </h3>
            </div>
            <div className="right-div">
                <button className="btn-details">DETALHES</button>
            </div>
        </div>
    )
}

export default Agendamento;