import React, { useEffect, useState } from "react";
import "./style.css";
import { FaBars } from "react-icons/fa"
import { useNavigate, Link } from "react-router-dom";
import Pref from "../../assets/logo-prefeitura.png"


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
    return (

        <div className="headermain">
            <div className="header-container">
                <div className="logo">
                    <img className="Pref" src={Pref} alt="" />
                </div>
                <FaBars
                    className="barrinhas"
                    style={{ color: 'rgb(4, 45, 226)' }}
                    onClick={() => { setMenuOpen(!menuOpen) }} /></div>
            {menuOpen && (
                <nav className="navbar">

                    <Link style={{ textDecoration: 'none', color: 'rgb(1, 73, 131)' }}>Animais </Link><span> | </span>
                    <Link style={{ textDecoration: 'none', color: 'rgb(1, 73, 131)' }}> Adotar  </Link><span> | </span>
                    <Link style={{ textDecoration: 'none', color: 'rgb(1, 73, 131)' }}> Quem somos  </Link><span> | </span>
                    <Link style={{ textDecoration: 'none', color: 'rgb(1, 73, 131)' }}> Favoritados</Link>
                </nav>)}

<<<<<<< HEAD
            <div className="b">
=======
            <div className="botao-header">
>>>>>>> 51470369df2f690f24369264a041fbaa03fd9326

                <button className="login-bt">Entrar</button>
                <button className="signup-bt">Cadastrar</button>
            </div>


        </div>

    )

}
export default HeaderMain;