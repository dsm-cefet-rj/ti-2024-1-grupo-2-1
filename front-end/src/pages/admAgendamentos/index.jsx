import { useDispatch, useSelector } from "react-redux";
import Agendamento from "../../components/Agendamentos";
import Footer from "../../components/Footer";
import HeaderMain from "../../components/HeaderMain";
import { getVisitations } from "../../redux/agendamento/slice";
import "./index.css";
import { useEffect } from "react";
import TitlePage from "../../components/Title-Page";
/**
* @module Page/Tela_de_admAgendamento
*/

/**
* @typedef AdmAgendamento
* @type {React.FC}
*/
/**
* Componente React para gerenciar a visualização e edição de agendamentos
* @returns {React.FC} - Um componente React que renderiza a tela de agendamentos.
 */


const AdmAgendamento = () => {
  // Dispatch do Redux para disparar ações
  const dispatch = useDispatch();
  // Estado para armazenar o status da busca
  const { status } = useSelector((rootReducer) => rootReducer.schedulingSlice);
  // Estado para armazenar os agendamentos
  const { visitations } = useSelector(
    (rootReducer) => rootReducer.schedulingSlice
  );

  // Efeito para buscar agendamentos na inicialização do componente
  useEffect(() => {
    dispatch(getVisitations());

    if (status === "deleted") {
      dispatch(getVisitations());
    }
  }, []);

  return (
    <div>
      <HeaderMain />
      <div className="container-div">
        <TitlePage text="Agendamentos Cadastrados"/>
        <div>
          {visitations != 0 ? (
            <>
              {Object.values(visitations).map((agendamento) => (
                <Agendamento key={agendamento.id} infos={agendamento} />
              ))}
            </>
          ) : (
            <div className="espaço-preenchidoAgendamento">
              {" "}
              <p>Não há agendamentos marcados</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdmAgendamento;
