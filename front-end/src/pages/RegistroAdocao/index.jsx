import "./index.css"
import HeaderMain from "../../components/HeaderMain";
import Footer from "../../components/Footer";


export const RegistroAdocao = () => {

    const linkTermoAdocao = "https://pt.scribd.com/document/331088569/Termo-de-Adocao-de-Caes";

    return (
        <div>
            <HeaderMain/>
               <div className="div-container">
                    <div className="title-registro-adocao-container">
                        <h1>Registro de Adoção</h1>
                        <span className="sublinha-favoritos"></span>
                    </div>
                    <div className="div-principal">
                        <div className="div-informacoes">
                            <div className="div-info-esquerda">
                                <img src="https://placehold.co/400x400" alt="Imagem" id="teste"></img>
                                <div className="div-inputs-esquerda">
                                    <label className="labelInput-E">Nome do animal</label>
                                    <input type="text" className="inputs-info-esquerda"/>
                                    <label className="labelInput-E">RGA do animal</label>
                                    <input type="text" className="inputs-info-esquerda"/>
                                    <label className="labelInput-E">Email do tutor</label>
                                    <input type="text" className="inputs-info-esquerda"/>
                                </div>
                            </div>
                            <div className="div-info-direita">
                                <div>
                                    <img src="https://placehold.co/200x200" alt="Imagem"></img>
                                </div>
                                <div className="div-inputs-direita">
                                    <div className="inputs-info-direita">
                                        <label>Nome do tutor</label>
                                        <input type="text"/>
                                    </div>
                                    <div className="inputs-info-direita">
                                        <label>Idade do tutor</label>
                                        <input type="text"/>
                                    </div>
                                    <div className="inputs-info-direita">
                                        <label>CPF do tutor</label>
                                        <input type="text"/>
                                    </div>
                                    <div className="inputs-info-direita">
                                        <label>RG do tutor</label>
                                        <input type="text"/>
                                    </div>
                                    <div className="inputs-info-direita">
                                        <label>Telefone/Celular do tutor</label>
                                        <input type="text"/>
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
                                            <input type="radio" name="q2"/>
                                            <span>Não</span>
                                            <input type="radio" name="q2"/>
                                        </div>
                                    </div>
                                    <div className="div-pergunta">
                                        <span>
                                            3. Os animais precisam de cuidados com higiene, boa alimentação e
                                            atendimento veterinário. Você tem como providenciar isso?
                                        </span>
                                        <div>
                                            <span>Sim</span>
                                            <input type="radio" name="q3"/>
                                            <span>Não</span>
                                            <input type="radio" name="q3"/>
                                        </div>
                                    </div>
                                    <div className="div-pergunta">
                                        <span>
                                            4. Você já tem um médico veterinário?
                                        </span>
                                        <div>
                                            <span>Sim</span>
                                            <input type="radio" name="q4"/>
                                            <span>Não</span>
                                            <input type="radio" name="q4"/>
                                        </div>
                                    </div>
                                    <div className="div-pergunta">
                                        <span>
                                            5. Em caso de emergência, tem como levar seu animal imediatamente
                                            ao veterinário?
                                        </span>
                                        <div>
                                            <span>Sim</span>
                                            <input type="radio" name="q5"/>
                                            <span>Não</span>
                                            <input type="radio" name="q5"/>
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
                            <input type="button" value="REGISTRAR ADOÇÃO" id="btn-registar-adocao" />
                        </div>
                    </div>
               </div>
            <Footer/>
        </div>
    );

};
