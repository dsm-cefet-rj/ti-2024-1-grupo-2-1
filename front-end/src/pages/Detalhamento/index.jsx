import HeaderMain from "../../components/HeaderMain";
import Footer from "../../components/Footer";
import "./index.css";

export const Detalhamento = () => {

    const url = "https://via.placeholder.com/750x500";

    return (
        <div>
            <HeaderMain/>
                <div className="divBody">
                    <div className="divEsquerda">
                        <img src={url} alt="Imagem do Animal"></img>
                    </div>
                    <div className="divDireita">
                        <div className="nomeAnimal">
                            <h1>Nome do Animal</h1>
                        </div>
                        <div className="statusAnimal">
                            <h2>Localização do Animal:</h2>
                            <h2>Publicador:</h2>
                            <h2>Acessos à página:</h2>
                        </div>
                        <div className="historiaAnimal">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, eaque!</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, eaque!</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, eaque!</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, eaque!</p>
                        </div>
                        <div className="botaoAdotar">
                            <input type="button" value="QUERO ADOTAR" id="botaoQueroAdotar"/>
                        </div>
                    </div>
                </div>
            <Footer/>
        </div>
    );

};

export default Detalhamento;
