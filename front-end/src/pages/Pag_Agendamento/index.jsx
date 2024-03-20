import React, { useState } from 'react';
import HeaderMain from "../../components/HeaderMain";
import Footer from "../../components/Footer";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './style.css';

export const Agendamento = () => {
    const [date, setDate] = useState(new Date());

    const onChange = date => {
        setDate(date);
    };

    return (
        <div>
            <HeaderMain></HeaderMain>
            <span className="introducao"><strong>Agende sua visita</strong></span>
            <span className="line"></span>

            <div className="Calendar">
                <Calendar
                    onChange={onChange}
                    value={date}
                />
            </div>

            <div className="content"></div>
            <Footer></Footer>
        </div>
    );
}

export default Agendamento;
