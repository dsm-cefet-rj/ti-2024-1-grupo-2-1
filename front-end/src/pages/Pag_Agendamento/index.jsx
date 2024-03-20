import React, { useState } from 'react';
import HeaderMain from "../../components/Header";
import Footer from "../../components/Footer/indexfooter";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './style.css';

export const Agendamento = () => {
    const [date, setDate] = useState(new Date());

    const onChange = date => {
        setDate(date);
    };

    // Função para verificar se uma data é anterior à data atual
    const isDateDisabled = (date) => {
        const currentDate = new Date();
        if (date>=currentDate) {
            return setDate(date);
        }
        console.log(date);
    };

    return (
        <div>
            <HeaderMain></HeaderMain>
            <span className="introducao"><strong>Agende sua visita</strong></span>
            <span className="line"></span>

            <div className="Calendar">
                <Calendar
                    onChange={isDateDisabled}
                    value={date}
                />
            </div>

            <div className="content"></div>
            <Footer></Footer>
        </div>
    );
}

export default Agendamento;
