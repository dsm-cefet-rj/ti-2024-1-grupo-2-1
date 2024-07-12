import React, { useEffect, useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import HeaderMain from "../../components/HeaderMain";
import Footer from "../../components/Footer";
import {
  updateUsers,
  emailExistServer,
  fetchUserByEmail,
  fetchUser,
  deleteUser,
  logOut,
} from "../../redux/user/slice";
import { useSelector, useDispatch } from "react-redux";
import  InputUsuario  from "../../components/InputUsuario";
import TitlePage from "../../components/Title-Page";

const Update_Perfil = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [err, setErr] = useState("");
  const [errE, setErrE] = useState("");
  const [errP, setErrP] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer);
  const { status } = useSelector((rootReducer) => rootReducer.userReducer);
  const { entities } = useSelector((rootReducer) => rootReducer.userReducer);
  console.log(entities);

  useEffect(() => {
    setNome(currentUser.nome);
    setEmail(currentUser.email);
    setSenha(currentUser.senha);
  }, [currentUser]);

  useEffect(() => {
    if (status === "saved") {
      dispatch(fetchUser());
      dispatch(fetchUserByEmail(currentUser.id));
      entities.map((entiti) => {
        if (entiti.id === currentUser.id) {
          currentUser.nome = entiti.nome;
          currentUser.email = entiti.email;
          currentUser.senha = entiti.senha;
          console.log(entiti);
        }
      });
      window.location.reload();
    }
  });

  const handleUpdate = (e) => {
    e.preventDefault();

    const id = currentUser.id;

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
        if (email === currentUser.email) {
        } else {
          setErrE("Este e-mail já está cadastrado");
          return;
        }
      }

      if (!isEmailValid(email)) {
        if (!isPasswordValid(senha, 5)) return;

        return;
      }
      if (!isPasswordValid(senha, 5)) return;
      else {
        dispatch(updateUsers({ id, nome, email, senha }));
        alert("Informações do usuário atualizadas!");
        logOut();
        navigate("/login");
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
  const handleRemove = () => {
    const id = currentUser.id;
    navigate("/");
    dispatch(deleteUser(id)).then((resposta) => {
      if (resposta.payload) {
        dispatch(logOut());
      }
    });
  };

  return (
    <div>
      <HeaderMain />
      <div>
        <div className="title-registro-adocao-container">
          <TitlePage text="Informações da Conta"/>

          <div className="visualizaçao-de-form">
            <form className="Atualizaçao_User" onSubmit={handleUpdate}>
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
                onChange={(e) => [
                  setSenha(e.target.value),
                  setErrP(""),
                  setErr(""),
                ]}
                label={"Senha"}
                error={errP}
              />

              <button className="edit_botao" type="submit">
                Editar informações
              </button>
            </form>
            <button className="excluir_botao" onClick={handleRemove}>
              Excluir conta
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Update_Perfil;
