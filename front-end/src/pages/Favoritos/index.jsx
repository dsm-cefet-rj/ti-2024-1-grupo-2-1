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
import FilterFavoritos from "../../components/FilterFavoritos";

export const Favoritos = () => {
  const { id } = useParams();
  const [favAnimais, setFavAnimais] = useState([]);
  const [filter, setFilter] = useState("All");
  const [porteFilter, setPorteFilter] = useState("All");
  const [sexoFilter, setSexoFilter] = useState("All");
  const [idadeFilter, setIdadeFilter] = useState("All");
  const [animalsPerPage, setAnimalsPerPage] = useState(10);
  const [paginaAtual, setPaginaAtual] = useState(0);

  const animaisFiltrados =
    (favAnimais &&
    favAnimais
      .filter((animal) => {
        if (filter === "All") return true;
        return animal.tipo === filter;
      })
      .filter((animal) => {
        if (porteFilter === "All") return true;
        return animal.porte === porteFilter;
      })
      .filter((animal) => {
        if (sexoFilter === "All") return true;
        return animal.sexo === sexoFilter;
      })
      .filter((animal) => {
        if (idadeFilter === "All") return true;
        return animal.idade === idadeFilter;
      }));

  const pages = Math.ceil(animaisFiltrados.length / animalsPerPage, 1);
  const startIndex = paginaAtual * animalsPerPage;
  const endIndex = startIndex + animalsPerPage;
  const itensAtuais = animaisFiltrados.slice(startIndex, endIndex);

  //  const getAnimal = async () => {
  //    try {
  //      // Verifica se o animal com o ID fornecido existe
  //      console.log(animal);
  //      setFavAnimais(Object.values(animal));
  //    } catch (error) {
  //      console.error("Erro ao buscar a receita: ", error);
  //    }
  //  };

  useEffect(() => {
    const fetchData = async () => {
      setFavAnimais(Object.values(animal));
    };
    fetchData();
  }, []);

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
      <FilterFavoritos>
        filter={filter} setFilter={setFilter}
        porteFilter={porteFilter} setPorteFilter={setPorteFilter}
        sexoFilter={sexoFilter} setSexoFilter={setSexoFilter}
        idadeFilter={idadeFilter} setIdadeFilter={setIdadeFilter}
      </FilterFavoritos>
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
