import Agendamento from "../../components/Agendamentos";
import Footer from "../../components/Footer";
import HeaderMain from "../../components/HeaderMain";
import "./index.css"

export const AdmAgendamento = () => {

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
                </div>
            </div>
            <Footer/>
        </div>
    )

}

export default AdmAgendamento;