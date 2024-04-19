import React, { useState } from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash  } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { fetchUserByEmail, logIn } from "../../redux/user/slice";
import { Layout } from "../../components/Layoutform";

export const Login = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [err, setErr] = useState("");

  const[hide , setHide] = useState(false);

  const visualizar_senha = () => {
    setHide(!hide)    
}

  const navigate = useNavigate();


    //const foundUser = userDB.find((conta) => conta.email === email && conta.senha === senha);
    /*
    if(foundUser){
      dispatch(logIn(foundUser));
      alert("Logado com sucesso");
      navigate("/");
    }
    else{
      e.preventDefault();
      setErr("Verifique os dados inserido!");
    }
    */
  
  const handleLogin = (e) => {
    if (!email | !senha) {
      e.preventDefault();
      setErr("Preencha todos os campos");
      return;
    }
    e.preventDefault();
    dispatch(fetchUserByEmail({ email, senha })).then((result) => {
      if (result.payload) {
        alert('Usuário Logado!');
        navigate("/");
      } else {
        setErr("E-mail ou senha inválidos!")
      }
    }).catch((err) => {
      console.log("Error fetching user: ", err)
    });
  };
  return (
    <Layout>
      <form className="login-form">
        <span className="tittle">Seja Bem Vindo</span>
        <div className="wrap-input">
          <input
            className={email !== "" ? "has-val input" : "input"}
            type="email"
            value={email}
            onChange={(e) => [setEmail(e.target.value), setErr("")]}
          />
          <span className="focus-input" data-placeholder="Email"></span>
        </div>
        <div className="wrap-input">
          <input
            className={senha !== "" ? "has-val input" : "input"}
            type={hide ? 'text'  : 'password'}
            value={senha}
            onChange={(e) => [setSenha(e.target.value), setErr("")]}
          />
          <span className="focus-input" data-placeholder="Senha"></span>
          {hide ? (<FaEyeSlash onClick={visualizar_senha} className="olho"/>):(<FaEye onClick={visualizar_senha} className="olho"/>)}
        </div>
        <label className="erro">{err}</label>
        <div className="container-login-botao">
          <button className="botao-form" onClick={handleLogin}>
            Login
          </button>
        </div>

        <div className="text-center">
          <span className="txt1">Não possui conta?</span>
          <Link className="txt2" to={"/cadastrar"}>
            Criar conta.
          </Link>
        </div>
      </form>
    </Layout>
  );
};
