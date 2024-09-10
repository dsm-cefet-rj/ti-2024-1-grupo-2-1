import React, { useEffect, useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import HeaderMain from "../../components/HeaderMain";
import Footer from "../../components/Footer";
import {
  updateUsers,
  emailExistServer,
  //fetchUserByEmail,
  fetchUser,
  deleteUser,
  logOut,
} from "../../redux/user/slice";
import { useSelector, useDispatch } from "react-redux";
import  InputUsuario  from "../../components/InputUsuario";
import TitlePage from "../../components/Title-Page";
import { validationUserSchema } from "../../validations/UpdateUsuario";
import { cleanArray, deleteUserEntryAtFavoriteCollection, modifyUserEmailAtFavoriteCollection, testeCleanArrayAsync } from "../../redux/Favoritos/slice";
import ErrorMessage from "../../components/Error";

/**
 * @module Page/Update_Usuario
 * 
 */
/**
 * @typedef UpdateUsuario
 * @type {React.FC}
 */
/**
 * Renderiza uma pagina onde é feita a atualização das informações do usuário.
 * @returns {React.FC} - Componente
 */

const UpdatePerfil = () => {
  const [email, setEmail] = useState("");
  const [oldEmail, setOldEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [erro, setErro] = useState("");
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer);
  const { status } = useSelector((rootReducer) => rootReducer.userReducer);
  const { entities } = useSelector((rootReducer) => rootReducer.userReducer);
  

  useEffect(() => {
    setNome(currentUser.nome);
    setEmail(currentUser.email);
    setSenha(currentUser.senha);
    setOldEmail(currentUser.email);
  }, [currentUser]);

  useEffect(() => {
    if (status === "saved") {
      dispatch(fetchUser());
      //dispatch(fetchUserByEmail(currentUser.id));
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
  const ERROR = (erro) =>{
    let erroE;
    let erroN;
    let erroS;
    erro.map((err)=>{
      if(err.toLowerCase().includes("nome")){
        erroN = err;
      }else if(err.toLowerCase().includes("email")){
        erroE = err;
      } else if(err.toLowerCase().includes("senha")){
        erroS = err;
      }
    })
    return {
      nome: erroN,
      email: erroE,
      senha: erroS
    }

  }
 /**
   * @function handleUpdate -Função responsavel por atualizar as informações do usuário
   * @param {*} e - Evento
   */
  const handleUpdate = async(e) => {
    e.preventDefault();

    const id = currentUser.id;

    try{
        await validationUserSchema.validate(
        {nome,email,senha,},{ abortEarly: false}
      );
      setErrors({});

      dispatch(emailExistServer(email)).then((result) => {
        if (result.payload) {
          if (email === currentUser.email) {
          } else {
            setErro("Este e-mail já está cadastrado");
            return;
          }
        }
        else {
          dispatch(updateUsers({ id, nome, email, senha }));
          dispatch(modifyUserEmailAtFavoriteCollection({email: oldEmail, newEmail: email}))
          alert("Informações do usuário atualizadas!");
          logOut();
          navigate("/login");
        }
      });
    }catch(err){
      console.error("Erro durante a atualização:", err.errors)
      setErrors(ERROR(err.errors));
    }

  };

   /**
   * @function handleRemove - Função responsavel por excluir a conta do usuário
   * @param {*} e - Evento
   */
  const handleRemove = () => {
    const id = currentUser.id;
    navigate("/");
    dispatch(deleteUser(id)).then((resposta) => {
      if (resposta.payload) {
        
        dispatch(deleteUserEntryAtFavoriteCollection({email: oldEmail}));
        dispatch(logOut());
        window.location.reload();
      }
    });
  };

  return (
    <div>
      <HeaderMain />
        <div className="div-container-Att_Perfil">
          <TitlePage text="Informações da Conta"/>

          <div className="visualizaçao-de-form">
            <form className="Atualizaçao_User" onSubmit={handleUpdate}>
              <InputUsuario
                valor={nome}
                type={"name"}
                value={nome}
                onChange={(e) => [setNome(e.target.value)]}
                label={"Nome"}
                error={errors.nome}
              />

              <InputUsuario
                valor={email}
                type={"email"}
                value={email}
                onChange={(e) => [
                  setEmail(e.target.value),
                ]}
                label={"Email"}
                error={errors.email}
              />
              <InputUsuario
                valor={senha}
                type={"password"}
                value={senha}
                onChange={(e) => [
                  setSenha(e.target.value)
                ]}
                label={"Senha"}
                error={errors.senha}
              />

              <button className="edit_botao" type="submit">
                Editar informações
              </button>
            </form>
            <button className="excluir_botao" onClick={handleRemove}>
              Excluir conta
            </button>
            <div style={{display:"flex"}}>
                  <ErrorMessage text={erro}/>
            </div>
          </div>
        </div>

      <Footer />
    </div>
  );
};

export default UpdatePerfil;
