import React, { useEffect, useState } from "react";
import "./style.css";
import { FaBars } from "react-icons/fa"
import { useNavigate, Link } from "react-router-dom";


const HeaderMain = () => {
    const navigate = useNavigate();

    const[menuOpen, setMenuOpen]=useState(false)

    useEffect(()=>{
        window.addEventListener('resize', ()=>{
            if(window.innerWidth>=560){
                setMenuOpen(true)
            }
        })
    })
    return (

        <div className="headermain">
            <div className="header-container">
            <div className="logo">
            <p className="title">
            <span style={{color: ' #a200ff'}}>S</span>
            <span style={{color: 'black'}}></span>
            <span style={{color: '#1d20ff'}}>A</span>
            <span style={{color: 'black'}}></span>
            <span style={{color: ' #a200ff'}}>A</span>
        </p>
            </div>
        <FaBars size={24}
        className="barrinhas"
        style={{color: 'rgb(138, 1, 250)'}}
        onClick={()=>{setMenuOpen(!menuOpen)}}/></div>
        {menuOpen &&(
            <div className="navbar">

                <Link style={{textDecoration:'none', color: 'rgb(138, 1, 250)'}}>Animais </Link><span>|</span>
                <Link style={{textDecoration:'none', color: 'rgb(138, 1, 250)'}}> Adotar  </Link><span>|</span>
                <Link style={{textDecoration:'none', color: 'rgb(138, 1, 250)'}}> Quem somos  </Link><span>|</span>
                <Link style={{textDecoration:'none', color: 'rgb(138, 1, 250)'}}> Favoritados</Link>
            </div>)}

            <div className="btn">

                <button className="login-bt">Entrar</button>
                <button className="signup-bt">Cadastrar</button>
            </div>
            

        </div>

    )

}
export default HeaderMain;