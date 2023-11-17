import React, { forwardRef, useImperativeHandle } from "react";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";

import {
  UnityType,
  useCriarUnidadeMutation,
  useEditarUnidadeMutation,
  useGetUnidadeByIdQuery,
} from "../../../graphql/generated";
import { toast } from "react-toastify";

import * as yup from "yup";
import { useFormik } from "formik";
import { ModalService } from "../../../components/ModalService";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/app";

export interface CadastroUnidadeProps {
  salvar: () => void;
}

export const CadastroUnidade = forwardRef<
  CadastroUnidadeProps,
  {
    id?: number;
  }
>(({ id }, ref) => {
  const navigate = useNavigate();
  const state = useSelector((state: RootState) => state.modalReducer);

  const salvar = () => {
    formik.handleSubmit();
  };

  // Expondo a função através da ref
  useImperativeHandle(ref, () => ({
    salvar,
  }));

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
      state.onClose?.();
      ModalService.hide({
        onClose: state.onClose,
      });
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
      ModalService.hide({
        onClose: state.onClose,
      });
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
      Number(id) > 0
        ? editarUnidade({
            variables: {
              id: Number(id),
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
      id: Number(id),
    },
    onCompleted: (response) => {
      formik.setValues({
        description: response?.unity?.findById?.description,
        multiplier: response?.unity?.findById?.multiplier,
        active: response?.unity?.findById?.active!,
        id: response?.unity?.findById?.id!,
      });
    },
    skip: !!!id,
    fetchPolicy: "network-only",
  });

  return (
    <form className="bg-white flex justify-center flex-col gap-4">
      <div className="flex justify-center gap-2">
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
            formik.touched.description && Boolean(formik.errors.description)
          }
          helperText={formik.touched.description && formik.errors.description}
        />
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
          error={formik.touched.multiplier && Boolean(formik.errors.multiplier)}
          helperText={formik.touched.multiplier && formik.errors.multiplier}
        />
      </div>
    </form>
  );
});
