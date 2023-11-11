import { useParams, useNavigate } from "react-router-dom";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  TextFieldProps,
} from "@mui/material";
import InputMask from "react-input-mask";

import {
  PeopleType,
  useCriarPessoaMutation,
  useEditarPessoaMutation,
  TypePeopleEnumType,
  useGetPessoaIdQuery,
} from "../../../graphql/generated";
import { toast } from "react-toastify";

import * as yup from "yup";
import { useFormik } from "formik";

function CadastroPessoa() {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();

  const schema = yup
    .object({
      cpf: yup.string().required("campo obrigatório!"),
      fantasyName: yup.string().required("campo obrigatório!"),
      //  neighbourhood: yup.string().required("campo obrigatório!"),
      //  number: yup.string().required("campo obrigatório!"),
      // state: yup.string().test('len', 'Min 2 caracteres', (val: any) => val.toString().length <= 2)
      //  telephone: yup.string().required("campo obrigatório!"),
      //  zipCode: yup.string().required("campo obrigatório!"),
      //  address: yup.string().required("campo obrigatório!"),
      //  cellPhone: yup.string().required("campo obrigatório!"),
      //  city: yup.string().required("campo obrigatório!"),
      //  cnpj: yup.string().required("campo obrigatório!"),
      //  complement: yup.string().required("campo obrigatório!"),
      //  corporateName: yup.string().required("campo obrigatório!"),
      //  eMail: yup.string().required("campo obrigatório!"),
      //  typePeople: yup.string().required("campo obrigatório!"),
      //  active: yup.string().required("campo obrigatório!"),
      constructor: yup.string().required("campo obrigatório!"),
      //  investor: yup.string().required("campo obrigatório!"),
      //  client: yup.string().required("campo obrigatório!"),
    })
    .required();

  const [criarPessoa] = useCriarPessoaMutation({
    onCompleted: (resposta) => {
      toast.success("Pessoa cadastrada", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
      navigate("/pessoas");
    },
    onError: (error) => {
      toast.error("Falha ao cadastrar pessoa", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
    },
  });

  const [editarPessoa] = useEditarPessoaMutation({
    onCompleted: (resposta) => {
      toast.success("Pessoa alterada", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
      navigate("/pessoas");
    },
    onError: (error) => {
      toast.error("Falha ao alterar pessoa", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
    },
  });

  const formik = useFormik<PeopleType>({
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
      cpf: "",
      complement: "",
      typePeople: TypePeopleEnumType.Fisica,
      fantasyName: "",
      corporateName: "",
      eMail: "",
      active: true,
      id: 0,
      constructor: false,
      investor: false,
      client: true,
    },
    validationSchema: schema,
    onSubmit: (values) => {
      Number(slug) > 0
        ? editarPessoa({
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
              cpf: values.cpf!,
              complement: values.complement,
              fantasyName: values.fantasyName!,
              corporateName: values.corporateName!,
              eMail: values.eMail,
              typePeople:
                values.typePeople! == "FISICA"
                  ? TypePeopleEnumType.Fisica
                  : TypePeopleEnumType.Juridica,
              active: values.active!,
              constructor: values.constructor,
              investor: values.investor,
              client: values.client,
            },
          },
        })
        : criarPessoa({
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
              fantasyName: values.fantasyName!,
              corporateName: values.corporateName!,
              eMail: values.eMail,
              typePeople:
                values.typePeople! == "FISICA"
                  ? TypePeopleEnumType.Fisica
                  : TypePeopleEnumType.Juridica,
              active: values.active!,
              constructor: values.constructor,
              investor: values.investor,
              client: values.client,
            },
          },
        });
    },
  });

  const { loading } = useGetPessoaIdQuery({
    variables: {
      id: Number(slug),
    },
    onCompleted: (response) => {
      formik.setValues({
        neighbourhood: response?.peoples?.findById?.neighbourhood!,
        number: response?.peoples?.findById?.number,
        state: response?.peoples?.findById?.state,
        telephone: response?.peoples?.findById?.telephone,
        zipCode: response?.peoples?.findById?.zipCode,
        address: response?.peoples?.findById?.address,
        cellPhone: response?.peoples?.findById?.cellPhone,
        city: response?.peoples?.findById?.city,
        cnpj: response?.peoples?.findById?.cnpj,
        cpf: response?.peoples?.findById?.cpf,
        complement: response?.peoples?.findById?.complement,
        fantasyName: response?.peoples?.findById?.fantasyName,
        corporateName: response?.peoples?.findById?.corporateName,
        eMail: response?.peoples?.findById?.eMail,
        active: response?.peoples?.findById?.active!,
        typePeople:
          response?.peoples?.findById?.typePeople! == "FISICA"
            ? TypePeopleEnumType.Fisica
            : TypePeopleEnumType.Juridica,
        id: response?.peoples?.findById?.id!,
        constructor: response?.peoples?.findById?.constructor!,
        client: response?.peoples?.findById?.client!,
        investor: response?.peoples?.findById?.investor!,
      });
    },
    skip: !!!slug,
    nextFetchPolicy: "network-only",
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
                Cadastrar Pessoa
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Cliente: Cliente contrante da obra.
              </p>
              <p className="mt-1 text-sm text-gray-600">
                Construtor: Responsável pela obra.
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
                    <Grid item xs={12} md={4}>
                      <FormLabel component="legend">Tipo de cadastro</FormLabel>
                      <FormGroup row>
                        <FormControlLabel
                          control={<Checkbox defaultChecked />}
                          label="Cliente"
                          className="text-gray-700"
                          name="client"
                          checked={formik.values.client}
                          onChange={formik.handleChange}
                        />
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Construtor"
                          name="constructor"
                          className="text-gray-700"
                          checked={formik.values.constructor}
                          onChange={formik.handleChange}
                        />
                      </FormGroup>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <FormLabel id="demo-radio-buttons-group-label">
                        Tipo de pessoa
                      </FormLabel>
                      <RadioGroup
                        name="typePeople"
                        className="text-gray-700"
                        value={formik.values.typePeople}
                        onChange={formik.handleChange}
                        row
                      >
                        <FormControlLabel
                          value={TypePeopleEnumType.Fisica}
                          control={<Radio />}
                          label="Física"
                        />
                        <FormControlLabel
                          value={TypePeopleEnumType.Juridica}
                          control={<Radio />}
                          label="Jurídica"
                        />
                      </RadioGroup>
                    </Grid>
                    {formik.values.typePeople ===
                      TypePeopleEnumType.Juridica ? (
                      <>
                        <Grid item xs={12} md={6}>
                          <TextField
                            fullWidth
                            size="small"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            name="fantasyName"
                            label="Nome fantasia"
                            value={formik.values.fantasyName}
                            onChange={formik.handleChange}
                            error={
                              formik.touched.fantasyName &&
                              Boolean(formik.errors.fantasyName)
                            }
                            helperText={
                              formik.touched.fantasyName &&
                              formik.errors.fantasyName
                            }
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <TextField
                            fullWidth
                            size="small"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            name="corporateName"
                            label="Razão social"
                            value={formik.values.corporateName}
                            onChange={formik.handleChange}
                            error={
                              formik.touched.corporateName &&
                              Boolean(formik.errors.corporateName)
                            }
                            helperText={
                              formik.touched.corporateName &&
                              formik.errors.corporateName
                            }
                          />
                        </Grid>
                      </>
                    ) : (
                      <Grid item xs={12} md={6}>
                        <TextField
                          fullWidth
                          size="small"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          name="fantasyName"
                          label="Nome"
                          value={formik.values.fantasyName}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.fantasyName &&
                            Boolean(formik.errors.fantasyName)
                          }
                          helperText={
                            formik.touched.fantasyName &&
                            formik.errors.fantasyName
                          }
                        />
                      </Grid>
                    )}
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
                    {formik.values.typePeople === TypePeopleEnumType.Fisica ? (
                      <Grid item xs={12} md={3}>
                        <InputMask
                          mask="999.999.999-99"
                          onChange={formik.handleChange}
                          value={formik.values.cpf}
                        >
                          <TextField
                            fullWidth
                            size="small"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            name="cpf"
                            label="CPF"
                            value={formik.values.cpf}
                            onChange={formik.handleChange}
                            error={
                              formik.touched.cpf && Boolean(formik.errors.cpf)
                            }
                            helperText={
                              formik.touched.cpf && formik.errors.cpf
                            }
                          />
                        </InputMask>
                      </Grid>
                    ) : (
                      <Grid item xs={12} md={4}>
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
                              formik.touched.cnpj &&
                              Boolean(formik.errors.cnpj)
                            }
                            helperText={
                              formik.touched.cnpj && formik.errors.cnpj
                            }
                          />
                        </InputMask>
                      </Grid>
                    )}
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
                      onClick={() => navigate("/pessoas")}
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

export default CadastroPessoa;

export const AETextField: React.ComponentType<TextFieldProps> = (
  props: TextFieldProps
) => (
  <>
    <TextField
      fullWidth
      size="small"
      InputLabelProps={{
        shrink: true,
      }}
      {...props}
    />
  </>
);
