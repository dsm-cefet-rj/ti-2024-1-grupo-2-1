import React from "react";
import "./style.css";
import HeaderMain from "../../components/HeaderMain";
import TitlePage from "../../components/Title-Page";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
/**
 * @module Page/Pagina_Opcao_adm
 * 
 */
/**
 * @typedef OptionAdmin
 * @type {React.FC}
 */
/**
 * Renderiza uma pagina, onde há opcões de atividades que o adm pode realizar.
 * @returns {React.FC} - Componente React
 */

const OptionAdmin = () => {
  const navigate = useNavigate();

  /**
   * @function cadastroClick - redireciona para a pagina de cadastro de animais
   * @param {*} e -Evento
   */

  const cadastroClick = (e) => {
    e.preventDefault();
    navigate("/cadastro_animal");
  };
  /**
   * @function agendamentoClick - redireciona para onde há os registro de agendamentos
   * @param {*} e -Evento
   */
  const agendamentoClick = (e) => {
    e.preventDefault();
    navigate("/admin_agendamentos");
  };

  /**
   * @function pedidosClick - redireciona para onde há os registros de pedidos de adoção
   * @param {*} e -Evento
   */
  const pedidosClick = (e) => {
    e.preventDefault();
    navigate("/admin_pedidos");
  };

  return (
    <div>
      <HeaderMain />
      <TitlePage text="Opções de administrador"/>
      <div className="opcao_admin">
        <button className="admin_botao" onClick={cadastroClick}>
          Cadastro de animais
        </button>
        <button className="admin_botao" onClick={agendamentoClick}>
          Agendamentos
        </button>
        <button className="admin_botao" onClick={pedidosClick}>
          Pedidos de adoção
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default OptionAdmin;
