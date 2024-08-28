import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import HeaderMain from "../../components/HeaderMain";
import Footer from "../../components/Footer";
import logo from "../../assets/logopreta2.png";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addRequest } from "../../redux/pedidoAdocao/slice";
import { useSelector } from "react-redux";
import { pedidoAdocaoSchema } from "../../validations/registroPedidoAdocaoValidation";
import RadioInput from '../../components/RadioInput';
import TitlePage from "../../components/Title-Page";
import InputUsuario from "../../components/InputUsuario";

/**
 * @module Page/Registrar_PedidoAdocao
 * 
 */
/**
 * @typedef RegistroAdocao
 * @type {React.FC}
 */
/**
 * Renderiza uma página onde é feito o registro do pedido de adoção
 * @returns {React.FC} - Componente
 */

const RegistroAdocao = () => {
  const { animals } = useSelector((rootReducer) => rootReducer.animalReducer);
  // const { error } = useSelector((rootReducer) => rootReducer.animalReducer)
  // const { status } = useSelector((rootReducer) => rootReducer.animalReducer)
  const dispatch = useDispatch();

  const [nomeAnimal, setNomeAnimal] = useState("");
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState("");
  const [cel, setCel] = useState("");
  const { id } = useParams();

  const [q1, setQ1] = useState();
  const [q2, setQ2] = useState("");
  const [q3, setQ3] = useState("");
  const [q4, setQ4] = useState("");
  const [q5, setQ5] = useState("");
  //const [arquivos, setArquivos] = useState([null, null, null]);


 /**
  * @function formatName - Função que realiza a formataçao do nome para que as letras 
  * iniciais sejam maiusculas
  * @param {string} name - valor da variavel a ser formatada
 * @returns {string} - Nome formatado
  */
  function formatName(name) {
    if (!name) return "";
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  }
  
  const animal =
    animals &&
    animals.filter((animal) => {
      if (id === animal.id) return animal;
    });
  /**
   * @function handleConfirm - Função que realiza o registro do pedido de adoção
   * @param {*} e - Evento 
   * 
  */
 const handleConfirm = async (e) => {
   e.preventDefault();
   
   const isValid = await pedidoAdocaoSchema.isValid({ email });
   
   if (!nomeAnimal | !nome | !cpf | !rg | !email | !idade | !cel) {
     alert("Preencha todos os campos!");
     return;
    }
    
    if (!isValid) {
      alert("Email Inválido");
      return;
    }
    
    dispatch(
      addRequest({
        idAnimal: id,
        nomeAnimal: nomeAnimal,
        idadeAnimal:animal[0].idade,
        imgAnimal:animal[0].img,
        tipoAnimal:animal[0].tipo,
        porteAnimal:animal[0].porte,
        sexoAnimal:animal[0].sexo,
        //rgaAnimal: rga,
        nomeAdotante: nome,
        cpfAdotante: cpf,
        rgAdotante: rg,
        emailAdotante: email,
        idadeAdotante: idade,
        celAdotante: cel,
        pergunta1: q1,
        pergunta2: q2,
        pergunta3: q3,
        pergunta4: q4,
        pergunta5: q5,
        status: "pending",
        //arquivos: arquivos
      })
    );
    navigate(`/`);
    {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    alert("Pedido de adoção realizado");
  };

    const items=[
      {value: true, label: "Sim"},
      {value: false, label: "Não"}
    ];

  return (
    <div>
      <HeaderMain />
      <div className="div-container">
        <TitlePage text="Registro de Pedido de Adoção"/>
        <div className="div-principal">
          <div className="div-informacoes">
            <div className="div-info-esquerda">
              <img
                src={animal && animal[0] && animal[0].img}
                alt="Imagem"
                id="teste"
              ></img>
              <div className="div-inputs-esquerda">
            
                <InputUsuario
                valor={nomeAnimal}
                type={"name"}
                value={nomeAnimal}
                onChange={(e) => [setNomeAnimal(e.target.value)]}
                label={"Nome do animal"}
                // error={err}
              />
              <InputUsuario
                valor={email}
                type={"email"}
                value={email}
                onChange={(e) => [setEmail(e.target.value)]}
                label={"Email do Adotante"}
                // error={err}
              />
              </div>
            </div>
            <div className="div-info-direita">
              <div>
                <img src={logo} alt="Imagem"></img>
              </div>
              <div className="div-inputs-direita">
              <InputUsuario
                valor={nome}
                type={"name"}
                value={nome}
                onChange={(e) => [setNome(e.target.value)]}
                label={"Nome do Adotante"}
                // error={err}
              />
                <InputUsuario
                valor={idade}
                type={"text"}
                value={idade}
                onChange={(e) => [setIdade(e.target.value)]}
                label={"idade do adotante"}
                // error={err}
              />
              <InputUsuario
                valor={cpf}
                type={"text"}
                value={cpf}
                onChange={(e) =>  {
                  const cpfMask = e.target.value
                    .replace(/\D/g, "")
                    .replace(/(\d{3})(\d)/, "$1.$2")
                    .replace(/(\d{3})(\d)/, "$1.$2")
                    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
                    .replace(/(-\d{2})(\d+?$)/, "$1");
                  setCpf(cpfMask);
                }}
                label={"CPF do Adotante"}
                // error={err}
              />
              <InputUsuario
                valor={rg}
                type={"name"}
                value={rg}
                onChange={(e) => [setRg(e.target.value)]}
                label={"rg do adotante"}
                // error={err}
              />
                <InputUsuario
                valor={cel}
                type={"name"}
                value={cel}
                onChange={(e) => {
                  const formattedTel = e.target.value
                    .replace(/\D/g, "")
                    .replace(/(\d{2})(\d)/, "($1) $2")
                    .replace(/(\d{5})(\d{1,2})/, "$1-$2")
                    .replace(/(-\d{4})(\d+?$)/, "$1");

                  setCel(formattedTel);
                }}
                label={"Telefone (Celular)"}
                // error={err}
              />
              </div>
            </div>
          </div>
          <div className="div-responsabilidade-adocao">
            <div className="titulo-responsabilidade">
              <h3>Responsabilidade de Adoção</h3>
              <span className="sublinha-responsabilidade"></span>
              <div className="div-inputs-responsabilidade">
                <div className="div-pergunta">
                  <span>
                    1. Quem será o responsável pelo cuidado do animal?
                  </span>
                  <div>
                    <input
                      type="text"
                      onChange={(e) => {
                        setQ1(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="div-pergunta">
                  <span>
                    2. Animais que não tem acesso à rua vivem 15 anos ou mais.
                    Você está pronto para esse compromisso e responsabilidade de
                    longo prazo?
                  </span>
                  <div style={{display:"flex",marginLeft:"45%"}}>
                      <RadioInput
                        name="questao2"
                        items={items}
                        value={q2}
                        onChange={(e)=>[setQ2(e.target.value)]}
                      />

                  </div>
                </div>
                <div className="div-pergunta">
                  <span>
                    3. Os animais precisam de cuidados com higiene, boa
                    alimentação e atendimento veterinário. Você tem como
                    providenciar isso?
                  </span>
                  <div style={{display:"flex", marginLeft:"45%"}}>
                      <RadioInput
                        name="questao3"
                        items={items}
                        value={q3}
                        onChange={(e)=>[setQ3(e.target.value)]}
                      />

                </div>
                </div>
                <div className="div-pergunta">
                  <span>4. Você já tem um médico veterinário?</span>
                  <div style={{display:"flex", marginLeft:"45%"}}>
                    <RadioInput
                      name="questao4"
                      items={items}
                      value={q4}
                      onChange={(e)=>[setQ4(e.target.value)]}
                    />

            </div>
                </div>
                <div className="div-pergunta">
                  <span>
                    5. Em caso de emergência, tem como levar seu animal
                    imediatamente ao veterinário?
                  </span>
                  <div style={{display:"flex", marginLeft:"45%"}}>
                      <RadioInput
                        name="questao5"
                        items={items}
                        value={q5}
                        onChange={(e)=>[setQ5(e.target.value)]}
                      />

            </div>
                </div>
              </div>
            </div>
          </div>
          <div className="div-btn-registrar-adocao">
            <input
              type="button"
              value="REGISTRAR PEDIDO"
              id="btn-registar-adocao"
              onClick={handleConfirm}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RegistroAdocao