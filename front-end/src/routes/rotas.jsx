import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Favoritos } from "../pages/Favoritos";
import { Detalhamento } from "../pages/Detalhamento";
import { Main } from "../pages/Principal";
import Agendamento from "../pages/Pag_Agendamento";

export const AppRouter = () => {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/detalhamento" element={<Detalhamento />} />
          <Route path="/agendamento" element={<Agendamento />} />
        </Routes>
      </Fragment>
    </Router>
  );
};
