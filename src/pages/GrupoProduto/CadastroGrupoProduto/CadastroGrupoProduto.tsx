import { useParams, useNavigate } from "react-router-dom";
import { Grid, TextField } from "@mui/material";

import {
  useEditarGrupoProdutoMutation,
  useCriarGrupoProdutoMutation,
  GroupType,
  useGetGrupoByIdQuery,
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
}

export interface CadastroGrupoProdutoProps {
  salvar: () => void;
}

export const CadastroGrupoProduto = forwardRef<
  CadastroGrupoProdutoProps,
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

  const [criarGrupo] = useCriarGrupoProdutoMutation({
    onCompleted: (resposta) => {
      toast.success("Grupo cadastrado", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
      state.onClose?.();
      ModalService.hide({
        onClose: state.onClose,
      });
    },
    onError: (error) => {
      toast.error("Falha ao cadastrar grupo", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
    },
  });

  const [editarGrupo] = useEditarGrupoProdutoMutation({
    onCompleted: (resposta) => {
      toast.success("Grupo alterado", {
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

  const formik = useFormik<GroupType>({
    initialValues: {
      description: "",
      active: true,
      id: 0,
    },
    validationSchema: schema,
    onSubmit: (values) => {
      Number(id) > 0
        ? editarGrupo({
            variables: {
              id: Number(id),
              input: {
                description: values.description,
                active: values.active,
              },
            },
          })
        : criarGrupo({
            variables: {
              input: {
                description: values.description,
                active: values.active,
              },
            },
          });
    },
  });

  const { loading } = useGetGrupoByIdQuery({
    variables: {
      id: Number(id),
    },
    onCompleted: (response) => {
      formik.setValues({
        description: response?.group?.findById?.description,
        active: response?.group?.findById?.active!,
        id: response?.group?.findById?.id!,
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
