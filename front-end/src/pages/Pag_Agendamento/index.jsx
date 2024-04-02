import React, {useState} from "react";
import HeaderMain from "../../components/HeaderMain";
import Footer from "../../components/Footer";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./style.css";

export const Agendamento = () => {

    const [date, setDate] = useState(new Date());
    const [selecao, setSelecao] = useState('');

    // Função para verificar se uma data é anterior à data atual
    const isDateDisabled = (date) => {
        const currentDate = new Date();
        if (date>=currentDate) {
            return setDate(date);
        }
        console.log(date);
    };

    const handleChange = (event) => {
        setSelecao(event.target.value);
    };

    return (
        <div>
            <HeaderMain/>
                <div>
                    <div className="div-name">
                        <h1>Agende sua visita</h1>
                        <span id="linha"></span>
                    </div>
                    <div className="div-mainContainer">
                        <div className="div-top">
                            <div className="div-left">
                                <Calendar
                                    onChange={isDateDisabled}
                                    value={date}
                                />
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
                                        <option value="option1">12:00h</option>
                                        <option value="option2">14:00h</option>
                                        <option value="option3">14:30h</option>
                                        <option value="option4">16:00h</option>
                                        <option value="option5">16:30h</option>
                                    </select>
                                </div>
                                <div className="div-button">
                                    <input type="button" value="Confirmar Agendamento" id="confirm-button"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer/>
        </div>
    );


};

export default Agendamento;