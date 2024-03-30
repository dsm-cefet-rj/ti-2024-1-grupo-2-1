import React, { useState, useEffect, } from "react";
import HeaderMain from "../../components/HeaderMain";
import FtMain from "../../assets/image.png"
import './style.css'
import Filtro from "../../components/Filter/filtro";
import PetCards from "../../components/PetCards";
import './AnimalGrid.css'
import Footer from "../../components/Footer";
import { Grade } from "../../components/GridContainer";
import animal from "../../components/Animal/animal";
import Paginacao from "../../components/Pagination";


const LIMIT = 10;



export const Main = () => {

    const [animais, setAnimais] = useState([]);
    const [filter, setFilter] = useState("All");
    const [porteFilter, setPorteFilter] = useState("All");
    const [sexoFilter, setSexoFilter] = useState("All");
    const [idadeFilter, setIdadeFilter] = useState("All");
    const[filtredAnimals, setFiltredAnimals]=useState([])
    const[offset,setOffset]=useState (0);
  
    



    const getAnimal = async () => {
        try { // Verifica se o animal com o ID fornecido existe
            setAnimais(Object.values(animal));

        } catch (error) {
            console.error('Erro ao buscar o animal: ', error);
        }};

        
    const animaisFiltrados= (animais && animais
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
    
    useEffect(() => {
        getAnimal();
        setFiltredAnimals(animaisFiltrados);
        console.log(filtredAnimals.length)
        
        
    }, [offset,filter,porteFilter, sexoFilter,idadeFilter]);
    
   
    return (
        <div className="all">

            <HeaderMain />

            <div className="ImgPrincipal">
                <img src={FtMain} alt="" />

            </div>

            <div className="main">
                <Filtro
                    filter={filter} setFilter={setFilter}
                    porteFilter={porteFilter} setPorteFilter={setPorteFilter}
                    sexoFilter={sexoFilter} setSexoFilter={setSexoFilter}
                    idadeFilter={idadeFilter} setIdadeFilter={setIdadeFilter}
                />


                <Grade>

                    {animaisFiltrados
                        .map((animal) =>
                            <PetCards
                                key={animal.id}
                                animais={animal} />
                        )
                    }

                </Grade>

            </div>
            {animaisFiltrados.length && (
                <Paginacao 
                limit={LIMIT} 
                total={animaisFiltrados.length} 
                offset={offset}
                setOffset={setOffset} />

            )}
            <Footer />

        </div>
    );
}