import React from "react";
import "./style.css";
import HeaderMain from "../../components/HeaderMain";
import TitlePage from "../../components/Title-Page";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

const OptionAdmin = () => {
  const navigate = useNavigate();

  const cadastroClick = (e) => {
    e.preventDefault();
    navigate("/cadastro_animal");
  };
  const agendamentoClick = (e) => {
    e.preventDefault();
    navigate("/admin_agendamentos");
  };
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
