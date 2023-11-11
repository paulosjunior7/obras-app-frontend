import React, { useState, useEffect } from "react";
import { Grid, Typography, TextField } from "@mui/material";
import { useFormik, Form } from "formik";
import {
  ConstructionHouseType,
  useCriarUnidadeResidencialMutation,
} from "../../../graphql/generated";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ListagemUnidadeResidencial from "./ListagemUnidadeResidencial";

const UnidadeResidencial: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const formik = useFormik<ConstructionHouseType>({
    initialValues: {
      id: 0,
      description: "",
      active: true,
      buildingArea: 0,
      fractionBatch: 0,
      permeableArea: 0,
      energyConsumptionUnit: "",
      saleValue: 0,
      constructionId: 0,
      waterConsumptionUnit: "",
      construction: undefined,
    },
    onSubmit: (values) => {
      criarUnidadeResidencial({
        variables: {
          input: {
            description: values.description,
            buildingArea: values.buildingArea,
            fractionBatch: values.fractionBatch,
            permeableArea: values.permeableArea,
            energyConsumptionUnit: values.energyConsumptionUnit,
            saleValue: values.saleValue,
            constructionId: Number(slug),
            waterConsumptionUnit: values.waterConsumptionUnit,
            active: true,
          },
        },
      });
    },
  });

  const [criarUnidadeResidencial] = useCriarUnidadeResidencialMutation({
    onCompleted: (resposta) => {
      toast.success("Unidade residêncial criada com sucesso", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
    },
    onError: (error) => {
      toast.error("Falha a criar a unidade resindêncial", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
    },
  });

  return (
    <>
      <div className="w-full h-auto min-h-[calc(100vh-172px)] mb-2 rounded-lg border p-12 mt-2 border-gray-200 shadow-md  bg-white">
        <form onSubmit={formik.handleSubmit}>
          <Typography className="text-slate-900 font-bold text-sm">
            Unidades Residênciais
          </Typography>
          <br />
          <Grid container spacing={3}>
            <Grid item xs={12} md={10}></Grid>
            <Grid item xs={12} md={2}>
              <button
                onClick={() => {
                  navigate(`/obra/${slug}/unidades-resindencial/cadastro`);
                }}
                className="inline-flex justify-center w-full py-2 px-4 border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Adicionar
              </button>
            </Grid>
            <Grid item xs={12} md={12}>
              <ListagemUnidadeResidencial />
            </Grid>
          </Grid>
        </form>
      </div>
    </>
  );
};

export default UnidadeResidencial;
