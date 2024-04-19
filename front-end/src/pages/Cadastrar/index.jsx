import React, { useState } from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash  } from "react-icons/fa";
import { Layout } from "../../components/Layoutform";
import { useSelector, useDispatch } from "react-redux";
import { addUserServer, signUp, emailExistServer} from "../../redux/user/slice";

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
    if (!email | !senha | !nome) {
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
            type={hide ? 'text'  : 'password'}
            value={senha}
            onChange={(e) => [setSenha(e.target.value), setErr("")]}
          />
          <span className="focus-input" data-placeholder="Senha"></span>
          {hide ? (<FaEyeSlash onClick={visualizar_senha} className="olho"/>):(<FaEye onClick={visualizar_senha} className="olho"/>)}
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
