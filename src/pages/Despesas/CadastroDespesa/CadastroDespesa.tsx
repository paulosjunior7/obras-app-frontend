import { useParams, useNavigate } from "react-router-dom";
import { Grid, TextField } from "@mui/material";

import {
  useCriarDespesaMutation,
  useEditarDespesaMutation,
  useGetDespesaByIdQuery,
  ExpenseType,
} from "../../../graphql/generated";
import { toast } from "react-toastify";

import * as yup from "yup";
import { useFormik } from "formik";
import { IdentificationCard } from "phosphor-react";
import { forwardRef, useImperativeHandle } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/app";
import { ModalService } from "../../../components/ModalService";
interface IFormInputs {
  descricao: string;
}

export interface CadastroDespesaProps {
  salvar: () => void;
}

export const CadastroDespesa = forwardRef<
  CadastroDespesaProps,
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

  const [criarDespesa] = useCriarDespesaMutation({
    onCompleted: (resposta) => {
      toast.success("Despesa cadastrado", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
      state.onClose?.();
      ModalService.hide({
        onClose: state.onClose,
      });
    },
    onError: (error) => {
      toast.error("Falha ao cadastrar despesa", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
    },
  });

  const [editarDespesa] = useEditarDespesaMutation({
    onCompleted: (resposta) => {
      toast.success("Despesa alterado", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
      state.onClose?.();
      ModalService.hide({
        onClose: state.onClose,
      });
    },
    onError: (error) => {
      toast.error("Falha ao alterar despesa", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
    },
  });

  const formik = useFormik<ExpenseType>({
    initialValues: {
      description: "",
      active: true,
      id: 0,
    },
    validationSchema: schema,
    onSubmit: (values) => {
      Number(id) > 0
        ? editarDespesa({
            variables: {
              id: Number(id),
              input: {
                description: values.description,
                active: true,
              },
            },
          })
        : criarDespesa({
            variables: {
              input: {
                description: values.description,
                active: true,
              },
            },
          });
    },
  });

  const { loading } = useGetDespesaByIdQuery({
    variables: {
      id: Number(id),
    },
    onCompleted: (response) => {
      formik.setValues({
        description: response?.expenses?.findById?.description,
        active: response?.expenses?.findById?.active!,
        id: response?.expenses?.findById?.id!,
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
