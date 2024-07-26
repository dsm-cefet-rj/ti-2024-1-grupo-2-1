import React, { useState } from "react";
import "./style.css";
import SelectInput from "../Select-input";
/** 
 * @module Componente/Filtro
 *  */

/** 
 * @typedef Filtro
 * @type {React.FC}
*/

/** 
 * Renderiza um componente contendo um filtro para ser utilizado para filtrar animais
 * @param {string} filter - Informações do tipo de animal a ser filtrado
 * @param {string} setFilter - Uma função para definir tipo de animail a ser filtrado
 * @param {string} porteFilter - Informações do porte de animal a ser filtrado
 * @param {string} setPorteFilter - Uma função para definir o porte de animail a ser filtrado
 * @param {string} sexoFilter - Informações do sexo de animal a ser filtrado
 * @param {string} setSexoFilter - Uma função para definir o sexo de animail a ser filtrado
 * @param {string} idadeFilter - Informações do idade de animal a ser filtrado
 * @param {string} setIdadeFilter - Uma função para definir a idade de animail a ser filtrado
 * @returns {React.FC} O componente renderizado.
*/

const Filtro = ({
  filter,
  setFilter,
  porteFilter,
  setPorteFilter,
  sexoFilter,
  setSexoFilter,
  idadeFilter,
  setIdadeFilter,
}) => {
  const [selectedFilter, setSelectedFilter] = useState(filter);
  const [selectedPorteFilter, setSelectedPorteFilter] = useState(porteFilter);
  const [selectedSexoFilter, setSelectedSexoFilter] = useState(sexoFilter);
  const [selectedIdadeFilter, setSelectedIdadeFilter] = useState(idadeFilter);
  const [err, setErr] = useState("");

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
  }; 

  const handlePorteChange = (e) => {
    setSelectedPorteFilter(e.target.value);
  };
  const handleSexoChange = (e) => {
    setSelectedSexoFilter(e.target.value);
  };

  const handleIdadeChange = (e) => {
    setSelectedIdadeFilter(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    setFilter(selectedFilter);
    setPorteFilter(selectedPorteFilter);
    setSexoFilter(selectedSexoFilter);
    setIdadeFilter(selectedIdadeFilter);
  };

  const items=[
    {value: "All", label: "Todos"},
    {value:"Cachorro", label: "Cachorro"},
    {value: "Gato", label: "Gato"}
  ];
  const items2=[ 
    {value: "All", label: "Todos"},
    {value:"Grande", label: "Grande"},
    {value: "Médio", label: "Médio"},
    {value: "Pequeno", label: "Pequeno"},
  ];
  const items3=[
    {value: "All", label: "Todos"},
    {value:"Macho", label: "Macho"},
    {value: "Fêmea" , label: "Fêmea"}
  ];

  const items4=[
  {value:"All",label:"Todos"},
  {value:"1 ano",label: "1 ano"},
  {value:"2 anos",label: "2 anos"},
  {value:"3 anos",label: "3 anos"},
  {value:"4 anos",label: "4 anos"},
  {value:"5 anos",label: "5 anos"},
  {value:"6 anos",label: "6 anos"},
  {value:"7 anos",label: "7 anos"},
  {value:"8 anos",label: "8 anos"},
  {value:"9 anos",label: "9 anos"},
  {value:"10 anos",label: "10 anos"},
  {value:"11 anos",label: "11 anos"}, 
  {value:"12 anos",label: "12 anos"}, 
  {value:"13 anos",label: "13 anos"},
  {value:"14 anos",label: "14 anos"}
  ]
  return (
    <form className="filtro" onSubmit={handleSubmit}>
      <span className="titlle">Alguns animais para adoção</span>
      <span className="line"></span>
      <div className="search-filter">
        <div className="above-filter">
          <div className="filtro-select">
            <p>Tipos de animal</p>
            <SelectInput
              name="animal-type"
              items={items}
              onChange={handleFilterChange}
            />
          </div>
          <div className="filtro-select">
            <p>Porte do animal</p>
            <SelectInput
              name="animal-size"
              items={items2}
              onChange={handlePorteChange}
            />
          </div>
        </div>

        <div className="under-filter">
          <div className="filtro-select">
            <p>Sexo do animal</p>
            <SelectInput
              name="animal-sex"
              items={items3}
              onChange={handleSexoChange}
            />
            {/* <select onChange={handleSexoChange}>
              <option value="All">Todos</option>
              <option value="Macho">Macho</option>
              <option value="Fêmea">Fêmea</option>
            </select> */}
          </div>
          <div className="filtro-select">
            <p>Idade do animal</p>
            <SelectInput
              name="animal-age"
              items={items4}
              onChange={handleIdadeChange}
            />
          </div>
          <div className="btnn-search">
            <button className="bt-search" type="submit">
              Buscar
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Filtro;
