import React, { useEffect, useState } from "react";
import HeaderMain from "../../components/HeaderMain";
import FtMain from "../../assets/image.png";
import "./style.css";
import Filtro from "../../components/Filter/filtro";
import PetCards from "../../components/PetCards";
import "./AnimalGrid.css";
import Footer from "../../components/Footer";
import  Grade  from "../../components/GridContainer";
import Paginacao from "../../components/Pagination";
import { useSelector, useDispatch } from "react-redux";
import { fetchAnimais } from "../../redux/Animais/slice";

/**
 * @module Page/Pagina_Principal
 * 
 */
/**
 * @typedef Main
 * @type {React.FC}
 */
/**
 * Renderiza uma pagina home da aplicação.
 * @returns {React.FC} - Componente react
 */

 const Main = () => {
  const [filter, setFilter] = useState("All");
  const [porteFilter, setPorteFilter] = useState("All");
  const [sexoFilter, setSexoFilter] = useState("All");
  const [idadeFilter, setIdadeFilter] = useState("All");
  const [animalsPerPage, setAnimalsPerPage] = useState(10);
  const [paginaAtual, setPaginaAtual] = useState(0);

  const { animals } = useSelector((rootReducer) => rootReducer.animalReducer);
  const [animais, setAniamais]= useState([]);
  const { animalsFav } = useSelector(
    (rootReducer) => rootReducer.animalFavReducer
  );
  const { error } = useSelector((rootReducer) => rootReducer.animalReducer);
  const { status } = useSelector((rootReducer) => rootReducer.animalReducer);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAnimais());
    setAniamais(animals);
    console.log(animals)
  }, [animals.length]);

let animaisFiltrados =
    animais &&
    animais
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
      });

  const pages = Math.ceil(animaisFiltrados.length / animalsPerPage, 1);
  const startIndex = paginaAtual * animalsPerPage;
  const endIndex = startIndex + animalsPerPage;
  const itensAtuais = animaisFiltrados.slice(startIndex, endIndex);

  itensAtuais.map((animal) => {
    if (animal.id === animalsFav.id) {
      animal.isfav = animalsFav.isfav;
      return animal;
    }
  });
  let animaisTabelados = "";
  if (status === "loaded") {
    animaisTabelados = (
      <Grade>
        {itensAtuais.map((animal) => (
          <PetCards key={animal.id} animais={animal} />
        ))}
      </Grade>
    );
  } else if (status === "loading") {
    animaisTabelados = <div>Carregando animais...</div>;
  } else if (status === "failed") {
    animaisTabelados = <div>error: {error}</div>;
  }

  return (
    <div className="all">
      <HeaderMain />

      <div className="ImgPrincipal">
        <img src={FtMain} alt="" />
      </div>

      <div className="main">
        <Filtro
          filter={filter}
          setFilter={setFilter}
          porteFilter={porteFilter}
          setPorteFilter={setPorteFilter}
          sexoFilter={sexoFilter}
          setSexoFilter={setSexoFilter}
          idadeFilter={idadeFilter}
          setIdadeFilter={setIdadeFilter}
        />
        {animaisTabelados}
      </div>
      {animaisFiltrados.length && (
        <Paginacao
          paginaAtual={paginaAtual}
          pages={pages}
          setPaginaAtual={setPaginaAtual}
        />
      )}
      <Footer />
    </div>
  );
};
export default Main;