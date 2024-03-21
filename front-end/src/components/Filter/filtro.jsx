import React from "react";
import "./style.css";


const Filtro = ({ filter, setFilter, porteFilter, setPorteFilter,
    sexoFilter, setSexoFilter, idadeFilter, setIdadeFilter }) => {

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    const handlePorteChange = (e) => {
        setPorteFilter(e.target.value);
    };
    const handleSexoChange = (e) => {
        setSexoFilter(e.target.value);
    };

    const handleIdadeChange = (e) => {
        setIdadeFilter(e.target.value);
    };

    return (

        <div className="filtro">

            <span className="tittle">Alguns animais para adoção</span>
            <span className="line"></span>
            <div className="search-filter">
                <div className="above-filter">
                    <div className="filtro-select">
                        <p>Tipos de animal</p>
                        <select value={filter} onChange={handleFilterChange}>
                            <option value="All">Todos</option>
                            <option value="Cat">Gato</option>
                            <option value="Dog">Cachorro</option>
                        </select>
                    </div>
                    <div className="filtro-select">
                        <p>Porte do animal</p>
                        <select value={porteFilter} onChange={handlePorteChange}>
                            <option value="All">Todos</option>
                            <option value="Grande">Grande</option>
                            <option value="Medio">Médio</option>
                            <option value="Pequeno">Pequeno</option>
                        </select>
                    </div>
                </div>

                <div className="under-filter">
                    <div className="filtro-select">
                        <p>Sexo do animal</p>
                        <select value={sexoFilter} onChange={handleSexoChange}>
                            <option value="All">Todos</option>
                            <option value="Macho">Macho</option>
                            <option value="Femea">Fêmea</option>
                        </select>
                    </div>
                    <div className="filtro-select">
                        <p>Idade do animal</p>
                        <select value={idadeFilter} onChange={handleIdadeChange}>
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
                    <div className="btn-search">

                        <button className="bt-search">Buscar</button>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Filtro
