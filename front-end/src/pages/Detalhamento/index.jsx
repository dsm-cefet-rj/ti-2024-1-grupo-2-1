import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeaderMain from "../../components/HeaderMain";
import Footer from "../../components/Footer";
import "./index.css";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import PetCards from "../../components/PetCards";
import { Grade } from "../../components/GridContainer";
import animal from "../../components/Animal/animal";
import { useParams } from "react-router-dom";
import Paginacao from "../../components/Pagination";

export const Detalhamento = () => {
    const { id } = useParams()
    const [animais, setAnimais] = useState([]);
    const navigate = useNavigate();
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

    const handleClick = (e) => {
        e.preventDefault()
        navigate(`/registro_adocao/${id}`);
        {window.scrollTo({ top: 0, behavior: 'smooth' })}
        
    }

    // const nomeAnimal = "Nome do Animal";
    const localizacao = "Recreio dos Bandeirantes";
    const acessos = 205;
    const publicador = "Flavio Alecio";
    // const url = "https://via.placeholder.com/650x400";
    // const cardImg = "https://via.placeholder.com/480x480";
    const [animalsPerPage, setAnimalsPerPage] = useState(5)
    const [paginaAtual, setPaginaAtual] = useState(0);

    const pages = Math.ceil(animais.length/ animalsPerPage, 1);
    const startIndex = paginaAtual * animalsPerPage;
    const endIndex = startIndex + animalsPerPage;
    const itensAtuais = animais.slice(startIndex, endIndex)

    return (
        <div>
            <HeaderMain />
            <div className="div-main">
                <div className="div-topo">
                    <div className="div-esquerda">
                        <div className="navegacao">
                            <Breadcrumb>
                                <Breadcrumb.Item href="/">Principal</Breadcrumb.Item>
                                <Breadcrumb.Item href="#">Detalhamento do Animal</Breadcrumb.Item>
                                <Breadcrumb.Item href="#">{animal[id].nome}</Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                        <img src={animal[id].img} alt="Imagem do Animal" id="imagem-animal"></img>
                    </div>
                    <div className="div-direita">
                        <div className="nome-animal">
                            <h1 id="nome">{animal[id].nome}</h1>
                        </div>
                        <div className="status-animal">
                            <h2 id="localizacao">Localização do Animal: {localizacao}</h2>
                            <h2 id="publicador">Publicador:   {publicador}</h2>
                            <h2 id="acessos">Acessos à página: {acessos}</h2>
                        </div>
                        <div className="historia-animal">
                            <p>{animal[id].história}</p>
                        </div>
                        <div className="botao-adotar">
                            <input type="button" onClick={handleClick} value="QUERO ADOTAR" id="botao-quero-adotar" />
                        </div>
                    </div>
                </div>
                <div className="div-fundo">
                    <div className="informacoes-animal">
                        <h3>Informações do animal</h3>
                        <span id="linha"></span>
                        <p id="info-animal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor ea reiciendis repellat ratione itaque totam necessitatibus tempora quisquam, exercitationem rerum, dolorem earum officia nihil dolores libero. Deleniti nihil ullam repellat dolores libero eaque quia sint unde corrupti magni totam dolor possimus, quo voluptatibus quas earum maxime tempore id mollitia animi voluptatum! Recusandae, nostrum eius. Placeat facere eveniet et, illum nihil pariatur eligendi dolor tempore aliquid aliquam ducimus similique accusamus culpa omnis. Quisquam ut corporis, laudantium officiis vero mollitia magnam quo?</p>
                    </div>
                    <div className="outros-animais">
                        <h3>Outros animais parecidos...</h3>
                        <span id="linha"></span>
                    </div>
                    <Grade>

                    {itensAtuais
                        .map((animal) =>
                            <PetCards
                                key={animal.id}
                                animais={animal} />
                        )
                    }

                </Grade>

            </div>
            {animais.length && (
                <Paginacao 
                paginaAtual={paginaAtual}
                pages={pages}
                setPaginaAtual={setPaginaAtual} 
                 />

            )} 
            </div>
            <Footer />
        </div>
    );

};

export default Detalhamento;
