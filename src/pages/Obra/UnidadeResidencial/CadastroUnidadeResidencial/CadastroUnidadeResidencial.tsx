import { useParams, useNavigate } from "react-router-dom";
import { Grid, Typography, TextField } from "@mui/material";

import {
  useCriarUnidadeResidencialMutation,
  useEditarUnidadeResindecialMutation,
  ConstructionHouseType,
  useGetUnidadeResidencialByIdQuery,
} from "../../../../graphql/generated";
import { toast } from "react-toastify";

import * as yup from "yup";
import { useFormik } from "formik";
interface IFormInputs {
  descricao: string;
  detalhe: number;
}

function CadastroUnidadeResidencial() {
  const navigate = useNavigate();
  const { slug, idUnidade } = useParams<{ slug: string; idUnidade: string }>();

  const schema = yup
    .object({
      description: yup.string().required("campo obrigatório!"),
    })
    .required();

  const [criarUnidadeResidencial] = useCriarUnidadeResidencialMutation({
    onCompleted: (resposta) => {
      toast.success("Unidade residêncial cadastrada", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
      navigate(`/obra/${slug}/unidades-resindencial`);
    },
    onError: (error) => {
      toast.error("Falha ao cadastrar unidade residêncial", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
    },
  });

  const [editarUnidadeResidencial] = useEditarUnidadeResindecialMutation({
    onCompleted: (resposta) => {
      toast.success("Unidade residêncial alterado", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
      navigate(`/obra/${slug}/unidades-resindencial`);
    },
    onError: (error) => {
      toast.error("Falha ao alterar unidade residêncial", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
    },
  });


  const formik = useFormik<ConstructionHouseType>({
    initialValues: {
      description: "",
      active: true,
      id: 0,
      constructionId: Number(slug),
      permeableArea: 0,
      fractionBatch: 0,
      buildingArea: 0,
      saleValue: 0,
      energyConsumptionUnit: '',
      waterConsumptionUnit: '',
    },
    validationSchema: schema,
    onSubmit: (values) => {
      Number(idUnidade) > 0
        ? editarUnidadeResidencial({
          variables: {
            id: Number(idUnidade),
            input: {
              description: values.description,
              constructionId: values.constructionId,
              permeableArea: values.permeableArea,
              fractionBatch: values.fractionBatch,
              buildingArea: values.buildingArea,
              energyConsumptionUnit: values.energyConsumptionUnit,
              saleValue: values.saleValue,
              waterConsumptionUnit: values.waterConsumptionUnit,
              active: true,
            },
          },
        })
        : criarUnidadeResidencial({
          variables: {
            input: {
              description: values.description,
              constructionId: values.constructionId,
              permeableArea: values.permeableArea,
              fractionBatch: values.fractionBatch,
              buildingArea: values.buildingArea,
              energyConsumptionUnit: values.energyConsumptionUnit,
              saleValue: values.saleValue,
              waterConsumptionUnit: values.waterConsumptionUnit,
              active: true,
            },
          },
        });
    },
  });

  const { loading } = useGetUnidadeResidencialByIdQuery({
    variables: {
      id: Number(idUnidade),
    },
    onCompleted: (response) => {
      formik.setValues({
        description: response?.constructionHouses?.findById?.description!,
        constructionId: response?.constructionHouses?.findById?.constructionId!,
        permeableArea: response?.constructionHouses?.findById?.permeableArea!,
        fractionBatch: response?.constructionHouses?.findById?.fractionBatch!,
        buildingArea: response?.constructionHouses?.findById?.buildingArea!,
        energyConsumptionUnit: response?.constructionHouses?.findById?.energyConsumptionUnit!,
        saleValue: response?.constructionHouses?.findById?.saleValue!,
        waterConsumptionUnit: response?.constructionHouses?.findById?.waterConsumptionUnit!,
        active: response?.constructionHouses?.findById?.active!,
        id: response?.constructionHouses?.findById?.id!,
      });
    },
    skip: !!!idUnidade,
    fetchPolicy: "network-only",
  });

  return (
    <>
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5"></div>
      </div>

      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Cadastrar unidade residêncial
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Use a permanent address where you can receive mail.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="shadow overflow-hidden sm:rounded-md">
              <form
                onSubmit={formik.handleSubmit}
                className=" flex justify-center flex-col "
              >
                <div className="py-5 px-3 flex justify-center items-center">
                  <Grid container spacing={3} xs={12} direction="row">
                    <Grid item xs={12} md={12}>
                      <TextField
                        fullWidth
                        size="small"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        name="description"
                        label="Descrição"
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.description &&
                          Boolean(formik.errors.description)
                        }
                        helperText={
                          formik.touched.description &&
                          formik.errors.description
                        }
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        size="small"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        type="number"
                        name="permeableArea"
                        label="Área permeavel"
                        value={formik.values.permeableArea}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.permeableArea &&
                          Boolean(formik.errors.permeableArea)
                        }
                        helperText={
                          formik.touched.permeableArea &&
                          formik.errors.permeableArea
                        }
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        size="small"
                        type="number"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        name="fractionBatch"
                        label="Fração do lote"
                        value={formik.values.fractionBatch}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.fractionBatch &&
                          Boolean(formik.errors.fractionBatch)
                        }
                        helperText={
                          formik.touched.fractionBatch &&
                          formik.errors.fractionBatch
                        }
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        size="small"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        type="number"
                        name="buildingArea"
                        label="Área construída"
                        value={formik.values.buildingArea}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.buildingArea &&
                          Boolean(formik.errors.buildingArea)
                        }
                        helperText={
                          formik.touched.buildingArea &&
                          formik.errors.buildingArea
                        }
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        size="small"
                        type="number"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        name="energyConsumptionUnit"
                        label="Un.Consumidora Energia"
                        value={formik.values.energyConsumptionUnit}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.energyConsumptionUnit &&
                          Boolean(formik.errors.energyConsumptionUnit)
                        }
                        helperText={
                          formik.touched.energyConsumptionUnit &&
                          formik.errors.energyConsumptionUnit
                        }
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        size="small"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        type="number"
                        name="waterConsumptionUnit"
                        label="Un.Consumidora água"
                        value={formik.values.waterConsumptionUnit}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.waterConsumptionUnit &&
                          Boolean(formik.errors.waterConsumptionUnit)
                        }
                        helperText={
                          formik.touched.waterConsumptionUnit &&
                          formik.errors.waterConsumptionUnit
                        }
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        size="small"
                        type="number"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        name="saleValue"
                        label="Valor venda"
                        value={formik.values.saleValue}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.saleValue &&
                          Boolean(formik.errors.saleValue)
                        }
                        helperText={
                          formik.touched.saleValue && formik.errors.saleValue
                        }
                      />
                    </Grid>
                  </Grid>
                </div>
                <div>
                  <div className="px-4 py-4 bg-gray-50 text-right ">
                    <button
                      type="button"
                      className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={() =>
                        navigate(`/obra/${slug}/unidades-resindencial`)
                      }
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 ml-2 min-w-[90px]  border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Salvar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CadastroUnidadeResidencial;
