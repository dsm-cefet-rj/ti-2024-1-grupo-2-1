import HeaderMain from "../../components/HeaderMain";
import Footer from "../../components/Footer";
import "./index.css";
import Breadcrumb from 'react-bootstrap/Breadcrumb';


export const Detalhamento = () => {

    const nomeAnimal = "Raposa"
    const url = "https://via.placeholder.com/750x500";

    return (
        <div>
            <HeaderMain/>
                <div className="divBody">
                    <div className="divEsquerda">
                        <div className="navegacao">
                            <Breadcrumb>
                                <Breadcrumb.Item href="/">Pricipal</Breadcrumb.Item>
                                <Breadcrumb.Item href="#">Detalhamento do Animal</Breadcrumb.Item>
                                <Breadcrumb.Item href="#">{nomeAnimal}</Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                        <img src={url} alt="Imagem do Animal" className="imagemAnimal"></img>
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
