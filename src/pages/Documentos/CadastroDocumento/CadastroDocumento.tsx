import { useParams, useNavigate } from "react-router-dom";
import { Grid, TextField } from "@mui/material";

import {
  useCriarDocumentoMutation,
  useEditarDocumentoMutation,
  DocumentationType,
  useGetDocumentacaoByIdQuery,
} from "../../../graphql/generated";
import { toast } from "react-toastify";

import * as yup from "yup";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { forwardRef, useImperativeHandle } from "react";
import { RootState } from "../../../redux/app";
import { ModalService } from "../../../components/ModalService";

interface IFormInputs {
  descricao: string;
}

export interface CadastroDocumentoProps {
  salvar: () => void;
}

export const CadastroDocumento = forwardRef<
  CadastroDocumentoProps,
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

  const [criarDocumento] = useCriarDocumentoMutation({
    onCompleted: (resposta) => {
      toast.success("Documento cadastrado", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
      state.onClose?.();
      ModalService.hide({
        onClose: state.onClose,
      });
    },
    onError: (error) => {
      toast.error("Falha ao cadastrar documento", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
    },
  });

  const [editarDocumento] = useEditarDocumentoMutation({
    onCompleted: (resposta) => {
      toast.success("Documento alterado", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
      state.onClose?.();
      ModalService.hide({
        onClose: state.onClose,
      });
    },
    onError: (error) => {
      toast.error("Falha ao alterar documento", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
    },
  });

  const formik = useFormik<DocumentationType>({
    initialValues: {
      description: "",
      active: true,
      id: 0,
    },
    validationSchema: schema,
    onSubmit: (values) => {
      Number(id) > 0
        ? editarDocumento({
            variables: {
              id: Number(id),
              input: {
                description: values.description,
                active: true,
              },
            },
          })
        : criarDocumento({
            variables: {
              input: {
                description: values.description,
                active: true,
              },
            },
          });
    },
  });

  const { loading } = useGetDocumentacaoByIdQuery({
    variables: {
      id: Number(id),
    },
    onCompleted: (response) => {
      formik.setValues({
        description: response?.documentations?.findById?.description,
        active: response?.documentations?.findById?.active!,
        id: response?.documentations?.findById?.id!,
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
