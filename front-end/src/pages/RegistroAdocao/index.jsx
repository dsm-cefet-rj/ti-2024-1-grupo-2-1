import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import HeaderMain from "../../components/HeaderMain";
import Footer from "../../components/Footer";
import logo from "../../assets/logopreta2.png";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addRequest } from "../../redux/pedidoAdocao/slice";
import { useSelector } from "react-redux";

export const RegistroAdocao = () => {
  const { animals } = useSelector((rootReducer) => rootReducer.animalReducer)
  const { error } = useSelector((rootReducer) => rootReducer.animalReducer)
  const { status } = useSelector((rootReducer) => rootReducer.animalReducer)
  const dispatch = useDispatch();

  const [nomeAnimal, setNomeAnimal] = useState("");
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [rga, setRga] = useState("");
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState("");
  const [cel, setCel] = useState("");
  const { id } = useParams();
  
  const [q1, setQ1] = useState();
  const [q2, setQ2] = useState();
  const [q3, setQ3] = useState();
  const [q4, setQ4] = useState();
  const [q5, setQ5] = useState();
  //const [arquivos, setArquivos] = useState([null, null, null]);


  function formatName(name) {
    if (!name) return "";
    name = name.trim("");
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  }

  
  const handleConfirm = (e) => {
    e.preventDefault();
    dispatch(addRequest({idAnimal: id, 
    nomeAnimal: nomeAnimal,
    //rgaAnimal: rga,
    nomeAdotante: nome,
    cpfAdotante: cpf,
    rgAdotante: rg,
    emailAdotante: email,
    idadeAdotante: idade,
    pergunta1: q1,
    pergunta2: q2,
    pergunta3: q3,
    pergunta4: q4,
    pergunta5: q5,
    //arquivos: arquivos
    }));
    navigate(`/`);
    {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    alert("Pedido de adoção realizado");
  };

  const animais =
   animals &&
   animals
   .filter((animal) => {
    if(id === animal.id) return animal
   }); 
  /*
  const handleArquivosAnexados = (files) => {
    const fileList = Array.from(files).slice(0, 3); // Limita a seleção a 3 arquivos
  
    // Converter os arquivos para base64
    const arquivosBase64 = fileList.map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result.split(',')[1]);
        reader.onerror = (error) => reject(error);
      });
    });
  
    Promise.all(arquivosBase64)
      .then((result) => {
        setArquivos(result);
      })
      .catch((error) => {
        console.error('Erro ao converter arquivos:', error);
      });
  };
  */
  

  const linkTermoAdocao =
    "https://pt.scribd.com/document/331088569/Termo-de-Adocao-de-Caes";

  return (
    <div>
      <HeaderMain />
      <div className="div-container">
        <div className="title-registro-adocao-container">
          <h1>Registro de Pedido de Adoção</h1>
          <span className="sublinha-favoritos"></span>
        </div>
        <div className="div-principal">
          <div className="div-informacoes">
            <div className="div-info-esquerda">
              <img src={animais && animais[0] && animais[0].img} alt="Imagem" id="teste"></img>
              <div className="div-inputs-esquerda">
                <div className="wraper-input-r">
                  <input
                    className={nomeAnimal !== "" ? "has-val input" : "input"}
                    type="name"
                    value={nomeAnimal}
                    onChange={(e) => [
                      setNomeAnimal(formatName(e.target.value)),
                    ]}
                  />
                  <span
                    className="focused-input"
                    data-placeholder="Nome do animal"
                  ></span>
                </div>
                {/*
                <div className="wraper-input-r">
                  <input
                    className={rga !== "" ? "has-val input" : "input"}
                    type="text"
                    value={rga}
                    onChange={(e) => [setRga(e.target.value)]}
                  />
                  <span
                    className="focused-input"
                    data-placeholder="RGA do Animal"
                  ></span>
                </div>
                */}
                <div className="wraper-input-r">
                  <input
                    className={email !== "" ? "has-val input" : "input"}
                    type="email"
                    value={email}
                    onChange={(e) => [setEmail(e.target.value)]}
                  />
                  <span
                    className="focused-input"
                    data-placeholder="Email do adotante"
                  ></span>
                </div>
              </div>
            </div>
            <div className="div-info-direita">
              <div>
                <img src={logo} alt="Imagem"></img>
              </div>
              <div className="div-inputs-direita">
                <div className="wraper-input-r">
                  <input
                    className={nome !== "" ? "has-val input" : "input"}
                    type="name"
                    value={nome}
                    onChange={(e) => [setNome(e.target.value)]}
                  />
                  <span
                    className="focused-input"
                    data-placeholder="Nome do adotante"
                  ></span>
                </div>
                <div className="wraper-input-r">
                  <input
                    className={idade !== "" ? "has-val input" : "input"}
                    type="name"
                    value={idade}
                    onChange={(e) => [setIdade(e.target.value)]}
                  />
                  <span
                    className="focused-input"
                    data-placeholder="Idade do adotante"
                  ></span>
                </div>
                <div className="wraper-input-r">
                  <input
                    className={cpf !== "" ? "has-val input" : "input"}
                    type="text"
                    value={cpf}
                    onChange={(e) => {
                      const cpfMask = e.target.value
                        .replace(/\D/g, "")
                        .replace(/(\d{3})(\d)/, "$1.$2")
                        .replace(/(\d{3})(\d)/, "$1.$2")
                        .replace(/(\d{3})(\d{1,2})/, "$1-$2")
                        .replace(/(-\d{2})(\d+?$)/, "$1");
                      setCpf(cpfMask);
                    }}
                  />
                  <span
                    className="focused-input"
                    data-placeholder="CPF do adotante"
                  ></span>
                </div>
                <div className="wraper-input-r">
                  <input
                    className={rg !== "" ? "has-val input" : "input"}
                    type="text"
                    value={rg}
                    onChange={(e) => [setRg(e.target.value)]}
                  />
                  <span
                    className="focused-input"
                    data-placeholder="Rg do adotante"
                  ></span>
                </div>
                <div className="wraper-input-r">
                  <input
                    className={cel !== "" ? "has-val input" : "input"}
                    type="tel"
                    value={cel}
                    onChange={(e) => {
                      const formattedTel = e.target.value
                        .replace(/\D/g, "")
                        .replace(/(\d{2})(\d)/, "($1) $2")
                        .replace(/(\d{5})(\d{1,2})/, "$1-$2")
                        .replace(/(-\d{4})(\d+?$)/, "$1");

                      setCel(formattedTel);
                    }}
                  />
                  <span
                    className="focused-input"
                    data-placeholder="Telefone celular"
                  ></span>
                </div>
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
                    <input type="text" onChange={(e) => {setQ1(e.target.value)}}/>
                  </div>
                </div>
                <div className="div-pergunta">
                  <span>
                    2. Animais que não tem acesso à rua vivem 15 anos ou mais.
                    Você está pronto para esse compromisso e responsabilidade de
                    longo prazo?
                  </span>
                  <div>
                    <span>Sim</span>
                    <input type="radio" name="q2" value={true} onChange={(e) => {setQ2(e.target.value)}}/>
                    <span>Não</span>
                    <input type="radio" name="q2" value={false} onChange={(e) => {setQ2(e.target.value)}}/>
                  </div>
                </div>
                <div className="div-pergunta">
                  <span>
                    3. Os animais precisam de cuidados com higiene, boa
                    alimentação e atendimento veterinário. Você tem como
                    providenciar isso?
                  </span>
                  <div>
                    <span>Sim</span>
                    <input type="radio" name="q3" value={true} onChange={(e) => {setQ3(e.target.value)}}/>
                    <span>Não</span>
                    <input type="radio" name="q3" value={false} onChange={(e) => {setQ3(e.target.value)}}/>
                  </div>
                </div>
                <div className="div-pergunta">
                  <span>4. Você já tem um médico veterinário?</span>
                  <div>
                    <span>Sim</span>
                    <input type="radio" name="q4" value={true} onChange={(e) => {setQ4(e.target.value)}}/>
                    <span>Não</span>
                    <input type="radio" name="q4" value={false} onChange={(e) => {setQ4(e.target.value)}}/>
                  </div>
                </div>
                <div className="div-pergunta">
                  <span>
                    5. Em caso de emergência, tem como levar seu animal
                    imediatamente ao veterinário?
                  </span>
                  <div>
                    <span>Sim</span>
                    <input type="radio" name="q5" value={true} onChange={(e) => {setQ5(e.target.value)}}/>
                    <span>Não</span>
                    <input type="radio" name="q5" value={false} onChange={(e) => {setQ5(e.target.value)}}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="div-documentos">
            <a href={linkTermoAdocao} target="_blank">
              Baixe aqui o termo de adoção
            </a>
            <div>
              <span>
                Anexe o termo de adoção, identidade e comprovante de residência:{" "}
              </span>
              <input type="file" multiple /*onChange={(e) => handleArquivosAnexados(e.target.files)}*/></input>
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
