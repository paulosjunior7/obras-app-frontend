import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Grid, Typography, TextField } from "@mui/material";

import {
  BrandType,
  UnityType,
  useCriarMarcaMutation,
  useCriarUnidadeMutation,
  useEditarMarcaMutation,
  useEditarUnidadeMutation,
  useGetMarcaByIdQuery,
  useGetMarcasQuery,
  useGetUnidadeByIdQuery,
} from "../../../graphql/generated";
import { toast } from "react-toastify";

import * as yup from "yup";
import { useFormik } from "formik";

function CadastroUnidade() {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();

  const schema = yup
    .object({
      description: yup.string().required("campo obrigatório!"),
      multiplier: yup.number().required("campo obrigatório!"),
    })
    .required();

  const [criarUnidade] = useCriarUnidadeMutation({
    onCompleted: (resposta) => {
      toast.success("Unidade cadastrada", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
      navigate("/unidades");
    },
    onError: (error) => {
      toast.error("Falha ao cadastrar unidade", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
    },
  });

  const [editarUnidade] = useEditarUnidadeMutation({
    onCompleted: (resposta) => {
      toast.success("Unidade alterada", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
      navigate("/unidades");
    },
    onError: (error) => {
      toast.error("Falha ao alterar unidade", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
    },
  });

  const formik = useFormik<UnityType>({
    initialValues: {
      description: "",
      multiplier: 0,
      active: true,
      id: 0,
    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log(slug);
      Number(slug) > 0
        ? editarUnidade({
            variables: {
              id: Number(slug),
              input: {
                description: values.description,
                multiplier: Number(values.multiplier),
                active: true,
              },
            },
          })
        : criarUnidade({
            variables: {
              input: {
                description: values.description,
                multiplier: Number(values.multiplier),
                active: true,
              },
            },
          });
    },
  });

  const { loading } = useGetUnidadeByIdQuery({
    variables: {
      id: Number(slug),
    },
    onCompleted: (response) => {
      formik.setValues({
        description: response?.unity?.findById?.description,
        multiplier: response?.unity?.findById?.multiplier,
        active: response?.unity?.findById?.active!,
        id: response?.unity?.findById?.id!,
      });
    },
    skip: !!!slug,
    nextFetchPolicy: "network-only",
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
                Cadastrar Unidade
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
                className="bg-white flex justify-center flex-col "
              >
                <div className="py-5 px-3 flex justify-center items-center">
                  <Grid container spacing={3} xs={12} direction="row">
                    <Grid item xs={6} md={6}>
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
                    <Grid item xs={6} md={6}>
                      <TextField
                        fullWidth
                        size="small"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        name="multiplier"
                        label="Multiplicador"
                        value={formik.values.multiplier}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.multiplier &&
                          Boolean(formik.errors.multiplier)
                        }
                        helperText={
                          formik.touched.multiplier && formik.errors.multiplier
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
                      onClick={() => navigate("/unidades")}
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 ml-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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

export default CadastroUnidade;
