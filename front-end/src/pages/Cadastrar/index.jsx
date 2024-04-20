import React, { useState } from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash  } from "react-icons/fa";
import { Layout } from "../../components/Layoutform";
import { useSelector, useDispatch } from "react-redux";
import { addUserServer, signUp, emailExistServer} from "../../redux/user/slice";
import {InputUsuario} from "../../components/InputUsuario"

export const Cadastrar = () => {

  const { userDB } = useSelector(rootReducer => rootReducer.userReducer);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [err, setErr] = useState("");
  const[hide , setHide] = useState(false);

  const visualizar_senha = () => {
    setHide(!hide)    
}

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
        setErr('Este e-mail já está cadastrado')
      }
      else{
        dispatch(addUserServer({nome, email, senha}))
        alert("Usuário cadastrado com sucesso!");
        navigate("/login");
      }
    })
  };

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
          />
        <InputUsuario
          valor ={senha}
            type = { hide ? 'text'  : 'password'}
            value = { senha }
            onChange={(e) => [setSenha(e.target.value), setErr("")]}
            label = { "Senha" }
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
