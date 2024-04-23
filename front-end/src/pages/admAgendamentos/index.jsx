import { useDispatch, useSelector } from "react-redux";
import Agendamento from "../../components/Agendamentos";
import Footer from "../../components/Footer";
import HeaderMain from "../../components/HeaderMain";
import { getVisitations } from "../../redux/agendamento/slice";
import "./index.css"
import rootReducer from "../../redux/root-reducer";
import { useEffect } from "react";
import { Grade } from "../../components/GridContainer";

export const AdmAgendamento = () => {

    const dispatch = useDispatch();
    const { status } = useSelector((rootReducer) => rootReducer.schedulingSlice);
    const { visitations } = useSelector((rootReducer) => rootReducer.schedulingSlice);

    useEffect(() => {
        dispatch(getVisitations());

        if(status === "deleted"){
            dispatch(getVisitations());
        }

    }, []);

    return(
        <div>
            <HeaderMain/>
            <div className="container-div">
                <div>
                    <h1>Agendamentos Cadastrados</h1>
                    <span id="linha"></span>
                </div>
                <div>
                {visitations != 0 ? 
                    (<>
                        {Object.values(visitations).map((agendamento) => (<Agendamento key={agendamento.id} infos={agendamento}/>
                    ))}
                    </>) : (<div className="espaço-preenchidoAgendamento"> <p>Não há agendamentos marcados</p></div>)
                }
                </div>
            </div>
            <Footer/>
        </div>
    )

}

export default AdmAgendamento;