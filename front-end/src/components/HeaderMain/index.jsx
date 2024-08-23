import React, { useEffect, useState, useRef } from "react";
import "./style.css";
import { FaBars } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../../assets/logo2.png";
import Logo2 from "../../assets/logopart2.png";
import { VscAccount } from "react-icons/vsc";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../redux/user/slice";
import { fetchAnimais } from "../../redux/Animais/slice";
import { cleanArray } from "../../redux/Favoritos/slice";
/** 
* @module Componente/Header
*  */

/** 
* @typedef HeaderMain
* @type {React.FC}
*/

/** 
* Renderiza container de header para a página.
* @returns {React.FC} O componente renderizado.
*/

const HeaderMain = () => {
  const navigate = useNavigate();
  const [infoOpen, setInfoOpen] = useState(false);
  const perfilRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(true);
  const [id, setId] = useState("");

  //acessando o objeto usuario, afim de pegar os dados, atraves do useSelector
  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer);
  useEffect(() => {
    if (currentUser != null) {
      setId(currentUser.id);
    }
  });
  //altera os dados do objeto
  const dispatch = useDispatch();

  const handleLogOut = () => {
    navigate("/");
    dispatch(logOut());
    dispatch(cleanArray());
    // window.location.reload();
  };
  const handleAcount = () => {
    navigate(`../detalhes_conta/${id}`);
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 980) {
        setMenuOpen(false);
      }
      if (window.innerWidth >= 980) {
        setMenuOpen(true);
      }
    });
  });
  const goLogin = () => {
    navigate("/login");
  };
  const goSignup = () => {
    navigate("/cadastrar");
  };

  useEffect(() => {
    // Adiciona um ouvinte de evento de clique ao documento inteiro
    function handleClickOutside(event) {
      if (perfilRef.current && !perfilRef.current.contains(event.target)) {
        // Clique fora do botão de perfil, então ele é escondido
        setInfoOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    // Limpa o ouvinte de evento quando o componente de mostrar perfil é desmontado
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  
  const toMain =()=>{
    navigate("/");
    dispatch(fetchAnimais())
  }

  return (
    <div className="headermain">
      <div className="header-container">
        <div className="logo">
          <Link to={`/`}>
            <img className="pata" src={Logo} alt="" />
            <img className="logo_nome" src={Logo2} alt="" />
          </Link>
        </div>
        <FaBars
          className="barrinhas"
          style={{ color: "rgb(1, 73, 131)" }}
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        />
      </div>
      {menuOpen && (
        <nav className="navbarra">
          <Link
            style={{ textDecoration: "none", color: "rgb(1, 73, 131)" }}
            to={`/`}
          >
            {" "}
            Home{" "}
          </Link>
          <span> | </span>
          <Link
            style={{ textDecoration: "none", color: "rgb(1, 73, 131)" }}
            to={"/quem_somos"}
          >
            {" "}
            Quem somos{" "}
          </Link>
          <span> | </span>
          <Link
            style={{ textDecoration: "none", color: "rgb(1, 73, 131)" }}
            to={`/favoritos`}
          >
            {" "}
            Favoritados
          </Link>
          {currentUser !== null &&
          currentUser.admin ===  true? (
            <>
              {" "}
              <span> | </span>{" "}
              <Link
                style={{ textDecoration: "none", color: "rgb(1, 73, 131)" }}
                to={`/opcao_admin`}
              >
                {" "}
                Opções de admin
              </Link>{" "}
            </>
          ) : (
            <></>
          )}
        </nav>
      )}

      {currentUser ? (
        <div className="botao-perfil-header">
          <button
            ref={perfilRef}
            type="submit"
            className="show_perfil"
            onClick={() => {
              setInfoOpen(!infoOpen);
            }}
          >
            <VscAccount className="show-perfil-svg" color="rgb(1, 73, 131)" />
          </button>
          {infoOpen && currentUser != [] && currentUser != null && (
            <div className="perfil">
              <ul>
                {
                  <label className="welcome">
                    Bem vindo: {currentUser.nome}
                  </label>
                }
                <button className="conta" onClick={handleAcount}>
                  conta
                </button>
                <button className="sair" onClick={handleLogOut}>
                  Sair
                </button>
              </ul>
            </div>
          )}
        </div>
      ) : (
        <div className="botao-header">
          <button className="login-bt" onClick={goLogin}>
            Entrar
          </button>
          <button className="signup-bt" onClick={goSignup}>
            Cadastrar
          </button>
        </div>
      )}
    </div>
  );
};
export default HeaderMain;
