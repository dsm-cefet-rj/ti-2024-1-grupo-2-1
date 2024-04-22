import { useDispatch } from "react-redux";
import Agendamento from "../../components/Agendamentos";
import Footer from "../../components/Footer";
import HeaderMain from "../../components/HeaderMain";
import { getVisitations } from "../../redux/agendamento/slice";
import "./index.css"

export const AdmAgendamento = () => {

    const dispatch = useDispatch();

    const visitationsData = getVisitations();
    console.log(dispatch(visitationsData));

    return(
        <div>
            <HeaderMain/>
            <div className="container-div">
                <div>
                    <h1>Agendamentos Cadastrados</h1>
                    <span id="linha"></span>
                </div>
                <div>
                    <Agendamento/>
                    <Agendamento/>
                    <Agendamento/>
                </div>
            </div>
            <Footer/>
        </div>
    )

}

export default AdmAgendamento;