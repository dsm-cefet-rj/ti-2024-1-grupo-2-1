import React, { useState, useEffect, } from "react";
import HeaderMain from "../../components/HeaderMain";
import FtMain from "../../assets/image.png"
import './style.css'
import Filtro from "../../components/Filter/filtro";
import PetCards from "../../components/PetCards";
import './AnimalGrid.css'
import Footer from "../../components/Footer";
import { Grade } from "../../components/GridContainer/grade";
import animal from "../../components/Animal/animal";

export const Main = () => {

    const [animais, setAnimais] = useState([]);
    const getAnimal = async () => {
        try { // Verifica se o animal com o ID fornecido existe
            console.log(animal);
            setAnimais(Object.values(animal));
            
        }catch (error) {
            console.error('Erro ao buscar a receita: ', error);
        }
      };

    useEffect(() => {
        getAnimal();
    }, []);

    const [filter, setFilter] = useState("All");
    const [porteFilter, setPorteFilter] = useState("All");
    const [sexoFilter, setSexoFilter] = useState("All");
    const [idadeFilter, setIdadeFilter] = useState("All");

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

                    {animais && animais
                        .filter((animal) =>
                            filter === "All"
                                ? true
                                : filter === "Cat"
                                    ? animal.tipo === "Gato"
                                    : animal.tipo === "Cachorro")
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
                        })
                        .map((animal) =>
                            <PetCards
                                key={animal.id}
                                animais={animal} />
                        )}
                </Grade>
            </div>


            <Footer />

        </div>
    );
}