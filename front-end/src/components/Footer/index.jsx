import React,{ useState,useEffect} from "react";
import "./style.css";
import { useNavigate, Link } from "react-router-dom";
import { IoLogoInstagram } from "react-icons/io";
import { LiaFacebookSquare } from "react-icons/lia";
import { useSelector } from "react-redux";
/** 
 * @module Componente/Footer
 *  */

/** 
 * @typedef Footer
 * @type {React.FC}
*/

/** 
 * Renderiza um container de footer para a página.
 * @returns {React.FC} O componente renderizado.
*/
const Footer = () => {
  const [id, setId] = useState("");
  const navigate = useNavigate();

  //acessando o objeto usuario, afim de pegar os dados, atraves do useSelector
  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer);
  useEffect(() => {
    if (currentUser != null) {
      setId(currentUser.id);
    }
  });
  return (
    <div className="footer">
      <div className="above">
        <div className="footerpt1">
          <ul>
            <h2>Adote</h2>
            <li>Adote com responsabilidade</li>
          </ul>
          <ul>
            <h2>Colabore</h2>
            <li>Doe qualquer valor</li>
          </ul>
        </div>
        <div className="footerpt2">
          <ul>
            <h2>Informações Importantes</h2>
            <li>Perguntas Frequentes</li>
            <li>Termo de Uso e Política de Privacidade</li>
          </ul>
          <ul>
            <h2>Perfil</h2>
            <li onClick={()=> navigate(`../detalhes_conta/${id}`)}>Minha página de perfil</li>
            <li>Cadastre-se</li>
          </ul>
        </div>
      </div>
      <div className="icones_links">
        <IoLogoInstagram style={{ color: "white" }} />
        <LiaFacebookSquare style={{ color: "white" }} />
      </div>
    </div>
  );
};

export default Footer;
