import { useParams, useNavigate } from "react-router-dom";
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
import LeftModal from "../../../components/LeftModal";

interface IFormInputs {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CadastroProduto({
  setShowModal,
}: IFormInputs) {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();

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
      setShowModal ? setShowModal(false) : navigate("/produtos");
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
      setShowModal ? setShowModal(false) : navigate("/produtos");
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
      Number(slug) > 0
        ? editarProduto({
          variables: {
            id: Number(slug),
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
      id: Number(slug),
    },
    onCompleted: (response) => {
      formik.setValues({
        description: response?.products?.findById?.description,
        detail: response?.products?.findById?.detail,
        active: response?.products?.findById?.active!,
        id: response?.products?.findById?.id!,
      });
    },
    skip: !!!slug,
    nextFetchPolicy: "network-only",
  });

  return (

    <form
      onSubmit={formik.handleSubmit}
      className="bg-white flex justify-center flex-col gap-4"
    >
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
          error={
            formik.touched.detail && Boolean(formik.errors.detail)
          }
          helperText={
            formik.touched.detail && formik.errors.detail
          }
        />

      </div>
      <div>
        <div className="flex justify-end w-full gap-2 col-span-2">
          <button
            className="border-[#003569] text-[#003569] border px-4 py-2 rounded-md"
            onClick={() => navigate("/produtos")}
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="bg-[#003569] text-white px-4 py-2 rounded-md w-[100px]"
          >
            Salvar
          </button>
        </div>
      </div>
    </form>
  );
}
