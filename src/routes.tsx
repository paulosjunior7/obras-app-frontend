import { Routes, Route, Navigate } from "react-router-dom";
// import Construcao from "./pages/Construcao";

import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Marcas from "./pages/Marcas";
import Documentacao from "./pages/Documentos";
import Despesas from "./pages/Despesas";
import Fornecedores from "./pages/Fornecedores";
import Terceirizados from "./pages/Terceirizados";
import Cargos from "./pages/Cargos";
import Login from "./pages/Login/Login";
import Pessoas from "./pages/Pessoas";
import CadastroPessoa from "./pages/Pessoas/CadastroPessoa";
import Unidades from "./pages/Unidades";
import Obra from "./pages/Obra";
import GrupoProduto from "./pages/GrupoProduto";
import Obras from "./pages/Obras";
import Construcao from "./pages/Construcao";

export function Router() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />

      <Route path="/obras/cadastro" element={<Construcao />} />
      <Route path="/" element={<Home />} />
      <Route path="/produtos" element={<Produtos />} />

      <Route path="/marcas" element={<Marcas />} />
      <Route path="/documentos" element={<Documentacao />} />
      <Route path="/despesas" element={<Despesas />} />
      <Route path="/fornecedores" element={<Fornecedores />} />
      <Route path="/funcionarios" element={<Terceirizados />} />

      <Route path="/pessoas" element={<Pessoas />} />
      <Route path="/pessoas/edicao/:slug" element={<CadastroPessoa />} />
      <Route path="/pessoas/cadastro" element={<CadastroPessoa />} />
      <Route path="/cargos" element={<Cargos />} />
      <Route path="/obras" element={<Obras />} />

      {/*<Route path="/obra" element={<Obra />} />
      <Route path="/obra/:slug" element={<Obra />}>
        <Route path="dashboard" element={<div />} />
         <Route path="detalhes" element={<Detalhes />} />
        <Route path="proprietarios" element={<Proprietarios />} />
        <Route path="unidades-resindencial" element={<UnidadeResidencial />} />
        <Route path="unidades-resindencial/cadastro" element={<CadastroUnidadeResidencial />} />
        <Route path="unidades-resindencial/edicao/:idUnidade" element={<CadastroUnidadeResidencial />} />
        <Route path="mao-de-obra" element={<div />} />
        <Route path="documentacao" element={<div />} />
        <Route path="despesas-diversas" element={<div />} />
      </Route> */}

      <Route path="/unidades" element={<Unidades />} />

      <Route path="/grupos-produto" element={<GrupoProduto />} />

      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
