import React, { useState } from 'react';
import HeaderMain from "../../components/Header";
import Footer from "../../components/Footer/indexfooter";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './style.css';



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

        // Aqui você pode adicionar a lógica para enviar o horário para o servidor

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
                <div className='Day'><h4>Dia</h4></div>
                
                <div className="data">
                    <strong>{date.toLocaleDateString()}</strong> 
                </div>

                <div className='time'>
                    <h4>Hora</h4>
                </div>
                <div className='hora'>
                    <select value={selecao} onChange={handleChange}>
                        <option value="">Selecione...</option>
                        <option value="opcao1">12:00h</option>
                        <option value="opcao2">14:00h</option>
                        <option value="opcao3">14:45h</option>
                        <option value="opcao4">17:00h</option>
                    </select>
                </div>
            <button className='Botao'>Confirmar</button>

            
            </div>

            <div className="content"></div>
            <Footer></Footer>
        </div>
    );
}

export default Agendamento;
