import { useParams, useNavigate } from "react-router-dom";
import {
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import InputMask from "react-input-mask";
import SearchIcon from "@mui/icons-material/Search";

import {
  ProviderType,
  TypePeopleEnumType,
  useCriarFornecedorMutation,
  useEditarFornecedorMutation,
  useGetFornecedorByIdQuery,
} from "../../../graphql/generated";
import { toast } from "react-toastify";

import * as yup from "yup";
import { useFormik } from "formik";
import { forwardRef, useImperativeHandle } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/app";
import { ModalService } from "../../../components/ModalService";
import React from "react";

export interface CadastroFornecedorProps {
  salvar: () => void;
}

export const CadastroFornecedor = forwardRef<
  CadastroFornecedorProps,
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
      name: yup.string().required("campo obrigatório!"),
    })
    .required();

  const [criarFornecedor] = useCriarFornecedorMutation({
    onCompleted: (resposta) => {
      toast.success("Fornecedor cadastrado", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
      state.onClose?.();
      ModalService.hide({
        onClose: state.onClose,
      });
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
      state.onClose?.();
      ModalService.hide({
        onClose: state.onClose,
      });
    },
    onError: (error) => {
      toast.error("Falha ao alterar fornecedor", {
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
      cpf: "",
      typePeople: TypePeopleEnumType.Fisica,
      active: true,
      id: 0,
    },
    validationSchema: schema,
    onSubmit: (values) => {
      Number(id) > 0
        ? editarFornecedor({
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
                cnpj: values.cnpj!,
                cpf: values.cpf!,
                typePeople:
                  values.typePeople! == "FISICA"
                    ? TypePeopleEnumType.Fisica
                    : TypePeopleEnumType.Juridica,
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
                cpf: values.cpf || "",
                typePeople:
                  values.typePeople! == "FISICA"
                    ? TypePeopleEnumType.Fisica
                    : TypePeopleEnumType.Juridica,
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
      id: Number(id),
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
        typePeople:
          response?.providers?.findById?.typePeople! == "FISICA"
            ? TypePeopleEnumType.Fisica
            : TypePeopleEnumType.Juridica,
        cpf: response?.providers?.findById?.cpf,
      });
    },
    skip: !!!id,
    fetchPolicy: "network-only",
  });

  return (
    <form className="bg-white flex justify-center flex-col gap-4">
      <div className="grid justify-center w-full grid-cols-2 gap-2">
        <div className="col-span-2">
          <span className="text-gray-700">Tipo de pessoa</span>
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
        </div>
        {formik.values.typePeople === TypePeopleEnumType.Fisica ? (
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
        ) : (
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
        )}
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
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
      </div>
      <div className="flex justify-center md:flex-row gap-2">
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
                {...inputProps}
                InputLabelProps={{
                  shrink: true,
                }}
                name="telephone"
                label="Telefone"
                error={
                  formik.touched.telephone && Boolean(formik.errors.telephone)
                }
                helperText={formik.touched.telephone && formik.errors.telephone}
              />
            )) as any
          }
        </InputMask>
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
                {...inputProps}
                InputLabelProps={{
                  shrink: true,
                }}
                name="cellPhone"
                label="Celular"
                value={formik.values.cellPhone}
                onChange={formik.handleChange}
                error={
                  formik.touched.cellPhone && Boolean(formik.errors.cellPhone)
                }
                helperText={formik.touched.cellPhone && formik.errors.cellPhone}
              />
            )) as any
          }
        </InputMask>
      </div>
      <div className="flex justify-center md:flex-row gap-2">
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
      </div>
      <div className="flex justify-center md:flex-row gap-2">
        <InputMask
          mask="99999-999"
          onChange={formik.handleChange}
          value={formik.values.zipCode}
        >
          {
            ((inputProps: any) => (
              <TextField
                className="w-64"
                size="small"
                {...inputProps}
                InputLabelProps={{
                  shrink: true,
                }}
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
                error={formik.touched.zipCode && Boolean(formik.errors.zipCode)}
                helperText={formik.touched.zipCode && formik.errors.zipCode}
              />
            )) as any
          }
        </InputMask>
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
      </div>
      <div className="flex justify-center md:flex-row gap-2">
        <TextField
          className="w-52"
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
        <TextField
          className="w-80"
          size="small"
          InputLabelProps={{
            shrink: true,
          }}
          name="neighbourhood"
          label="Bairro"
          value={formik.values.neighbourhood}
          onChange={formik.handleChange}
          error={
            formik.touched.neighbourhood && Boolean(formik.errors.neighbourhood)
          }
          helperText={
            formik.touched.neighbourhood && formik.errors.neighbourhood
          }
        />
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
          error={formik.touched.complement && Boolean(formik.errors.complement)}
          helperText={formik.touched.complement && formik.errors.complement}
        />
      </div>
      <div className="flex justify-center md:flex-row gap-2">
        <TextField
          className="w-52"
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
      </div>
    </form>
  );
});
