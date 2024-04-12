import React, { useState, useEffect } from "react";
import HeaderMain from "../../components/HeaderMain";
import FtMain from "../../assets/image.png";
import "./style.css";
import Filtro from "../../components/Filter/filtro";
import PetCards from "../../components/PetCards";
import "./AnimalGrid.css";
import Footer from "../../components/Footer";
import { Grade } from "../../components/GridContainer";
import Paginacao from "../../components/Pagination";
import { useSelector} from "react-redux";



export const Main = () => {
  // const [animais, setAnimais] = useState([]);
  const [filter, setFilter] = useState("All");
  const [porteFilter, setPorteFilter] = useState("All");
  const [sexoFilter, setSexoFilter] = useState("All");
  const [idadeFilter, setIdadeFilter] = useState("All");
  const [animalsPerPage, setAnimalsPerPage] = useState(10);
  const [paginaAtual, setPaginaAtual] = useState(0);

  const { animals } = useSelector((rootReducer)=>rootReducer.animalReducer)
  const { animalsFav } = useSelector((rootReducer) => rootReducer.animalFavReducer)
  
  
  
  // const getAnimal = async () => {
  //     try {
  //         // Verifica se o animal com o ID fornecido existe
  //         setAnimais(Object.values(animal));

  //     } catch (error) {
  //         console.error('Erro ao buscar o animal: ', error);
  //     }};

  const animaisFiltrados =
    animals &&
    animals
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
    if(animal.id === animalsFav.id){
    animal.isfav = animalsFav.isfav
    return animal;
  }})

  // useEffect(() => {
  //   const fetchData = async () => {
  //     // const result =await fetch (Object.values(animal))
  //     //     .then(response => response.json())
  //     //     .then(data => data)
  //     setAnimais(Object.values(animal));
  //   };
  //   fetchData();
  //   // getAnimal();
  //   // setFiltredAnimals(animaisFiltrados);
  // }, []);

  // useEffect(()=>{
  //     setPaginaAtual(0)
  // },[animalsPerPage])

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

        <Grade>
          {itensAtuais.map((animal) => (
            
            <PetCards key={animal.id} animais={animal}  />
            
          ))}
        </Grade>
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
