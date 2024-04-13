import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Favoritos } from "../pages/Favoritos";
import { Detalhamento } from "../pages/Detalhamento";
import { Main } from "../pages/Principal";
import Agendamento from "../pages/Pag_Agendamento";
import { RegistroAdocao } from "../pages/RegistroAdocao";
import { Login } from "../pages/Login";
import { Cadastrar } from "../pages/Cadastrar";
import QuemSomos from "../pages/Quem_Somos";
import CadastroAnimal from "../pages/Cadastro Animal";

export const AppRouter = () => {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastrar" element={<Cadastrar />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route exact path="/detalhamento/:id" element={<Detalhamento />} />
          <Route path="/agendamento/:id" element={<Agendamento />} />
          <Route path="/registro_adocao/:id" element={<RegistroAdocao />} />
          <Route path ="/quem_somos" element = {<QuemSomos/>} />
          <Route path="/cadastro_animal" element={<CadastroAnimal/>} />
        </Routes>
      </Fragment>
    </Router>
  );
};
