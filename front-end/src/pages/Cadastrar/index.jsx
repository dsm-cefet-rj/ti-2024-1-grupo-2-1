import React, { useState } from "react";
import './style.css';
import { Link, useNavigate } from "react-router-dom";
import { Layout } from "../../components/Layoutform";
import useAuth from "../../hooks/useAuth";

export const Cadastrar =()=>{

    const[email,setEmail]=useState("");
    const[senha,setSenha]=useState("");
    const[nome,setNome]=useState("");
    const[err, setErr]=useState("");

    const navigate=useNavigate();

    const{signUp}=useAuth();

    const handleSingUp=()=>{
        
        if(!email| !senha| !nome){
            setErr("Preencha todos os campos");
        }

        const res = signUp(nome, email, senha);
        
        if(res){
            setErr(res);
            return;
        }
        alert("Usuario cadastrado com sucesso!");
        navigate("/login");
    }

    return(
        
        <Layout>

            <form className="register-form">
            <span className="tittle-r">Fazer cadastro</span>
                    <div className="wrap-input-r">
                        <input 
                            className={nome!=="" ? 'has-val input':'input'} 
                            type="name"
                            value={nome}
                            onChange={(e)=>[setNome(e.target.value),setErr("")]} />
                        <span className="focus-input" data-placeholder="Nome"></span>
                    </div>
                    <div className="wrap-input-r">
                        <input 
                            className={email!=="" ? 'has-val input':'input'} 
                            type="email"
                            value={email}
                            onChange={(e)=>[setEmail(e.target.value),setErr("")]} />
                        <span className="focus-input" data-placeholder="Email"></span>
                    </div>
                    <div className="wrap-input-r">
                        <input 
                            className={senha!=="" ? 'has-val input':'input'} 
                            type="password" 
                            value={senha}
                            onChange={(e)=>[setSenha(e.target.value),setErr("")]}/>
                        <span className="focus-input" data-placeholder="Senha"></span>
                    </div>
                    <label>{err}</label>
                    <div className="container-register-botao">
                        <button className="botao-form" onClick={handleSingUp}>Cadastre-se</button>
                    </div>

                    <div className="text-center-r">
                        <span className="txtr1">Possui conta?</span>
                        <Link className="txtr2" to={"/login"}>Clique aqui.</Link>
                    </div>


            </form>

        </Layout>

    )
}