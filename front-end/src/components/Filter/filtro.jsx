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
  setFilter,
  setPorteFilter,
  setSexoFilter,
  setIdadeFilter,
}) => {
 
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

  const intervals =[
    {value:"All",label:"Todos"},
    {value:[
      "1 ano",
      "2 anos",
      "3 anos",
      "4 anos",
      "5 anos",
    ], label: "1 ano - 5 anos"},
    {value:[
      "6 anos",
      "7 anos",
      "8 anos",
      "9 anos",
      "10 anos",
    ], label: "6 anos - 10 anos"},
    {value:[
      "11 anos",
      "12 anos",
      "13 anos",
      "14 anos"
    ], label: "11 anos - 14 anos"}

  ]
  return (
    <div className="filtro" > {/*onSubmit={handleSubmit}>*/}
      <span className="titlle">Alguns animais para adoção</span>
      <span className="line"></span>
      <div className="search-filter">
        <div className="above-filter">
          <div className="filtro-select">
            <p>Tipos de animal</p>
            <SelectInput
              name="animal-type"
              items={items}
              onChange={(e)=>setFilter(e.target.value)}
            />
          </div>
          <div className="filtro-select">
            <p>Porte do animal</p>
            <SelectInput
              name="animal-size"
              items={items2}
              onChange={(e)=>setPorteFilter(e.target.value)}
            />
          </div>
        </div>

        <div className="under-filter">
          <div className="filtro-select">
            <p>Sexo do animal</p>
            <SelectInput
              name="animal-sex"
              items={items3}
              onChange={(e)=>setSexoFilter(e.target.value)}
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
              items={intervals}
              onChange={(e)=>setIdadeFilter(e.target.value)}
            />
          </div>
          {/* <div className="btnn-search">
            <button className="bt-search" >
              Buscar
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Filtro;
