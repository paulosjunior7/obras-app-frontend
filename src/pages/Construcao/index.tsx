import { useFormik } from "formik";
import Container from "../../components/Container";
import Tabs, { Tab } from "../../components/Tabs";
import { useState } from "react";
import Detalhes from "./Detalhes";
import Investidores from "./Investidores";
import Terreno from "./Terreno";
import UnidadeResidencial from "./UnidadeResidencial";
import Materiais from "./Materiais";
import { ConstructionInputType, StatusConstructionEnumType, useCriarConstrucaoMutation, useEditarConstrucaoMutation, useGetObraByIdQuery } from "../../graphql/generated";
import { convertDateToISOWithTimezone } from "../../utils/convertISOdate";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { format } from "date-fns";

export default function Construcao() {
  const [selectedTab, setSelectedTab] = useState(0);
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const [criarConstrucao] = useCriarConstrucaoMutation({
    onCompleted: (response) => {
      toast.success("Construção cadastrada com sucesso", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
    },
    onError: (error) => {
      toast.error("Falha ao cadastrar construção", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
    },
  });

  const [editarConstrucao] = useEditarConstrucaoMutation({
    onCompleted: (resposta) => {
      toast.success("Construção alterada", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
      navigate("/construcoes");
    },
    onError: (error) => {
      toast.error("Falha ao alterar a construção", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
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
      try {
        if (slug) {
          editarConstrucao({
            variables: {
              id: Number(slug),
              input: {
                identifier: values.identifier,
                statusConstruction: values.statusConstruction,
                dateBegin: convertDateToISOWithTimezone(values.dateBegin),
                dateEnd: convertDateToISOWithTimezone(values.dateEnd),
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
        } else {
          criarConstrucao({
            variables: {
              input: {
                identifier: values.identifier,
                statusConstruction: values.statusConstruction,
                dateBegin: convertDateToISOWithTimezone(values.dateBegin),
                dateEnd: convertDateToISOWithTimezone(values.dateEnd),
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
        }
      } catch (error) {
        console.log(error)
      }
    },
  });

  const { loading } = useGetObraByIdQuery({
    variables: {
      id: Number(slug),
    },
    skip: !!!slug,
    fetchPolicy: "cache-and-network",
    onCompleted: (response) => {
      formik.setValues({
        address: response.constructions?.findById?.address!,
        art: response.constructions?.findById?.art!,
        batchArea: response.constructions?.findById?.batchArea!,
        buildingArea: response.constructions?.findById?.buildingArea!,
        city: response.constructions?.findById?.city!,
        cno: response.constructions?.findById?.cno!,
        complement: response.constructions?.findById?.complement!,
        dateBegin: format(
          new Date(response.constructions?.findById?.dateBegin),
          "yyyy-MM-dd"
        ),
        dateEnd: response.constructions?.findById?.dateEnd,
        identifier: response.constructions?.findById?.identifier!,
        latitude: response.constructions?.findById?.latitude!,
        license: response.constructions?.findById?.license!,
        longitude: response.constructions?.findById?.longitude!,
        motherEnrollment: response.constructions?.findById?.motherEnrollment,
        municipalRegistration:
          response.constructions?.findById?.municipalRegistration,
        neighbourhood: response.constructions?.findById?.neighbourhood,
        number: response.constructions?.findById?.number,
        saleValue: response.constructions?.findById?.saleValue,
        state: response.constructions?.findById?.state!,
        undergroundUse: response.constructions?.findById?.undergroundUse,
        zipCode: response.constructions?.findById?.zipCode,
        statusConstruction:
          response.constructions?.findById?.statusConstruction as StatusConstructionEnumType,
        active: response.constructions?.findById?.active!,
      });
    },
  });

  return (
    <Container>
      <div className="flex justify-between">
        <h4 className="text-2xl font-normal leading-none mb-3">
          {
            slug ? "Editar construção" : "Cadastrar construção"
          }
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
