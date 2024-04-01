import React, { useEffect, useState } from "react";
import "./style.css";
import { FaBars } from "react-icons/fa"
import { useNavigate, Link } from "react-router-dom";
import Logo from "../../assets/logo2.png"
import Logo2 from "../../assets/logopart2.png"


const HeaderMain = () => {
    const navigate = useNavigate();

    const [menuOpen, setMenuOpen] = useState(true)

    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth <= 980) {
                setMenuOpen(false)
            }
            if (window.innerWidth >= 980) {
                setMenuOpen(true)
            }
        })
    })
    const goLogin=()=>{
        navigate("/login")
    }
    const goSignup=()=>{
        navigate("/cadastrar")
    }
    return (

        <div className="headermain">
            <div className="header-container">
                <div className="logo">
                    <Link to={`/`}>
                    <img className="pata" src={Logo} alt=""/>
                    <img className="logo_nome" src={Logo2} alt="" />
                    </Link>
                </div>
                <FaBars
                    className="barrinhas"
                    style={{ color: 'rgb(1, 73, 131)' }}
                    onClick={() => { setMenuOpen(!menuOpen) }} /></div>
            {menuOpen && (
                <nav className="navbarra">

                    <Link style={{ textDecoration: 'none', color: 'rgb(1, 73, 131)' }}to = {`/`}> Home  </Link><span> | </span>
                    <Link style={{ textDecoration: 'none', color: 'rgb(1, 73, 131)' }}> Quem somos  </Link><span> | </span>
                    <Link style={{ textDecoration: 'none', color: 'rgb(1, 73, 131)' }} to = {`/favoritos`}> Favoritados</Link>
                </nav>)}

            <div className="botao-header">

                <button className="login-bt" onClick={goLogin}>Entrar</button>
                <button className="signup-bt" onClick={goSignup}>Cadastrar</button>

            </div>


        </div>

    )

}
export default HeaderMain;