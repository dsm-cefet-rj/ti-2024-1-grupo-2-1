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
                                <img src="https://placehold.co/300x300" alt="Imagem" id="teste"></img>
                            </div>
                            <div className="div-info-direita">
                                <img src="https://placehold.co/100x100" alt="Imagem"></img>
                            </div>
                        </div>
                        <div className="div-responsabilidade-adocao">
                            <div className="titulo-responsabilidade">
                                <h3>Registro de Adoção</h3>
                                <span className="sublinha-responsabilidade"></span>
                            </div>
                        </div>
                    </div>
               </div>
            <Footer/>
        </div>
    );

};
