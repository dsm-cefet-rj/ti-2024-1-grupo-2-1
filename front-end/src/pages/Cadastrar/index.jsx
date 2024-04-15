import React, { useState } from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import { Layout } from "../../components/Layoutform";
import { useSelector, useDispatch } from "react-redux";
import { addUserServer, signUp } from "../../redux/user/slice";

export const Cadastrar = () => {

  const { userDB } = useSelector(rootReducer => rootReducer.userReducer);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [err, setErr] = useState("");

  const navigate = useNavigate();

  // Lida ao apertar o botão de signUp
  const handleSignUp = (e) => {
    // Caso um dos states (email, senha, nome) esteja vazio, setamos Err com a mensagem de erro
    if (!email | !senha | !nome) {
      e.preventDefault();
      setErr("Preencha todos os campos");
      return; // Retornamos para não continuar a execução
    }

    //Caso a execução passe do if's, realizamos o dispatch para o cadastro do usuário
    dispatch(addUserServer({nome, email, senha}));

    //const found = userDB.find((object) => object.email === email);

    navigate("/login");
    /*if(){
    alert("Usuario cadastrado com sucesso!");
    }
    else{
      e.preventDefault();
      setErr("Email já existente");
    }
    */
  };

  return (
    <Layout>
      <form className="register-form">
        <span className="tittle-r">Fazer cadastro</span>
        <div className="wrap-input-r">
          <input
            className={nome !== "" ? "has-val input" : "input"}
            type="name"
            value={nome}
            onChange={(e) => [setNome(e.target.value), setErr("")]}
          />
          <span className="focus-input" data-placeholder="Nome"></span>
        </div>
        <div className="wrap-input-r">
          <input
            className={email !== "" ? "has-val input" : "input"}
            type="email"
            value={email}
            onChange={(e) => [setEmail(e.target.value), setErr("")]}
          />
          <span className="focus-input" data-placeholder="Email"></span>
        </div>
        <div className="wrap-input-r">
          <input
            className={senha !== "" ? "has-val input" : "input"}
            type="password"
            value={senha}
            onChange={(e) => [setSenha(e.target.value), setErr("")]}
          />
          <span className="focus-input" data-placeholder="Senha"></span>
        </div>
        <label>{err}</label>
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
