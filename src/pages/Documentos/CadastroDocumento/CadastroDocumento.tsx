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

interface IFormInputs {
  descricao: string;
}

function CadastroDocumento() {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();

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
      navigate("/documentos");
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
      navigate("/documentos");
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
      Number(slug) > 0
        ? editarDocumento({
          variables: {
            id: Number(slug),
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
      id: Number(slug),
    },
    onCompleted: (response) => {
      formik.setValues({
        description: response?.documentations?.findById?.description,
        active: response?.documentations?.findById?.active!,
        id: response?.documentations?.findById?.id!,
      });
    },
    skip: !!!slug,
    fetchPolicy: "network-only",
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
                Cadastrar Documento
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
                    <Grid item xs={12} md={12}>
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
                  </Grid>
                </div>
                <div>
                  <div className="px-4 py-4 bg-gray-50 text-right ">
                    <button
                      type="button"
                      className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={() => navigate("/documentos")}
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

export default CadastroDocumento;
