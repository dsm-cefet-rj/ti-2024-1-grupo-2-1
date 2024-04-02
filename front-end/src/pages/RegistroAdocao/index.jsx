import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css"
import HeaderMain from "../../components/HeaderMain";
import Footer from "../../components/Footer";
import logo from "../../assets/logopreta2.png"
import animal from "../../components/Animal/animal";
import { useParams } from "react-router-dom";


export const RegistroAdocao = () => {
    const [nomeAnimal, setNomeAnimal] = useState("");
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [rga, setRga] = useState("");
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState("");
    const [cpf, setCpf] = useState("");
    const [rg, setRg] = useState("");
    const [cel, setCel] = useState("");
    const { id } = useParams()
    const [animais, setAnimais] = useState([]);
    const getAnimal = async () => {
        try { // Verifica se o animal com o ID fornecido existe
            console.log(animal);
            setAnimais(Object.values(animal));

        } catch (error) {
            console.error('Erro ao buscar a receita: ', error);
        }
    };

    useEffect(() => {
        getAnimal();
    }, [id]);
    const handleConfirm= (e)=>{
        e.preventDefault()
        navigate(`/`);
        {window.scrollTo({ top: 0, behavior: 'smooth' })}
        alert("Pedido de adoção realizado")
    }

    const linkTermoAdocao = "https://pt.scribd.com/document/331088569/Termo-de-Adocao-de-Caes";

    return (
        <div>
            <HeaderMain />
            <div className="div-container">
                <div className="title-registro-adocao-container">
                    <h1>Registro de Adoção</h1>
                    <span className="sublinha-favoritos"></span>
                </div>
                <div className="div-principal">
                    <div className="div-informacoes">
                        <div className="div-info-esquerda">
                            <img src={animal[id].img} alt="Imagem" id="teste"></img>
                            <div className="div-inputs-esquerda">
                                <div className="wraper-input-r">
                                    <input
                                        className={nomeAnimal !== "" ? 'has-val input' : 'input'}
                                        type="name"
                                        value={nomeAnimal}
                                        onChange={(e) => [setNomeAnimal(e.target.value)]} />
                                    <span className="focused-input" data-placeholder="Nome do animal"></span>
                                </div>
                                <div className="wraper-input-r">
                                    <input
                                        className={rga !== "" ? 'has-val input' : 'input'}
                                        type="name"
                                        value={rga}
                                        onChange={(e) => [setRga(e.target.value)]} />
                                    <span className="focused-input" data-placeholder="RGA do Animal"></span>
                                </div>
                                <div className="wraper-input-r">
                                    <input
                                        className={email !== "" ? 'has-val input' : 'input'}
                                        type="email"
                                        value={email}
                                        onChange={(e) => [setEmail(e.target.value)]} />
                                    <span className="focused-input" data-placeholder="Email do adotante"></span>
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
                                        className={nome !== "" ? 'has-val input' : 'input'}
                                        type="name"
                                        value={nome}
                                        onChange={(e) => [setNome(e.target.value)]} />
                                    <span className="focused-input" data-placeholder="Nome do adotante"></span>
                                </div>
                                <div className="wraper-input-r">
                                    <input
                                        className={idade !== "" ? 'has-val input' : 'input'}
                                        type="name"
                                        value={idade}
                                        onChange={(e) => [setIdade(e.target.value)]} />
                                    <span className="focused-input" data-placeholder="Idade do adotante"></span>
                                </div>
                                <div className="wraper-input-r">
                                    <input
                                        className={cpf !== "" ? 'has-val input' : 'input'}
                                        type="name"
                                        value={cpf}
                                        onChange={(e) => [setCpf(e.target.value)]} />
                                    <span className="focused-input" data-placeholder="CPF do adotante"></span>
                                </div>
                                <div className="wraper-input-r">
                                    <input
                                        className={rg !== "" ? 'has-val input' : 'input'}
                                        type="name"
                                        value={rg}
                                        onChange={(e) => [setRg(e.target.value)]} />
                                    <span className="focused-input" data-placeholder="Rg do adotante"></span>
                                </div>
                                <div className="wraper-input-r">
                                    <input
                                        className={cel !== "" ? 'has-val input' : 'input'}
                                        type="name"
                                        value={cel}
                                        onChange={(e) => [setCel(e.target.value)]} />
                                    <span className="focused-input" data-placeholder="Telefone celular"></span>
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
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className="div-pergunta">
                                    <span>
                                        2. Animais que não tem acesso à rua vivem 15 anos ou mais.
                                        Você está pronto para esse compromisso e responsabilidade de longo prazo?
                                    </span>
                                    <div>
                                        <span>Sim</span>
                                        <input type="radio" name="q2" />
                                        <span>Não</span>
                                        <input type="radio" name="q2" />
                                    </div>
                                </div>
                                <div className="div-pergunta">
                                    <span>
                                        3. Os animais precisam de cuidados com higiene, boa alimentação e
                                        atendimento veterinário. Você tem como providenciar isso?
                                    </span>
                                    <div>
                                        <span>Sim</span>
                                        <input type="radio" name="q3" />
                                        <span>Não</span>
                                        <input type="radio" name="q3" />
                                    </div>
                                </div>
                                <div className="div-pergunta">
                                    <span>
                                        4. Você já tem um médico veterinário?
                                    </span>
                                    <div>
                                        <span>Sim</span>
                                        <input type="radio" name="q4" />
                                        <span>Não</span>
                                        <input type="radio" name="q4" />
                                    </div>
                                </div>
                                <div className="div-pergunta">
                                    <span>
                                        5. Em caso de emergência, tem como levar seu animal imediatamente
                                        ao veterinário?
                                    </span>
                                    <div>
                                        <span>Sim</span>
                                        <input type="radio" name="q5" />
                                        <span>Não</span>
                                        <input type="radio" name="q5" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="div-documentos">
                        <a href={linkTermoAdocao} target="_blank">Baixe aqui o termo de adoção</a>
                        <div>
                            <span>Anexe o termo de adoção, identidade e comprovante de residência: </span>
                            <input type="file" multiple></input>
                        </div>
                    </div>
                    <div className="div-btn-registrar-adocao">
                        <input type="button" value="REGISTRAR ADOÇÃO" id="btn-registar-adocao" onClick={handleConfirm}/>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );

};
