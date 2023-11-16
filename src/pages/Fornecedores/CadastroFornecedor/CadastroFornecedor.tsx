import { useParams, useNavigate } from "react-router-dom";
import { Grid, TextField } from "@mui/material";
import InputMask from "react-input-mask";

import {
  ProviderType,
  useCriarFornecedorMutation,
  useEditarFornecedorMutation,
  useGetFornecedorByIdQuery,
} from "../../../graphql/generated";
import { toast } from "react-toastify";

import * as yup from "yup";
import { useFormik } from "formik";

function CadastroFornecedor() {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();

  const schema = yup
    .object({
      name: yup.string().required("campo obrigatório!"),
    })
    .required();

  const [criarFornecedor] = useCriarFornecedorMutation({
    onCompleted: (resposta) => {
      toast.success("Fornecedor cadastrado", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
      navigate("/fornecedores");
    },
    onError: (error) => {
      toast.error("Falha ao cadastrar fornecedor", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
    },
  });

  const [editarFornecedor] = useEditarFornecedorMutation({
    onCompleted: (resposta) => {
      toast.success("Fornecedor alterado", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
      navigate("/fornecedores");
    },
    onError: (error) => {
      toast.error("Falha ao alterar fornecedor", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
    },
  });

  const formik = useFormik<ProviderType>({
    initialValues: {
      neighbourhood: "",
      number: "",
      state: "",
      telephone: "",
      zipCode: "",
      address: "",
      cellPhone: "",
      city: "",
      cnpj: "",
      complement: "",
      name: "",
      eMail: "",
      active: true,
      id: 0,
    },
    validationSchema: schema,
    onSubmit: (values) => {
      Number(slug) > 0
        ? editarFornecedor({
          variables: {
            id: Number(slug),
            input: {
              neighbourhood: values.neighbourhood,
              number: values.number,
              state: values.state,
              telephone: values.telephone,
              zipCode: values.zipCode,
              address: values.address,
              cellPhone: values.cellPhone,
              city: values.city,
              cnpj: values.cnpj!,
              complement: values.complement,
              name: values.name!,
              eMail: values.eMail,
              active: values.active!,
            },
          },
        })
        : criarFornecedor({
          variables: {
            input: {
              neighbourhood: values.neighbourhood,
              number: values.number,
              state: values.state,
              telephone: values.telephone,
              zipCode: values.zipCode,
              address: values.address,
              cellPhone: values.cellPhone,
              city: values.city,
              cnpj: values.cnpj!,
              complement: values.complement,
              name: values.name!,
              eMail: values.eMail,
              active: values.active!,
            },
          },
        });
    },
  });

  const { loading } = useGetFornecedorByIdQuery({
    variables: {
      id: Number(slug),
    },
    onCompleted: (response) => {
      formik.setValues({
        neighbourhood: response?.providers?.findById?.neighbourhood,
        number: response?.providers?.findById?.number,
        state: response?.providers?.findById?.state,
        telephone: response?.providers?.findById?.telephone,
        zipCode: response?.providers?.findById?.zipCode,
        address: response?.providers?.findById?.address,
        cellPhone: response?.providers?.findById?.cellPhone,
        city: response?.providers?.findById?.city,
        cnpj: response?.providers?.findById?.cnpj,
        complement: response?.providers?.findById?.complement,
        name: response?.providers?.findById?.name,
        eMail: response?.providers?.findById?.eMail,
        active: response?.providers?.findById?.active!,
        id: response?.providers?.findById?.id!,
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
                Cadastrar Fornecedor
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
                <div className="py-7 px-6 flex justify-center items-center">
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        size="small"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        name="name"
                        label="Nome"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.name && Boolean(formik.errors.name)
                        }
                        helperText={formik.touched.name && formik.errors.name}
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <InputMask
                        mask="(99) 9999-9999"
                        onChange={formik.handleChange}
                        value={formik.values.telephone}
                      >
                        <TextField
                          fullWidth
                          size="small"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          name="telephone"
                          label="Telefone"
                          value={formik.values.telephone}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.telephone &&
                            Boolean(formik.errors.telephone)
                          }
                          helperText={
                            formik.touched.telephone &&
                            formik.errors.telephone
                          }
                        />
                      </InputMask>
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <InputMask
                        mask="(99) 99999-9999"
                        onChange={formik.handleChange}
                        value={formik.values.cellPhone}
                      >
                        <TextField
                          fullWidth
                          size="small"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          name="cellPhone"
                          label="Celular"
                          value={formik.values.cellPhone}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.cellPhone &&
                            Boolean(formik.errors.cellPhone)
                          }
                          helperText={
                            formik.touched.cellPhone &&
                            formik.errors.cellPhone
                          }
                        />
                      </InputMask>
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <InputMask
                        mask="99.999.999/9999-99"
                        onChange={formik.handleChange}
                        value={formik.values.cnpj}
                      >
                        <TextField
                          fullWidth
                          size="small"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          name="cnpj"
                          label="CNPJ"
                          value={formik.values.cnpj}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.cnpj && Boolean(formik.errors.cnpj)
                          }
                          helperText={
                            formik.touched.cnpj && formik.errors.cnpj
                          }
                        />
                      </InputMask>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        size="small"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        name="eMail"
                        label="E-mail"
                        value={formik.values.eMail}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.eMail && Boolean(formik.errors.eMail)
                        }
                        helperText={formik.touched.eMail && formik.errors.eMail}
                      />
                    </Grid>

                    <Grid item xs={12} md={3}>
                      <InputMask
                        mask="99999-999"
                        onChange={formik.handleChange}
                        value={formik.values.zipCode}
                      >
                        <TextField
                          fullWidth
                          size="small"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          name="zipCode"
                          label="CEP"
                          value={formik.values.zipCode}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.zipCode &&
                            Boolean(formik.errors.zipCode)
                          }
                          helperText={
                            formik.touched.zipCode && formik.errors.zipCode
                          }
                        />
                      </InputMask>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        size="small"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        name="address"
                        label="Endereço"
                        value={formik.values.address}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.address &&
                          Boolean(formik.errors.address)
                        }
                        helperText={
                          formik.touched.address && formik.errors.address
                        }
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <TextField
                        fullWidth
                        size="small"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        name="number"
                        label="Número"
                        value={formik.values.number}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.number && Boolean(formik.errors.number)
                        }
                        helperText={
                          formik.touched.number && formik.errors.number
                        }
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <TextField
                        fullWidth
                        size="small"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        name="neighbourhood"
                        label="Bairro"
                        value={formik.values.neighbourhood}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.neighbourhood &&
                          Boolean(formik.errors.neighbourhood)
                        }
                        helperText={
                          formik.touched.neighbourhood &&
                          formik.errors.neighbourhood
                        }
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <TextField
                        fullWidth
                        size="small"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        name="state"
                        label="UF"
                        value={formik.values.state}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.state && Boolean(formik.errors.state)
                        }
                        helperText={formik.touched.state && formik.errors.state}
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <TextField
                        fullWidth
                        size="small"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        name="city"
                        label="Cidade"
                        value={formik.values.city}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.city && Boolean(formik.errors.city)
                        }
                        helperText={formik.touched.city && formik.errors.city}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        size="small"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        name="complement"
                        label="Complemento"
                        value={formik.values.complement}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.complement &&
                          Boolean(formik.errors.complement)
                        }
                        helperText={
                          formik.touched.complement && formik.errors.complement
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
                      onClick={() => navigate("/fornecedores")}
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

export default CadastroFornecedor;
