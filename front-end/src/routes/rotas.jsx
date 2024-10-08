import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import {ProtectedRoute} from "./protectedRoute";
import  Favoritos from "../pages/Favoritos";
import  Detalhamento from "../pages/Detalhamento";
import Main  from "../pages/Principal";
import Agendamento from "../pages/Agendamento";
import RegistroAdocao  from "../pages/RegistroAdocao";
import  Login  from "../pages/Login";
import Cadastrar  from "../pages/Cadastrar";
import QuemSomos from "../pages/Quem_Somos";
import CadastroAnimal from "../pages/Cadastro Animal";
import AdmPedidos from "../pages/admPedidos";
import AdmAgendamento from "../pages/admAgendamentos";
import UpdatePerfil from "../pages/Update_perfil";
import OptionAdmin from "../pages/OpcoesAdmin";
import VerificarPedido from "../pages/verificarPedido";
import UpdateAnimais from "../pages/Update_Animais";


export const AppRouter = () => {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path='*' element={<Navigate to='/'/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastrar" element={<Cadastrar />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route exact path="/detalhamento/:id" element={<Detalhamento />} />
          <Route path="/agendamento/:id" element={<Agendamento />} />
          <Route path="/registro_adocao/:id" element={<RegistroAdocao />} />
          <Route path="/quem_somos" element={<QuemSomos />} />
          <Route path="/cadastro_animal" element={<ProtectedRoute><CadastroAnimal/></ProtectedRoute>} />
          <Route path="/admin_pedidos" element={<ProtectedRoute><AdmPedidos/></ProtectedRoute>} />
          <Route exact path="/verificar_pedido/:id" element={<ProtectedRoute><VerificarPedido /></ProtectedRoute>} />
          <Route path="/admin_agendamentos" element={<ProtectedRoute><AdmAgendamento /></ProtectedRoute>} />
          <Route exact path="/detalhes_conta/:id" element={<UpdatePerfil />} />
          <Route path="opcao_admin" element={<ProtectedRoute><OptionAdmin/></ProtectedRoute>}/>
          <Route exact path="/update_animal/:id" element={<ProtectedRoute><UpdateAnimais/></ProtectedRoute>}/>
        </Routes>
      </Fragment>
    </Router>
  );
};
