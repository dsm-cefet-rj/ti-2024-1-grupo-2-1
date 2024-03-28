import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Favoritos } from "../pages/Favoritos";
import { Detalhamento } from "../pages/Detalhamento";
import { Main } from "../pages/Principal";
import Agendamento from "../pages/Pag_Agendamento";
import { RegistroAdocao } from "../pages/RegistroAdocao";

export const AppRouter = () => {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route exact path="/detalhamento/:id" element={<Detalhamento />} />
          <Route path="/agendamento" element={<Agendamento />} />
          <Route path="/registro_adocao" element={<RegistroAdocao />} />
        </Routes>
      </Fragment>
    </Router>
  );
};
