import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";

import {
  BrandType,
  useCriarMarcaMutation,
  useEditarMarcaMutation,
  useGetMarcaByIdQuery,
} from "../../../graphql/generated";
import { toast } from "react-toastify";

import * as yup from "yup";
import { useFormik } from "formik";
import { forwardRef, useImperativeHandle } from "react";
import { ModalService } from "../../../components/ModalService";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/app";

export interface CadastroMarcaProps {
  salvar: () => void;
}

interface IFormInputs {
  descricao: string;
  detalhe: number;
}

const CadastroMarca = forwardRef<
  CadastroMarcaProps,
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
    })
    .required();

  const [criarMarca] = useCriarMarcaMutation({
    onCompleted: (resposta) => {
      toast.success("Marca cadastrada", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
      state.onClose?.();
      ModalService.hide({
        onClose: state.onClose,
      });
    },
    onError: (error) => {
      toast.error("Falha ao cadastrar marca", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
    },
  });

  const [editarMarca] = useEditarMarcaMutation({
    onCompleted: (resposta) => {
      toast.success("Marca alterada", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
      state.onClose?.();
      ModalService.hide({
        onClose: state.onClose,
      });
    },
    onError: (error) => {
      toast.error("Falha ao alterar marca", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
    },
  });

  const formik = useFormik<BrandType>({
    initialValues: {
      description: "",
      active: true,
      id: 0,
    },
    validationSchema: schema,
    onSubmit: (values) => {
      Number(id) > 0
        ? editarMarca({
          variables: {
            id: Number(id),
            input: {
              description: values.description,
              active: true,
            },
          },
        })
        : criarMarca({
          variables: {
            input: {
              description: values.description,
              active: true,
            },
          },
        });
    },
  });

  const { loading } = useGetMarcaByIdQuery({
    variables: {
      id: Number(id),
    },
    onCompleted: (response) => {
      formik.setValues({
        description: response?.brands?.findById?.description,
        active: response?.brands?.findById?.active!,
        id: response?.brands?.findById?.id!,
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
            formik.touched.description &&
            Boolean(formik.errors.description)
          }
          helperText={
            formik.touched.description &&
            formik.errors.description
          }
        />
      </div>
    </form >
  );
});

export default CadastroMarca;