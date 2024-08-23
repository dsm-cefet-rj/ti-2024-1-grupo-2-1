import React, { useState } from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/user/slice";
import  Layout  from "../../components/Layoutform";
import  InputUsuario  from "../../components/InputUsuario";
import  SuccessMessage from "../../components/SuccessMessage";
import { getUserEntryAtCollection } from "../../redux/Favoritos/slice";

/**
 * @module Page/Pagina_Login
 * 
 */
/**
 * @typedef Login
 * @type {React.FC}
 */
/**
 * Renderiza uma pagina de Login de usuário.
 * @returns {React.FC} - Componente React
 */

const Login = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [err, setErr] = useState("");
  const[success,setSuccess]=useState("");

  const navigate = useNavigate();

  /**
   * @function handleLogin - Função responsavel por realizar o login do usuario na aplicação
   * @param {*} e - Evento
   */

  const handleLogin = (e) => {
    if (!email && !senha) {
      e.preventDefault();
      setErr("Preencha todos os campos");
      return;
    } else if (email && senha == "") {
      e.preventDefault();
      setErr("Preencha a senha");
      return;
    } else if (email == "" && senha) {
      e.preventDefault();
      setErr("Preencha o email");
      return;
    }
    e.preventDefault();
    dispatch(loginUser({ email, senha }))
      .then((result) => {
        if (result.payload) {
          setSuccess("Usuário Logado!");
          setTimeout(()=>{
            setSuccess("")
          },3000)
          setTimeout(()=>{
            // dispatch(getUserEntryAtCollection(email))
            navigate("/");
          },3000)
        } else {
          setErr("E-mail ou senha inválidos!");
        }
      })
      .catch((err) => {
        console.log("Error fetching user: ", err);
        setErr("Email não cadastrado");
      });
  };
  return (
    <Layout>
      <form className="login-form">
        <span className="tittle">Seja Bem Vindo</span>
        <InputUsuario
          isLogin={true}
          valor={email}
          type={"email"}
          value={email}
          onChange={(e) => [setEmail(e.target.value), setErr("")]}
          label={"Email"}
        />
        <InputUsuario
          isLogin={true}
          valor={senha}
          type={"password"}
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setErr("")]}
          label={"Senha"}
        />
        <label className="erro">{err}</label>
        <div className="container-login-botao">
          <button className="botao-form" onClick={handleLogin}>
            Login
          </button>
        </div>
        <SuccessMessage text={success}/>

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
export default Login;