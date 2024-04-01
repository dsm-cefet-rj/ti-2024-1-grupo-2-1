import React, { useState, useContext } from "react";
import './style.css';
import { Link, useNavigate } from "react-router-dom";
import { Layout } from "../../components/Layoutform";
import useAuth from "../../hooks/useAuth"

export const Login = () =>{

    const[email,setEmail]=useState("");
    const[senha,setSenha]=useState("");
    const[err,setErr]=useState("");

    const {logIn} = useAuth();
    const navigate=useNavigate();

   

    const handleIn=()=>{
        if(!email | !senha){
            setErr("Preencha todos os campos");
            return;
        }

        const res = logIn(email, senha);

        if(res){
            setErr(res);
            return;
        }
       navigate("/");
    }
    return(
        <Layout>
            <form className="login-form">
                    <span className="tittle">Seja Bem Vindo</span>
                    <div className="wrap-input">
                        <input 
                            className={email!=="" ? 'has-val input':'input'} 
                            type="email"
                            value={email}
                            onChange={(e)=>[setEmail(e.target.value),setErr("") ]} />
                        <span className="focus-input" data-placeholder="Email"></span>
                    </div>
                    <div className="wrap-input">
                        <input 
                            className={senha!=="" ? 'has-val input':'input'} 
                            type="password" 
                            value={senha}
                            onChange={(e)=>[setSenha(e.target.value), setErr("")]}/>
                        <span className="focus-input" data-placeholder="Senha"></span>
                    </div>
                    <label className="erro">{err}</label>
                    <div className="container-login-botao">
                        <button className="botao-form" onClick={handleIn}>Login</button>
                    </div>

                    <div className="text-center">
                        <span className="txt1">Não possui conta?</span>
                        <Link className="txt2" to={"/cadastrar"}>Criar conta.</Link>
                    </div>
                    

            </form>
            
            
        </Layout>
    );
}