import HeaderMain from "../../components/HeaderMain";
import Footer from "../../components/Footer";
import "./styles.css";
import { Breadcrumb } from "react-bootstrap";
import PetCards from "../../components/PetCards";
import { Grade } from "../../components/GridContainer";
import animal from "../../components/Animal/animal";
import { useParams } from "react-router-dom";
import Paginacao from "../../components/Pagination";
import { useState } from "react";
import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";

export const Favoritos = () => {
  const { id } = useParams();
  const [favAnimais, setFavAnimais] = useState([]);

  const getAnimal = async () => {
    try {
      // Verifica se o animal com o ID fornecido existe
      console.log(animal);
      setFavAnimais(Object.values(animal));
    } catch (error) {
      console.error("Erro ao buscar a receita: ", error);
    }
  };

  const [animalsPerPage, setAnimalsPerPage] = useState(10);
  const [paginaAtual, setPaginaAtual] = useState(0);

  const pages = Math.ceil(favAnimais.length / animalsPerPage, 1);
  const startIndex = paginaAtual * animalsPerPage;
  const endIndex = startIndex + animalsPerPage;
  const itensAtuais = favAnimais.slice(startIndex, endIndex);

  useEffect(() => {
    getAnimal();
  }, [id]);

  return (
    <div>
      <HeaderMain></HeaderMain>
      <div className="breadcrumb-favoritos">
        <Breadcrumb>
          <Breadcrumb.Item href="#">Principal</Breadcrumb.Item>
          <Breadcrumb.Item active>Favoritos</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="title-favoritos-container">
        <span className="title-favoritos">Seus Favoritos</span>
        <span className="sublinha-favoritos"></span>
      </div>
      <form className="form-filtro-favoritos" action="">
        <div>
          <select name="tipo-animal" id="tipo-animal">
            <option value="" disabled selected>
              Tipo
            </option>
            <option value="cachorro">Cachorro</option>
            <option value="gato">Gato</option>
          </select>
        </div>
        <div>
          <select name="porte-animal" id="porte-animal">
            <option value="" disabled selected>
              Porte
            </option>
            <option value="grande">Grande</option>
            <option value="medio">Médio</option>
            <option value="pequeno">Pequeno</option>
          </select>
        </div>
        <div>
          <select name="idade-animal" id="idade-animal">
            <option value="" disabled selected>
              Idade
            </option>
            <option value="filhote">Filhote</option>
            <option value="adulto">Adulto</option>
            <option value="idoso">Idoso</option>
          </select>
        </div>
        <div>
          <select name="bairro-animal" id="bairro-animal">
            <option value="" disabled selected>
              Bairro
            </option>
            <option value="maracana">Maracanã</option>
            <option value="tijuca">Tijuca</option>
            <option value="vila-isabel">Vila Isabel</option>
          </select>
        </div>
        <div>
          <select name="sexo-animal" id="sexo-animal">
            <option value="" disabled selected>
              Sexo
            </option>
            <option value="Macho">Macho</option>
            <option value="Fêmea">Fêmea</option>
          </select>
        </div>
        <button className="botao-search" type="submit">
          Filtrar
        </button>
      </form>
      <div className="grade-container">
        <Grade>
          {itensAtuais.map((animal) => (
            <PetCards key={animal.id} animais={animal} />
          ))}
        </Grade>
      </div>
      {favAnimais.length && (
        <Paginacao
          paginaAtual={paginaAtual}
          pages={pages}
          setPaginaAtual={setPaginaAtual}
        />
      )}
      <Footer></Footer>
    </div>
  );
};
