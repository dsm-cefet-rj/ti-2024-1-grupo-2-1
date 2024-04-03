import React from "react";
import "./style.css";

const Max_items = 5;
const Max_Left = (Max_items - 1) / 2;

const Paginacao = ({ paginaAtual, pages, setPaginaAtual }) => {
  // const last = Math.min(pages, first + Max_items - 1)

  return (
    <ul className="lista">
      {Array.from(Array(pages), (animais, index) => {
        return (
          <li key={index}>
            <button
              className={
                index === paginaAtual ? "botao_pg__ativado" : "botao_pg"
              }
              value={index}
              onClick={(e) => setPaginaAtual(Number(e.target.value))}
            >
              {index + 1}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Paginacao;
