import { Routes, Route, Navigate } from "react-router-dom";
// import Construcao from "./pages/Construcao";

import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import CadastroProduto from "./pages/Produtos/CadastroProduto";
import Marcas from "./pages/Marcas";
import CadastroMarca from "./pages/Marcas/CadastroMarca";
import Documentacao from "./pages/Documentos";
import CadastroDocumentacao from "./pages/Documentos/CadastroDocumento";
import Despesas from "./pages/Despesas";
import CadastroDespesa from "./pages/Despesas/CadastroDespesa";
import Fornecedores from "./pages/Fornecedores";
import CadastroFornecedor from "./pages/Fornecedores/CadastroFornecedor";
import Terceirizados from "./pages/Terceirizados";
import CadastroTerceirizado from "./pages/Terceirizados/CadastroTerceirizado";
import Cargos from "./pages/Cargos";
import CadastroCargo from "./pages/Cargos/CadastroCargo";
import Login from "./pages/Login/Login";
import Pessoas from "./pages/Pessoas";
import CadastroPessoa from "./pages/Pessoas/CadastroPessoa";
import Unidades from "./pages/Unidades";
import CadastroUnidade from "./pages/Unidades/CadastroUnidade";
import Obra from "./pages/Obra";
import GrupoProduto from "./pages/GrupoProduto";
import CadastroGrupoProduto from "./pages/GrupoProduto/CadastroGrupoProduto";
import Obras from "./pages/Obras";
import Construcao from "./pages/Construcao";

export function Router() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />

      <Route path="/obras/nova" element={<Construcao />} />
      <Route path="/" element={<Home />} />
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/produtos/edicao/:slug" element={<CadastroProduto />} />
      <Route path="/produtos/cadastro" element={<CadastroProduto />} />

      <Route path="/marcas" element={<Marcas />} />
      <Route path="/marcas/edicao/:slug" element={<CadastroMarca />} />
      <Route path="/marcas/cadastro" element={<CadastroMarca />} />

      <Route path="/documentos" element={<Documentacao />} />
      <Route
        path="/documentos/edicao/:slug"
        element={<CadastroDocumentacao />}
      />
      <Route path="/documentos/cadastro" element={<CadastroDocumentacao />} />

      <Route path="/despesas" element={<Despesas />} />
      <Route path="/despesas/edicao/:slug" element={<CadastroDespesa />} />
      <Route path="/despesas/cadastro" element={<CadastroDespesa />} />

      <Route path="/fornecedores" element={<Fornecedores />} />
      <Route
        path="/fornecedores/edicao/:slug"
        element={<CadastroFornecedor />}
      />
      <Route path="/fornecedores/cadastro" element={<CadastroFornecedor />} />

      <Route path="/terceirizados" element={<Terceirizados />} />
      <Route
        path="/terceirizados/edicao/:slug"
        element={<CadastroTerceirizado />}
      />
      <Route
        path="/terceirizados/cadastro"
        element={<CadastroTerceirizado />}
      />

      <Route path="/pessoas" element={<Pessoas />} />
      <Route path="/pessoas/edicao/:slug" element={<CadastroPessoa />} />
      <Route path="/pessoas/cadastro" element={<CadastroPessoa />} />

      <Route path="/cargos" element={<Cargos />} />
      <Route path="/cargos/edicao/:slug" element={<CadastroCargo />} />
      <Route path="/cargos/cadastro" element={<CadastroCargo />} />

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
      <Route path="/unidades/edicao/:slug" element={<CadastroUnidade />} />
      <Route path="/unidades/cadastro" element={<CadastroUnidade />} />

      <Route path="/grupos-produto" element={<GrupoProduto />} />
      <Route
        path="/grupos-produto/edicao/:slug"
        element={<CadastroGrupoProduto />}
      />
      <Route
        path="/grupos-produto/cadastro"
        element={<CadastroGrupoProduto />}
      />

      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
