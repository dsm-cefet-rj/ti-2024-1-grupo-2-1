import React, { useEffect, useState, useContext, useRef } from "react";
import "./style.css";
import { FaBars } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../../assets/logo2.png";
import Logo2 from "../../assets/logopart2.png";
import { VscAccount } from "react-icons/vsc";
import { useSelector, useDispatch } from "react-redux";
import rootReducer from "../../redux/root-reducer";
import { logOut } from "../../redux/user/slice";


const HeaderMain = () => {
  const navigate = useNavigate();
  const [infoOpen, setInfoOpen] = useState(false);
  const perfilRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(true);

 //acessando o objeto usuario, afim de pegar os dados, atraves do useSelector 
  const{ currentUser } = useSelector((rootReducer) => rootReducer.userReducer);
 //altera os dados do objeto 
  const dispatch=useDispatch();


  const handleLogOut = () =>{
    dispatch((logOut()))
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
          <Link style={{ textDecoration: "none", color: "rgb(1, 73, 131)" }} to={"/quem_somos"}>
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
          {(currentUser !== null && currentUser.nome === "Adm" && currentUser.email === "admin@admin" && currentUser.senha === "admin" && currentUser.id === "0000") ? 
          (<> <span> | </span> <Link
            style={{ textDecoration: "none", color: "rgb(1, 73, 131)" }}
            to={`/cadastro_animal`}
          >
            {" "}
            Cadastro de Animais
          </Link> </>) : (<></>)}
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
              <label className="welcome">Bem vindo: {currentUser.nome}</label>
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
