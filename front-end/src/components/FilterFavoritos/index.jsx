import React, { useState } from "react";
import "./styles.css";

const FilterFavoritos = ({
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
    <form className="form-filtro-favoritos" onSubmit={handleSubmit}>
      <div>
        <select
          name="tipo-animal"
          id="tipo-animal"
          onChange={handleFilterChange}
        >
          <option value="All">Todos</option>
          <option value="Cachorro">Cachorro</option>
          <option value="Gato">Gato</option>
        </select>
      </div>
      <div>
        <select
          name="porte-animal"
          id="porte-animal"
          onChange={handlePorteChange}
        >
          <option value="All">Todos</option>
          <option value="Grande">Grande</option>
          <option value="Médio">Médio</option>
          <option value="Pequeno">Pequeno</option>
        </select>
      </div>
      <div>
        <select
          name="idade-animal"
          id="idade-animal"
          onChange={handleIdadeChange}
        >
          <option value="All">Todos</option>
          <option value="1 ano">1 ano</option>
          <option value="2 anos">2 anos</option>
          <option value="3 anos">3 anos</option>
          <option value="4 ano">4 anos</option>
          <option value="5 anos">5 anos</option>
          <option value="6 anos">6 anos</option>
          <option value="7 ano">7 ano</option>
          <option value="8 anos">8 anos</option>
          <option value="9 anos">9 anos</option>
          <option value="10 ano">10 anos</option>
          <option value="11 anos">11 anos</option>
          <option value="12 anos">12 anos</option>
          <option value="13 anos">13 anos</option>
          <option value="14 anos">14 anos</option>
        </select>
      </div>
      <div>
        <select name="sexo-animal" id="sexo-animal" onChange={handleSexoChange}>
          <option value="All">Todos</option>
          <option value="Macho">Macho</option>
          <option value="Fêmea">Fêmea</option>
        </select>
      </div>
      <button className="botao-search" type="submit">
        Filtrar
      </button>
    </form>
  );
};

export default FilterFavoritos
