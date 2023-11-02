import { useFormik } from "formik";
import Container from "../../components/Container";
import Tabs, { Tab } from "../../components/Tabs";
import { useState } from "react";
import Detalhes from "./Detalhes";
import Investidores from "./Investidores";
import Terreno from "./Terreno";
import Casas from "./Casas";
import LeftModal from "../../components/LeftModal";

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
      id: '',
      identificador: '',
      status: '',
      dataInicio: '',
      dataFim: '',
      cep: '',
      endereco: '',
      numero: '',
      bairro: '',
      cidade: '',
      estado: '',
      complemento: '',
      areaLote: '',
      areaConstruida: '',
      inscricaoMunicipal: '',
      alvara: '',
      usoDeSolo: '',
      art: '',
      cno: '',
      matriculaMae: '',
      latitude: '',
      longitude: '',
      valorVenda: '',
    },

    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  const [showleftModal, setShowLeftModal] = useState(false);


  return (
    <Container>
      <LeftModal showleftModal={showleftModal} setShowLeftModal={setShowLeftModal} />
      <button
        className="fixed right-16 h-16 w-16 bg-blue-500 text-white rounded-full shadow-lg flex items-center justify-center z-30"
        onClick={() => setShowLeftModal(showleftModal => !showleftModal)}
      >Abrir
      </button>
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
          <Casas />
        </Tab>
        <Tab label="Materiais" selected onClick={() => { }}>
        </Tab>
        <Tab label="Mão de obra" selected onClick={() => { }}>
        </Tab>
        <Tab label="Documentação" selected onClick={() => { }}>
        </Tab>
        <Tab label="Despesas Diversas" selected onClick={() => { }}>
        </Tab>
      </Tabs>
    </Container>
  )
}