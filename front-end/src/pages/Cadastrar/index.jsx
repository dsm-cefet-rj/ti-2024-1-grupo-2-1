import React, { useState } from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import { Layout } from "../../components/Layoutform";
import { useDispatch } from "react-redux";
import { addUserServer, emailExistServer } from "../../redux/user/slice";
import { InputUsuario } from "../../components/InputUsuario";
import {SuccessMessage} from "../../components/SuccessMessage";

export const Cadastrar = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [err, setErr] = useState("");
  const [errE, setErrE] = useState("");
  const [errP, setErrP] = useState("");
  const [success, setSuccess] = useState("");
  

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!email || !senha || !nome) {
      e.preventDefault();
      if (!nome) {
        setErr("Preencha todos os campos");
        if (!email) {
          setErrE("Preencha todos os campos");
          if (!senha) {
            setErrP("Preencha todos os campos");
            return;
          }
          return;
        }
        return;
      }
      if (!email) {
        setErrE("Preencha todos os campos");
        if (!senha) {
          setErrP("Preencha todos os campos");
          return;
        }
        return;
      }
      if (!senha) {
        setErrP("Preencha todos os campos");
        return;
      }
    }

    dispatch(emailExistServer(email)).then((result) => {
      if (result.payload) {
        setErrE("Este e-mail já está cadastrado");
        return;
      }

      if (!isEmailValid(email)) {
        if (!isPasswordValid(senha, 5)) return;

        return;
      }
      if (!isPasswordValid(senha, 5)) return;
      else {
        dispatch(addUserServer({ nome, email, senha }));
        // alert("Usuário cadastrado com sucesso!");
        setSuccess("Usuário cadastrado com sucesso!");
        setTimeout(() => {
          setSuccess("");
        }, 3000);
        setTimeout(()=>{
          navigate("/login");
        },2000)
      }
    });
  };

  const isEmailValid = (email) => {
    const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

    if (emailRegex.test(email)) {
      return true;
    } else {
      setErrE("Preencha o email de maneira correta.");
      return false;
    }
  };

  const isPasswordValid = (password, minDigits) => {
    if (password.length >= minDigits) {
      return true;
    } else {
      setErrP("A senha precisa de no mínimo 5 digitos");
      return false;
    }
  };

  return (
    <Layout>
      <form id="form" className="register-form">
        <span className="tittle-r">Fazer cadastro</span>
        <InputUsuario
          valor={nome}
          type={"name"}
          value={nome}
          onChange={(e) => [setNome(e.target.value), setErr("")]}
          label={"Nome"}
          error={err}
        />

        <InputUsuario
          valor={email}
          type={"email"}
          value={email}
          onChange={(e) => [
            setEmail(e.target.value),
            isEmailValid,
            setErrE(""),
            setErr(""),
          ]}
          label={"Email"}
          error={errE}
        />
        <InputUsuario
          valor={senha}
          type={"password"}
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setErrP(""), setErr("")]}
          label={"Senha"}
          error={errP}
        />
        <div className="container-register-botao">
          <button className="botao-form" onClick={handleSignUp}>
            Cadastre-se
          </button>
        </div>
        {/* <label className="erro">{err}</label> */}
        <SuccessMessage text={success}/>

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
