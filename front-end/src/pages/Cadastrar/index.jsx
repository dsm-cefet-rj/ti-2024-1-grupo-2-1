import React, { useState } from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import  Layout  from "../../components/Layoutform";
import { useDispatch } from "react-redux";
import { addUserServer, emailExistServer } from "../../redux/user/slice";
import  InputUsuario  from "../../components/InputUsuario";
import SuccessMessage from "../../components/SuccessMessage";
import * as Yup from 'yup'
import { createEntryAtFavoriteCollection } from "../../redux/Favoritos/slice";

/**
 * @module Page/Cadastro
 * 
 */
/**
 * @typedef Cadastrar
 * @type {React.FC}
 */
/**
 * Renderiza uma pagina de cadastro de usuário.
 * @returns {React.FC} - Página de detalhamento do animal
 */

const Cadastrar = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const formData ={
    nome: nome,
    email: email,
    senha: senha,
}

  const validationSchema = Yup.object().shape({
    nome: Yup.string().required('Nome é obrigatório'),
    email: Yup.string().email('Email inválido').required('Email é obrigatório'),
    senha: Yup.string()
      .min(5,   
   'A senha deve ter no mínimo 5 caracteres')
      .required('Senha é obrigatória'),
  });
  

  const navigate = useNavigate();

  /**
   * @function handleSignUp -Função que realizará o cadastro do usuário
   * @param {*} e -Evento
   * 
   */
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
  const handleSignUp = async(e) => {
    e.preventDefault();
    console.log(formData);
    try {
      await validationSchema.validate(
        {nome,email,senha,},{ abortEarly: false}
      );
      setErrors({});
      console.log(formData);
      
      dispatch(emailExistServer(email))
      dispatch(addUserServer(formData));
      dispatch(createEntryAtFavoriteCollection({email}));
        setSuccess("Usuário cadastrado com sucesso!");
        setTimeout(() => {
          setSuccess("");
        }, 1000);
        setTimeout(()=>{
          navigate("/login");
        },1000)
    }catch(err){
        setErrors(ERROR(err.errors));
      }

      /*
      if (result.payload) {
        setErrE("Este e-mail já está cadastrado");
        return;
        }
        */ 
  
    
  };
  return (
    <Layout>
      <form id="form" className="register-form" onSubmit={(formData)=>{handleSignUp(formData)}}>
        <span className="tittle-r">Fazer cadastro</span>
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
          type={"text"}
          value={email}
          onChange={(e) => [
            setEmail(e.target.value)
          ]}
          label={"Email"}
          error={errors.email}
        />
        <InputUsuario
          valor={senha}
          type={"password"}
          value={senha}
          onChange={(e) => [setSenha(e.target.value)]}
          label={"Senha"}
          error={errors.senha}
        />
        <div className="container-register-botao">
          <button className="botao-form" type="submit">
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

export default Cadastrar