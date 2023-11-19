import { useParams, useNavigate } from "react-router-dom";
import { Grid, IconButton, InputAdornment, TextField } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputMask from "react-input-mask";

import {
  OutsourcedType,
  useCriarTercerizadoMutation,
  useEditarTercerizadoMutation,
  useGetTerceirizadoByIdQuery,
  TypePeopleEnumType,
} from "../../../graphql/generated";
import { toast } from "react-toastify";

import * as yup from "yup";
import { useFormik } from "formik";
import { forwardRef, useImperativeHandle } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/app";
import { ModalService } from "../../../components/ModalService";
import SearchIcon from "@mui/icons-material/Search";

export interface CadastroTerceirizadoProps {
  salvar: () => void;
}

export const CadastroTerceirizado = forwardRef<
  CadastroTerceirizadoProps,
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
      fantasyName: yup.string().required("campo obrigatório!"),
    })
    .required();

  const [criarTerceirizado] = useCriarTercerizadoMutation({
    onCompleted: (resposta) => {
      toast.success("Tercerizado cadastrado", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
      state.onClose?.();
      ModalService.hide({
        onClose: state.onClose,
      });
    },
    onError: (error) => {
      toast.error("Falha ao cadastrar tercerizado", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
    },
  });

  const [editarTerceirizado] = useEditarTercerizadoMutation({
    onCompleted: (resposta) => {
      toast.success("Tercerizado alterado", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
      state.onClose?.();
      ModalService.hide({
        onClose: state.onClose,
      });
    },
    onError: (error) => {
      toast.error("Falha ao alterar tercerizado", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
    },
  });

  const handleBuscaCep = () => {
    if (formik.values.zipCode) {
      fetch(
        `https://viacep.com.br/ws/${formik.values
          .zipCode!.toString()
          .replace(".", "")
          .replace("-", "")}/json/`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.cep)
            formik.setValues({
              ...formik.values,
              address: data.logradouro,
              city: data.localidade,
              state: data.uf,
              neighbourhood: data.bairro,
            });
        });
    }
  };

  const formik = useFormik<OutsourcedType>({
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
      corporateName: "",
      typePeople: TypePeopleEnumType.Fisica,
      fantasyName: "",
      eMail: "",
      active: true,
      id: 0,
    },
    validationSchema: schema,
    onSubmit: (values) => {
      Number(id) > 0
        ? editarTerceirizado({
            variables: {
              id: Number(id),
              input: {
                neighbourhood: values.neighbourhood,
                number: values.number,
                state: values.state,
                telephone: values.telephone,
                zipCode: values.zipCode,
                address: values.address,
                cellPhone: values.cellPhone,
                city: values.city,
                cnpj: values.cnpj,
                cpf: values.cpf,
                complement: values.complement,
                corporateName: values.corporateName!,
                typePeople:
                  values.typePeople! == "FISICA"
                    ? TypePeopleEnumType.Fisica
                    : TypePeopleEnumType.Juridica,
                fantasyName: values.fantasyName,
                eMail: values.eMail,
                active: values.active,
              },
            },
          })
        : criarTerceirizado({
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
                cnpj: values.cnpj,
                cpf: values.cpf,
                complement: values.complement,
                corporateName: values.corporateName!,
                typePeople:
                  values.typePeople! == "FISICA"
                    ? TypePeopleEnumType.Fisica
                    : TypePeopleEnumType.Juridica,
                fantasyName: values.fantasyName,
                eMail: values.eMail,
                active: values.active,
              },
            },
          });
    },
  });

  const { loading } = useGetTerceirizadoByIdQuery({
    variables: {
      id: Number(id),
    },
    onCompleted: (response) => {
      formik.setValues({
        neighbourhood: response?.outsourceds?.findById?.neighbourhood,
        number: response?.outsourceds?.findById?.number,
        state: response?.outsourceds?.findById?.state,
        telephone: response?.outsourceds?.findById?.telephone,
        zipCode: response?.outsourceds?.findById?.zipCode,
        address: response?.outsourceds?.findById?.address,
        cellPhone: response?.outsourceds?.findById?.cellPhone,
        city: response?.outsourceds?.findById?.city,
        cnpj: response?.outsourceds?.findById?.cnpj,
        cpf: response?.outsourceds?.findById?.cpf,
        complement: response?.outsourceds?.findById?.complement,
        corporateName: response?.outsourceds?.findById?.corporateName!,
        typePeople:
          response?.outsourceds?.findById?.typePeople! == "FISICA"
            ? TypePeopleEnumType.Fisica
            : TypePeopleEnumType.Juridica,
        fantasyName: response?.outsourceds?.findById?.fantasyName,
        eMail: response?.outsourceds?.findById?.eMail,
        active: response?.outsourceds?.findById?.active!,
        id: response?.outsourceds?.findById?.id!,
      });
    },
    skip: !!!id,
    fetchPolicy: "network-only",
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="bg-white flex justify-center flex-col "
    >
      <div className="py-5 px-3 flex justify-center items-center">
        <Grid container spacing={3} xs={12}>
          <Grid item xs={12} md={12}>
            <RadioGroup
              row
              name="typePeople"
              className="text-gray-700"
              value={formik.values.typePeople}
              onChange={formik.handleChange}
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
          {formik.values.typePeople === TypePeopleEnumType.Juridica ? (
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
                    formik.touched.fantasyName && formik.errors.fantasyName
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
                    formik.touched.corporateName && formik.errors.corporateName
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
                  formik.touched.fantasyName && formik.errors.fantasyName
                }
              />
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
              error={formik.touched.eMail && Boolean(formik.errors.eMail)}
              helperText={formik.touched.eMail && formik.errors.eMail}
            />
          </Grid>

          {formik.values.typePeople === TypePeopleEnumType.Fisica ? (
            <Grid item xs={12} md={3}>
              <InputMask
                mask="999.999.999-99"
                onChange={formik.handleChange}
                value={formik.values.cpf}
              >
                {
                  ((inputProps: any) => (
                    <TextField
                      fullWidth
                      size="small"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      {...inputProps}
                      name="cpf"
                      label="CPF"
                      value={formik.values.cpf}
                      onChange={formik.handleChange}
                      error={formik.touched.cpf && Boolean(formik.errors.cpf)}
                      helperText={formik.touched.cpf && formik.errors.cpf}
                    />
                  )) as any
                }
              </InputMask>
            </Grid>
          ) : (
            <Grid item xs={12} md={3}>
              <InputMask
                mask="99.999.999/9999-99"
                onChange={formik.handleChange}
                value={formik.values.cnpj}
              >
                {
                  ((inputProps: any) => (
                    <TextField
                      fullWidth
                      size="small"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      {...inputProps}
                      name="cnpj"
                      label="CNPJ"
                      value={formik.values.cnpj}
                      onChange={formik.handleChange}
                      error={formik.touched.cnpj && Boolean(formik.errors.cnpj)}
                      helperText={formik.touched.cnpj && formik.errors.cnpj}
                    />
                  )) as any
                }
              </InputMask>
            </Grid>
          )}

          <Grid item xs={12} md={3}>
            <InputMask
              mask="(99) 9999-9999"
              onChange={formik.handleChange}
              value={formik.values.telephone}
            >
              {
                ((inputProps: any) => (
                  <TextField
                    fullWidth
                    size="small"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    {...inputProps}
                    name="telephone"
                    label="Telefone"
                    value={formik.values.telephone}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.telephone &&
                      Boolean(formik.errors.telephone)
                    }
                    helperText={
                      formik.touched.telephone && formik.errors.telephone
                    }
                  />
                )) as any
              }
            </InputMask>
          </Grid>
          <Grid item xs={12} md={3}>
            <InputMask
              mask="(99) 99999-9999"
              onChange={formik.handleChange}
              value={formik.values.cellPhone}
            >
              {
                ((inputProps: any) => (
                  <TextField
                    fullWidth
                    size="small"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    {...inputProps}
                    name="cellPhone"
                    label="Celular"
                    value={formik.values.cellPhone}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.cellPhone &&
                      Boolean(formik.errors.cellPhone)
                    }
                    helperText={
                      formik.touched.cellPhone && formik.errors.cellPhone
                    }
                  />
                )) as any
              }
            </InputMask>
          </Grid>
          <Grid item xs={12} md={3}>
            <InputMask
              mask="99999-999"
              onChange={formik.handleChange}
              value={formik.values.zipCode}
            >
              {((inputProps: any) => (
                <TextField
                  fullWidth
                  size="small"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  {...inputProps}
                  name="zipCode"
                  label="CEP"
                  value={formik.values.zipCode}
                  onChange={formik.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleBuscaCep}
                          edge="end"
                        >
                          <SearchIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  error={
                    formik.touched.zipCode && Boolean(formik.errors.zipCode)
                  }
                  helperText={formik.touched.zipCode && formik.errors.zipCode}
                />
              )) as any}
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
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
            />
          </Grid>
          <Grid item xs={12} md={2}>
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
              error={formik.touched.number && Boolean(formik.errors.number)}
              helperText={formik.touched.number && formik.errors.number}
            />
          </Grid>
          <Grid item xs={12} md={4}>
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
                formik.touched.neighbourhood && formik.errors.neighbourhood
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
              error={formik.touched.state && Boolean(formik.errors.state)}
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
              error={formik.touched.city && Boolean(formik.errors.city)}
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
                formik.touched.complement && Boolean(formik.errors.complement)
              }
              helperText={formik.touched.complement && formik.errors.complement}
            />
          </Grid>
        </Grid>
      </div>
    </form>
  );
});
