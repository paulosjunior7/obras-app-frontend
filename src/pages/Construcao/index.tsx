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
import { ConstructionInputType, useCriarConstrucaoMutation } from "../../graphql/generated";

export default function Construcao() {
  const [selectedTab, setSelectedTab] = useState(0);

  const [criarConstrucao] = useCriarConstrucaoMutation({
    onCompleted: (response) => {
      console.log(response)
    },
    onError: (error) => {
      console.log(error)
    },
  });

  const formik = useFormik<ConstructionInputType>({
    initialValues: {
      identifier: "",
      statusConstruction: undefined,
      dateBegin: "",
      dateEnd: "",
      zipCode: "",
      address: "",
      number: "",
      neighbourhood: "",
      city: "",
      state: "",
      complement: "",
      batchArea: 0,
      buildingArea: 0,
      municipalRegistration: 0,
      license: 0,
      undergroundUse: 0,
      art: 0,
      cno: 0,
      motherEnrollment: 0,
      latitude: 0,
      longitude: 0,
      saleValue: 0,
      active: true,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      try {
        criarConstrucao({
          variables: {
            input: {
              identifier: values.identifier,
              statusConstruction: values.statusConstruction,
              dateBegin: values.dateBegin,
              dateEnd: values.dateEnd,
              zipCode: values.zipCode,
              address: values.address,
              number: values.number,
              neighbourhood: values.neighbourhood,
              city: values.city,
              state: values.state,
              complement: values.complement,
              batchArea: values.batchArea,
              buildingArea: values.buildingArea,
              municipalRegistration: values.municipalRegistration,
              license: values.license,
              undergroundUse: values.undergroundUse,
              art: values.art,
              cno: values.cno,
              motherEnrollment: values.motherEnrollment,
              latitude: values.latitude,
              longitude: values.longitude,
              saleValue: values.saleValue,
              active: values.active,
            },
          },
        })
      } catch (error) {
        console.log(error)
      }

    },
  });

  const modalProduto = useModalProduto();

  return (
    <Container>
      <div className="flex justify-between">
        <h4 className="text-2xl font-normal leading-none mb-3">
          Cadastrar Construção
        </h4>
      </div>

      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab}>
        <Tab label="Detalhes" selected onClick={() => { }}>
          <Detalhes
            formik={formik}
          />
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
