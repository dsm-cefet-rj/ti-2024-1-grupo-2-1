import "./index.css"
import {React, useState} from "react";

export const Agendamento = ({infos}) => {

    const[infoOpen,setInfoOpen] = useState(false);

    return(
        <div className="cardagendamento-div">
            <div className="namoral">
            <div className="left-div">
                <h3>Data: {infos.data}</h3>
            </div>
            <div className="middle-div">
                <h3>Hora: {infos.hora}</h3>
            </div>
            <div className="right-div">
                <button className="btn-details" onClick={()=>{
                setInfoOpen(!infoOpen)}}>DETALHES</button>
            </div>
            </div>
            {infoOpen &&(
                    <ul>
                   <div className="la-line"></div> 
                    <p className="usuario">Nome do agendante: {infos.nome}</p>
                    <p className="usuario">Contato: {infos.email}</p>
                    </ul>)}
        </div>
    )
}

export default Agendamento;