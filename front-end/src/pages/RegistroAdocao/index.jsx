import "./index.css"
import HeaderMain from "../../components/HeaderMain";
import Footer from "../../components/Footer";


export const RegistroAdocao = () => {

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
                                <img src="https://placehold.co/200x200" alt="Imagem"></img>
                                <div className="div-inputs-direita">
                                    <label className="labelInput-D">Nome do tutor</label>
                                    <input type="text" className="inputs-info-direita"/>
                                    <label className="labelInput-D">Idade do tutor</label>
                                    <input type="text" className="inputs-info-direita"/>
                                    <label className="labelInput-D">CPF do tutor</label>
                                    <input type="text" className="inputs-info-direita"/>
                                    <label className="labelInput-D">RG do tutor</label>
                                    <input type="text" className="inputs-info-direita"/>
                                    <label className="labelInput-D">Telefone/Celular do tutor</label>
                                    <input type="text" className="inputs-info-direita"/>
                                </div>
                            </div>
                        </div>
                        <div className="div-responsabilidade-adocao">
                            <div className="titulo-responsabilidade">
                                <h3>Responsabilidade de Adoção</h3>
                                <span className="sublinha-responsabilidade"></span>
                            </div>
                        </div>
                    </div>
               </div>
            <Footer/>
        </div>
    );

};
