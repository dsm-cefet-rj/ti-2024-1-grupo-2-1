import React, { useState } from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash  } from "react-icons/fa";
import { Layout } from "../../components/Layoutform";
import { useSelector, useDispatch } from "react-redux";
import { addUserServer, signUp, emailExistServer} from "../../redux/user/slice";
import {InputUsuario} from "../../components/InputUsuario"

export const Cadastrar = () => {

  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [err, setErr] = useState("");
  const [errE, setErrE] = useState("");
  const [errP, setErrP] = useState("");


  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!email || !senha || !nome) {
      e.preventDefault();
      setErr("Preencha todos os campos");
      return;
    } 

    dispatch(emailExistServer(email)).then((result) => {
      if(result.payload){
        setErrE('Este e-mail já está cadastrado')
      } 
      if (!isEmailValid(email)){
        setErrE("Preencha o email de maneira correta.")
      }
      if (!isPasswordValid(senha,5)){
        setErrP("A senha precisa de no mínimo 5 digitos")
      }
      else{
        dispatch(addUserServer({nome, email, senha}))
        alert("Usuário cadastrado com sucesso!");
        navigate("/login");
      }
    })
  };

  const isEmailValid =(email) =>{

    const emailRegex = new RegExp(
      /^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+.[a-z]{2,}$/
    )

    if(emailRegex.test(email)){
      return true
    }
    return false
  }

  const isPasswordValid =(password, minDigits) => {
    if (password.length >= minDigits){return true;}

  }

  return (
    <Layout>
      <form className="register-form">
        <span className="tittle-r">Fazer cadastro</span>
        <InputUsuario 
        valor ={nome}
        type = {"name"}
        value = { nome }
        onChange={(e) => [setNome(e.target.value), setErr("")]}
        label = { "Nome" }
          />

        <InputUsuario 
        valor ={email}
        type = {"email"}
        value = { email }
        onChange={(e) => [setEmail(e.target.value), setErr("")]}
        label = { "Email" }
        error = {errE}

          />
        <InputUsuario
          valor ={senha}
            type = {'password'}
            value = { senha }
            onChange={(e) => [setSenha(e.target.value), setErr("")]}
            label = { "Senha" }
            error = {errP}
        />
        <label className="erro">{err}</label>
        <div className="container-register-botao">
          <button className="botao-form" onClick={handleSignUp}>
            Cadastre-se
          </button>
        </div>

        <div className="text-center-r">
          <span className="txtr1">Possui conta?</span>
          <Link className="txtr2" to={"/login"}>
            Clique aqui.
          </Link>
        </div>
      </form>
    </Layout>
  );
};
