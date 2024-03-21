import React, { useState } from "react";
import HeaderMain from "../../components/HeaderMain";
import FtMain from "../../assets/image.png"
import './style.css'
import Filtro from "../../components/Filter/filtro";
import PetCards from "../../components/PetCards";
import './AnimalGrid.css'
import Footer from "../../components/Footer";
export const Main = () => {

    const[animais, setAnimais]= useState([
        {
            id:1,
            img: "https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQOO0X7mMnoYz-e9Zdc6Pe6Wz7Ow1DcvhEiaex5aSv6QJDoCtcooqA7UUbjrphvjlIc",
            nome: "Flavio",
            tipo: "Cachorro",
            porte: "Grande",
            sexo: "Macho",
            idade: "5 anos",
        },
        {
            id:2,
            img: "https://www.petz.com.br/blog/wp-content/uploads/2021/11/tipos-de-pitbull3-1280x720.jpg",
            nome: "Vini",
            tipo: "Cachorro",
            porte: "Pequeno",
            sexo: "Macho",
            idade: "8 anos",
        },
        {
            id:3,
            img: "https://ih1.redbubble.net/image.1677539366.0714/aps,504x498,medium,transparent-pad,600x600,f8f8f8.jpg",
            nome: "Felipe",
            tipo: "Gato",
            porte: "Grande",
            sexo: "Macho",
            idade: "7 anos",
        },
        {
            id:4,
            img: "data:image/jpeg;base64,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",
            nome: "Yzhak",
            tipo: "Gato",
            porte: "Medio",
            sexo: "Macho",
            idade: "9 anos",
        }
    ]);

    const [filter, setFilter]= useState("All");
    const [porteFilter, setPorteFilter] = useState("All");
  const [sexoFilter, setSexoFilter] = useState("All");
  const [idadeFilter, setIdadeFilter] = useState("All");

    return (
        <div className="all">

            <HeaderMain />

            <div className="ImgPrincipal">
                <img src={FtMain} alt="" />

            </div>

            <Filtro 
            filter={filter}  setFilter={setFilter}
            porteFilter={porteFilter} setPorteFilter={setPorteFilter}
            sexoFilter={sexoFilter} setSexoFilter ={setSexoFilter}
            idadeFilter={idadeFilter} setIdadeFilter={setIdadeFilter}
            />

            <div className="animais-list">
                
                <div className="contain">
                        <div className="card-container">
                        {animais
                        .filter((animais)=>
                        filter === "All" 
                        ? true 
                        : filter==="Cat" 
                        ? animais.tipo==="Gato" 
                        : animais.tipo==="Cachorro" )
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
                            return animal.idade===idadeFilter;
                          })   
                        .map((animais)=>
                        <PetCards
                        key={animais.id} 
                        animais={animais}/>
                        )}</div>
                    </div>
            </div>

            <Footer/>
        </div>
    );
}