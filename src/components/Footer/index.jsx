import React from 'react'
import "./style.css";
import { IoLogoInstagram } from "react-icons/io"
import { LiaFacebookSquare } from "react-icons/lia"

const Footer = () => {
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
                        <li>Minha página de perfil</li>
                        <li>Cadastre-se</li>
                    </ul>
                </div>
            </div>
            <div className="icones_links">
                <IoLogoInstagram  style={{ color: 'white' }} />
                <LiaFacebookSquare  style={{ color: 'white' }} />

            </div>
        </div>

    )
}

export default Footer
