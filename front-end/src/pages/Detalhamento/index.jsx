import HeaderMain from "../../components/HeaderMain";
import Footer from "../../components/Footer";
import "./index.css";
import Breadcrumb from 'react-bootstrap/Breadcrumb';

export const Detalhamento = () => {

    const nomeAnimal = "Nome do Animal";
    const localizacao = "Recreio dos Bandeirantes"
    const acessos = 205;
    const publicador = "Flavio Alecio";
    const url = "https://via.placeholder.com/650x400";

    return (
        <div>
            <HeaderMain />
            <div className="divMain">
                <div className="divTopo">
                    <div className="divEsquerda">
                        <div className="navegacao">
                            <Breadcrumb>
                                <Breadcrumb.Item href="/">Pricipal</Breadcrumb.Item>
                                <Breadcrumb.Item href="#">Detalhamento do Animal</Breadcrumb.Item>
                                <Breadcrumb.Item href="#">{nomeAnimal}</Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                        <img src={url} alt="Imagem do Animal" id="imagemAnimal"></img>
                    </div>
                    <div className="divDireita">
                        <div className="nomeAnimal">
                            <h1 id="nome">{nomeAnimal}</h1>
                        </div>
                        <div className="statusAnimal">
                            <h2 id="localizacao">Localização do Animal: {  localizacao}</h2>
                            <h2 id="publicador">Publicador:   {publicador}</h2>
                            <h2 id="acessos">Acessos à página: {acessos}</h2>
                        </div>
                        <div className="historiaAnimal">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, eaque!</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, eaque!</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, eaque!</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, eaque!</p>
                        </div>
                        <div className="botaoAdotar">
                            <input type="button" value="QUERO ADOTAR" id="botaoQueroAdotar" />
                        </div>
                    </div>
                </div>
                <div className="divFundo">
                    <h1>Fundo</h1>
                </div>
            </div>
            <Footer />
        </div>
    );

};

export default Detalhamento;
