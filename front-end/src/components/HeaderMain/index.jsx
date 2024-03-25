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
        })
    })
    return (

        <div className="headermain">
            <div className="header-container">
                <div className="logo">
                    <img src={Pref} alt="" />

                </div>
                <FaBars size={40}
                    className="barrinhas"
                    style={{ color: 'rgb(4, 45, 226)' }}
                    onClick={() => { setMenuOpen(!menuOpen) }} /></div>
            {menuOpen && (
                <nav className="navbar">

                    <Link style={{ textDecoration: 'none', color: 'rgb(4, 45, 226)' }}>Animais </Link><span>|</span>
                    <Link style={{ textDecoration: 'none', color: 'rgb(4, 45, 226)' }}> Adotar  </Link><span>|</span>
                    <Link style={{ textDecoration: 'none', color: 'rgb(4, 45, 226)' }}> Quem somos  </Link><span>|</span>
                    <Link style={{ textDecoration: 'none', color: 'rgb(4, 45, 226)' }}> Favoritados</Link>
                </nav>)}

            <div className="btn">

                <button className="login-bt">Entrar</button>
                <button className="signup-bt">Cadastrar</button>
            </div>


        </div>

    )

}
export default HeaderMain;