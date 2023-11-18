import { useFormik } from "formik";
import Container from "../../components/Container";
import Tabs, { Tab } from "../../components/Tabs";
import { useState } from "react";
import Detalhes from "./Detalhes";
import Investidores from "./Investidores";
import Terreno from "./Terreno";
import LeftModal from "../../components/LeftModal";
import UnidadeResidencial from "./UnidadeResidencial";
import Materiais from "./Materiais";
import { useModalProduto } from "../../hooks/useModalProduto";

export interface IConstrucao {
  id: string;
  identificador: string;
  status: string;
  dataInicio: string;
  dataFim: string;
  cep: string;
  endereco: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string;
  complemento: string;
  areaLote: string;
  areaConstruida: string;
  inscricaoMunicipal: string;
  alvara: string;
  usoDeSolo: string;
  art: string;
  cno: string;
  matriculaMae: string;
  latitude: string;
  longitude: string;
  valorVenda: string;
}

export default function Construcao() {
  const [selectedTab, setSelectedTab] = useState(0);

  const formik = useFormik<IConstrucao>({
    initialValues: {
      id: "",
      identificador: "",
      status: "",
      dataInicio: "",
      dataFim: "",
      cep: "",
      endereco: "",
      numero: "",
      bairro: "",
      cidade: "",
      estado: "",
      complemento: "",
      areaLote: "",
      areaConstruida: "",
      inscricaoMunicipal: "",
      alvara: "",
      usoDeSolo: "",
      art: "",
      cno: "",
      matriculaMae: "",
      latitude: "",
      longitude: "",
      valorVenda: "",
    },

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const [showleftModal, setShowLeftModal] = useState(false);

  const modalProduto = useModalProduto();

  return (
    <Container>
      {/* <LeftModal showleftModal={showleftModal} setShowLeftModal={setShowLeftModal}
        title="Cadastrar Casa"
      >
        <div className="grid grid-cols-2 gap-4 mt-5">
          <div className="flex flex-col">
            <label htmlFor="identificador">Descrição</label>
            <input
              id="descricao"
              name="descricao"
              type="text"

              placeholder="Ex: Casa 1"
            />
          </div>
          <div className="flex flex-col">

            <label htmlFor="fracao_terreno">Fração do Terreno</label>
            <input
              id="fracao_terreno"
              name="fracao_terreno"
              type="text"

            />
          </div>
          <div className="flex flex-col">

            <label htmlFor="area_construida">Área Construída</label>
            <input
              id="area_construida"
              name="area_construida"
              type="text"

            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="area_permeavel">Área Permeável</label>
            <input
              id="area_permeavel"
              name="area_permeavel"
              type="text"

            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="matricula">Matrícula</label>
            <input
              id="matricula"
              name="matricula"

            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="un_cons_energia">Un. Consumidora de Energia</label>
            <input
              id="un_cons_energia"
              name="un_cons_energia"
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="un_cons_agua">Un. Consumidora de Água</label>
            <input
              id="un_cons_agua"
              name="un_cons_agua"
              type="text"

            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="valor_venda">Valor de Venda</label>
            <input
              id="valor_venda"
              name="valor_venda"
              type="text"

            />
          </div>
          <div className="flex justify-end w-full gap-2 col-span-2 ">
            <button className="border-[#003569] text-[#003569] border px-4 py-2 rounded-md"
              onClick={() => {
                setShowLeftModal(showleftModal => !showleftModal)
              }}
            >Cancelar</button>
            <button type="submit" className="bg-[#003569] text-white px-4 py-2 rounded-md w-[100px]">Salvar</button>
          </div>
        </div>
      </LeftModal >

      <button
        className="fixed left-16 h-16 w-16 bg-blue-500 text-white rounded-full shadow-lg flex items-center justify-center z-30"
        onClick={() => setShowLeftModal(showleftModal => !showleftModal)}
      >Abrir
      </button>
       */}
      <button
        className="fixed left-16 h-16 w-16 bg-blue-500 text-white rounded-full shadow-lg flex items-center justify-center z-30"
        onClick={() => modalProduto.mostrar()}
      >
        Abrir
      </button>
      <div className="flex justify-between">

        <h4 className="text-2xl font-normal leading-none mb-3">
          Cadastrar Construção
        </h4>


      </div>

      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab}>
        <Tab label="Detalhes" selected onClick={() => { }}>
          <Detalhes formik={formik} />
        </Tab>
        <Tab label="Investidores" selected onClick={() => { }}>
          <Investidores />
        </Tab>
        <Tab label="Terreno" selected onClick={() => { }}>
          <Terreno />
        </Tab>
        <Tab label="Unidades residenciais" selected onClick={() => { }}>
          <UnidadeResidencial />
        </Tab>
        <Tab label="Materiais" selected onClick={() => { }}>
          <Materiais />
        </Tab>
        <Tab label="Mão de obra" selected onClick={() => { }}></Tab>
        <Tab label="Documentação" selected onClick={() => { }}></Tab>
        <Tab label="Despesas Diversas" selected onClick={() => { }}></Tab>
      </Tabs>
    </Container>
  );
}
