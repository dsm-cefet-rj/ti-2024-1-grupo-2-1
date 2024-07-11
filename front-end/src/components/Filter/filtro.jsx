import React, { useState } from "react";
import "./style.css";
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

  return (
    <form className="filtro" onSubmit={handleSubmit}>
      <span className="titlle">Alguns animais para adoção</span>
      <span className="line"></span>
      <div className="search-filter">
        <div className="above-filter">
          <div className="filtro-select">
            <p>Tipos de animal</p>
            <select onChange={handleFilterChange}>
              <option value="All">Todos</option>
              <option value="Gato">Gato</option>
              <option value="Cachorro">Cachorro</option>
            </select>
          </div>
          <div className="filtro-select">
            <p>Porte do animal</p>
            <select onChange={handlePorteChange}>
              <option value="All">Todos</option>
              <option value="Grande">Grande</option>
              <option value="Médio">Médio</option>
              <option value="Pequeno">Pequeno</option>
            </select>
          </div>
        </div>

        <div className="under-filter">
          <div className="filtro-select">
            <p>Sexo do animal</p>
            <select onChange={handleSexoChange}>
              <option value="All">Todos</option>
              <option value="Macho">Macho</option>
              <option value="Fêmea">Fêmea</option>
            </select>
          </div>
          <div className="filtro-select">
            <p>Idade do animal</p>
            <select onChange={handleIdadeChange}>
              <option value="All">Todos</option>
              <option value="1 ano">1 ano</option>
              <option value="2 anos">2 anos</option>
              <option value="3 anos">3 anos</option>
              <option value="4 anos">4 anos</option>
              <option value="5 anos">5 anos</option>
              <option value="6 anos">6 anos</option>
              <option value="7 anos">7 anos</option>
              <option value="8 anos">8 anos</option>
              <option value="9 anos">9 anos</option>
              <option value="10 anos">10 anos</option>
              <option value="11 anos">11 anos</option>
              <option value="12 anos">12 anos</option>
              <option value="13 anos">13 anos</option>
              <option value="14 anos">14 anos</option>
            </select>
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
