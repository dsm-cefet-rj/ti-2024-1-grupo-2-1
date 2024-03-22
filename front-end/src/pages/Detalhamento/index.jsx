import HeaderMain from "../../components/HeaderMain";
import Footer from "../../components/Footer";
import "./index.css";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Card from 'react-bootstrap/Card';

export const Detalhamento = () => {

    const nomeAnimal = "Nome do Animal";
    const localizacao = "Recreio dos Bandeirantes";
    const acessos = 205;
    const publicador = "Flavio Alecio";
    const url = "https://via.placeholder.com/650x400";
    const cardImg = "https://via.placeholder.com/480x480";

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
                            <h2 id="localizacao">Localização do Animal: {localizacao}</h2>
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
                    <div className="informacoesAnimal">
                        <h3>Informações do animal</h3>
                        <span id="linha"></span>
                        <p id="infoAnimal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor ea reiciendis repellat ratione itaque totam necessitatibus tempora quisquam, exercitationem rerum, dolorem earum officia nihil dolores libero. Deleniti nihil ullam repellat dolores libero eaque quia sint unde corrupti magni totam dolor possimus, quo voluptatibus quas earum maxime tempore id mollitia animi voluptatum! Recusandae, nostrum eius. Placeat facere eveniet et, illum nihil pariatur eligendi dolor tempore aliquid aliquam ducimus similique accusamus culpa omnis. Quisquam ut corporis, laudantium officiis vero mollitia magnam quo?</p>
                    </div>
                    <div className="outrosAnimais">
                        <h3>Outros animais parecidos...</h3>
                        <span id="linha"></span>
                    </div>
                    <div className="cardsAnimais">
                        <Card border="dark" style={{ width: "15rem" }}>
                            <Card.Img variant="top" src={cardImg} />
                            <Card.Body>
                                <Card.Title>{nomeAnimal}</Card.Title>
                                <Card.Text>
                                    {localizacao}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card border="dark" style={{ width: "15rem" }}>
                            <Card.Img variant="top" src={cardImg} />
                            <Card.Body>
                                <Card.Title>{nomeAnimal}</Card.Title>
                                <Card.Text>
                                    {localizacao}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card border="dark" style={{ width: "15rem" }}>
                            <Card.Img variant="top" src={cardImg} />
                            <Card.Body>
                                <Card.Title>{nomeAnimal}</Card.Title>
                                <Card.Text>
                                    {localizacao}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card border="dark" style={{ width: "15rem" }}>
                            <Card.Img variant="top" src={cardImg} />
                            <Card.Body>
                                <Card.Title>{nomeAnimal}</Card.Title>
                                <Card.Text>
                                    {localizacao}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );

};

export default Detalhamento;
