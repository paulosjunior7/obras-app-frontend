import { useParams, useNavigate } from "react-router-dom";
import { Grid, Typography, TextField } from "@mui/material";

import {
  useCriarCargoMutation,
  useEditarCargoMutation,
  ResponsibilityType,
  useGetCargoByIdQuery,
} from "../../../graphql/generated";
import { toast } from "react-toastify";

import * as yup from "yup";
import { useFormik } from "formik";
import { forwardRef, useImperativeHandle } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/app";
import { ModalService } from "../../../components/ModalService";
interface IFormInputs {
  descricao: string;
  detalhe: number;
}

export interface CadastroCargoProps {
  salvar: () => void;
}

export const CadastroCargo = forwardRef<
  CadastroCargoProps,
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

  const [criarCargo] = useCriarCargoMutation({
    onCompleted: (resposta) => {
      toast.success("Cargo cadastrado", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
      state.onClose?.();
      ModalService.hide({
        onClose: state.onClose,
      });
    },
    onError: (error) => {
      toast.error("Falha ao cadastrar cargo", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
    },
  });

  const [editarCargo] = useEditarCargoMutation({
    onCompleted: (resposta) => {
      toast.success("Cargo alterado", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
      state.onClose?.();
      ModalService.hide({
        onClose: state.onClose,
      });
    },
    onError: (error) => {
      toast.error("Falha ao alterar cargo", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
    },
  });

  const formik = useFormik<ResponsibilityType>({
    initialValues: {
      description: "",
      active: true,
      id: 0,
    },
    validationSchema: schema,
    onSubmit: (values) => {
      Number(id) > 0
        ? editarCargo({
            variables: {
              id: Number(id),
              input: {
                description: values.description,
                active: values.active,
              },
            },
          })
        : criarCargo({
            variables: {
              input: {
                description: values.description,
                active: values.active,
              },
            },
          });
    },
  });

  const { loading } = useGetCargoByIdQuery({
    variables: {
      id: Number(id),
    },
    onCompleted: (response) => {
      formik.setValues({
        description: response?.responsibilities?.findById?.description,
        active: response?.responsibilities?.findById?.active!,
        id: response?.responsibilities?.findById?.id!,
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
      </div>
    </form>
  );
});
