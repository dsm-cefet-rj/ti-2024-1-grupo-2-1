import React, { useEffect, useState, useContext, useRef } from "react";
import "./style.css";
import { FaBars } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../../assets/logo2.png";
import Logo2 from "../../assets/logopart2.png";
import { AuthContext } from "../../contexts/auth";
import { VscAccount } from "react-icons/vsc";
import useAuth from "../../hooks/useAuth";
import { useSelector, useDispatch } from "react-redux";
import rootReducer from "../../redux/root-reducer";

import UserActionsTypes from "../../redux/user/actions-types";

const HeaderMain = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();
  const { user } = useContext(AuthContext);
  const [infoOpen, setInfoOpen] = useState(false);
  const perfilRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(true);

 //acessando o objeto usuario, afim de pegar os dados, atraves do useSelector 
  const{ usuarioAtual } = useSelector((rootReducer) => rootReducer.userReducer);
 //altera os dados do objeto 
  const dispatch=useDispatch();

  console.log({ usuarioAtual });

  const handlelog = () =>{
    dispatch({
      type: UserActionsTypes.LOGIN

    })
  }


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
    // {console.log(user)}
    // {console.log(user.name)}
    // {console.log(user.name.length)}
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
          <Link style={{ textDecoration: "none", color: "rgb(1, 73, 131)" }}>
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
        </nav>
      )}

      <div className="botao-header">
        {usuarioAtual ? (
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
        ) : (
          <>
            <button className="login-bt" onClick={handlelog}>
              Entrar
            </button>
            <button className="signup-bt" onClick={goSignup}>
              Cadastrar
            </button>
          </>
        )}

        {infoOpen && user != null && user.name != null && (
          <div className="perfil">
            <ul>
              <label className="welcome">Bem vindo: {user.name}</label>
              <button className="sair" onClick={() => [logOut()]}>
                Sair
              </button>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
export default HeaderMain;
