import { useNavigate } from "react-router-dom";
import { Grid, TextField } from "@mui/material";

import {
  ProductType,
  useCriarProdutoMutation,
  useEditarProdutoMutation,
  useGetProdutoByIdQuery,
} from "../../../graphql/generated";
import { toast } from "react-toastify";

import * as yup from "yup";
import { useFormik } from "formik";
import { forwardRef, useImperativeHandle } from "react";
import { ModalService } from "../../../components/ModalService";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/app";

export interface CadastroProdutoProps {
  salvar: () => void;
}

export const CadastroProduto = forwardRef<
  CadastroProdutoProps,
  {
    id?: number;
  }
>(({ id }, ref) => {
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
      detail: yup.string().required("campo obrigatório!"),
    })
    .required();

  const [criarProduto] = useCriarProdutoMutation({
    onCompleted: (resposta) => {
      toast.success("Produto cadastrado", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
      state.onClose?.();
      ModalService.hide({
        onClose: state.onClose,
      });
    },
    onError: (error) => {
      toast.error("Falha ao cadastrar produto", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
    },
  });

  const [editarProduto] = useEditarProdutoMutation({
    onCompleted: (resposta) => {
      toast.success("Produto alterado", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
      state.onClose?.();
      ModalService.hide({
        onClose: state.onClose,
      });
    },
    onError: (error) => {
      toast.error("Falha ao alterar produto", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
    },
  });

  const formik = useFormik<ProductType>({
    initialValues: {
      description: "",
      detail: "",
      active: true,
      id: 0,
    },
    validationSchema: schema,
    onSubmit: (values) => {
      Number(id) > 0
        ? editarProduto({
          variables: {
            id: Number(id),
            input: {
              description: values.description,
              detail: values.detail!,
              active: values.active!,
            },
          },
        })
        : criarProduto({
          variables: {
            input: {
              description: values.description,
              detail: values.detail!,
              active: values.active!,
            },
          },
        });
    },
  });

  const { loading } = useGetProdutoByIdQuery({
    variables: {
      id: Number(id),
    },
    onCompleted: (response) => {
      formik.setValues({
        description: response?.products?.findById?.description,
        detail: response?.products?.findById?.detail,
        active: response?.products?.findById?.active!,
        id: response?.products?.findById?.id!,
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
          name="detail"
          label="Detalhe"
          value={formik.values.detail}
          onChange={formik.handleChange}
          error={formik.touched.detail && Boolean(formik.errors.detail)}
          helperText={formik.touched.detail && formik.errors.detail}
        />
      </div>
    </form>
  );
});
