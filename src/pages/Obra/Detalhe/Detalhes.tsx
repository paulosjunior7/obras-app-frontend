import { useState } from "react";
import { FormControl, Grid, Typography, TextField } from "@mui/material";
import { parseISO, format } from "date-fns";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputMask from "react-input-mask";

import { useFormik, Form } from "formik";
import * as yup from "yup";
import {
  ConstructionType,
  StatusConstructionEnumType,
  useCriarConstrucaoMutation,
  useEditarConstrucaoMutation,
  useGetObraByIdQuery,
  useGetObrasQuery,
} from "../../../graphql/generated";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Detalhes = () => {
  const [status, setStatus] = useState<string | number>(1);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();

  const handleChange = (event: SelectChangeEvent<typeof status>) => {
    setStatus(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const schema = yup
    .object({
      identifier: yup.string().required("campo obrigatório!"),
      zipCode: yup.string().required("campo obrigatório!"),
      address: yup.string().required("campo obrigatório!"),
      city: yup.string().required("campo obrigatório!"),
      state: yup.string().max(2).required("campo obrigatório!"),
      dateBegin: yup.date().required("campo obrigatório!"),
      batchArea: yup.number().required("campo obrigatório!"),
      buildingArea: yup.number().required("campo obrigatório!"),
    })
    .required();

  const formik = useFormik<ConstructionType>({
    initialValues: {
      address: "",
      art: undefined,
      batchArea: undefined,
      buildingArea: undefined,
      city: "",
      cno: undefined,
      complement: "",
      dateBegin: null,
      dateEnd: "",
      identifier: "",
      latitude: undefined,
      license: undefined,
      longitude: undefined,
      motherEnrollment: undefined,
      municipalRegistration: undefined,
      neighbourhood: "",
      number: "",
      saleValue: undefined,
      state: "",
      undergroundUse: undefined,
      zipCode: "",
      statusConstruction: StatusConstructionEnumType.Construcao,
      active: true,
    },
    validationSchema: schema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));

      Number(slug) > 0
        ? editarConstrucao({
          variables: {
            id: Number(slug),
            input: {
              address: values.address,
              art: Number(values.art),
              batchArea: Number(values.batchArea),
              buildingArea: Number(values.buildingArea),
              city: values.city,
              cno: Number(values.cno),
              complement: values.complement,
              dateBegin: parseISO(values.dateBegin),
              dateEnd: null,
              identifier: values.identifier,
              latitude: Number(0),
              license: Number(values.license),
              longitude: Number(0),
              motherEnrollment: values?.motherEnrollment,
              municipalRegistration: Number(values.municipalRegistration),
              neighbourhood: values.neighbourhood,
              number: values.number,
              saleValue: values.saleValue,
              state: values.state,
              undergroundUse: Number(values.undergroundUse),
              zipCode: values.zipCode,
              statusConstruction: StatusConstructionEnumType.Vendida,
              active: true,
            },
          },
        })
        : criarConstrucao({
          variables: {
            input: {
              address: values.address,
              art: Number(values.art),
              batchArea: Number(values.batchArea),
              buildingArea: Number(values.buildingArea),
              city: values.city,
              cno: Number(values.cno),
              complement: values.complement,
              dateBegin: parseISO(values.dateBegin),
              dateEnd: null,
              identifier: values.identifier,
              latitude: Number(0),
              license: Number(values.license),
              longitude: Number(0),
              motherEnrollment: values?.motherEnrollment,
              municipalRegistration: Number(values.municipalRegistration),
              neighbourhood: values.neighbourhood,
              number: values.number,
              saleValue: values.saleValue,
              state: values.state,
              undergroundUse: Number(values.undergroundUse),
              zipCode: values.zipCode,
              statusConstruction: StatusConstructionEnumType.Vendida,
              active: true,
            },
          },
        });
    },
  });

  const [criarConstrucao] = useCriarConstrucaoMutation({
    onCompleted: (resposta) => {
      toast.success("Obra cadastrada", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
      navigate("/obras");
    },
    onError: (error) => {
      toast.error("Falha ao cadastrar obra", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
    },
  });

  const [editarConstrucao] = useEditarConstrucaoMutation({
    onCompleted: (resposta) => {
      toast.success("Obra alterada", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
      navigate("/obras");
    },
    onError: (error) => {
      toast.error("Falha ao alterar obra", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
    },
  });

  const { loading } = useGetObraByIdQuery({
    variables: {
      id: Number(slug),
    },
    skip: !!!slug,
    fetchPolicy: "cache-and-network",
    onCompleted: (response) => {
      formik.setValues({
        address: response.constructions?.findById?.address!,
        art: response.constructions?.findById?.art,
        batchArea: response.constructions?.findById?.batchArea,
        buildingArea: response.constructions?.findById?.buildingArea,
        city: response.constructions?.findById?.city!,
        cno: response.constructions?.findById?.cno,
        complement: response.constructions?.findById?.complement!,
        dateBegin: format(
          new Date(response.constructions?.findById?.dateBegin),
          "yyyy-MM-dd"
        ),
        dateEnd: response.constructions?.findById?.dateEnd,
        identifier: response.constructions?.findById?.identifier!,
        latitude: response.constructions?.findById?.latitude,
        license: response.constructions?.findById?.license,
        longitude: response.constructions?.findById?.longitude,
        motherEnrollment: response.constructions?.findById?.motherEnrollment,
        municipalRegistration:
          response.constructions?.findById?.municipalRegistration,
        neighbourhood: response.constructions?.findById?.neighbourhood,
        number: response.constructions?.findById?.number,
        saleValue: response.constructions?.findById?.saleValue,
        state: response.constructions?.findById?.state!,
        undergroundUse: response.constructions?.findById?.undergroundUse,
        zipCode: response.constructions?.findById?.zipCode,
        statusConstruction:
          response.constructions?.findById?.statusConstruction,
        active: response.constructions?.findById?.active!,
      });
    },
  });

  return (
    <div className="mb-2 rounded-lg border p-12 mt-2 border-gray-200 shadow-md  bg-white">
      <form onSubmit={formik.handleSubmit}>
        <Typography className="text-slate-900 font-bold text-sm">
          Detalhes
        </Typography>
        <br />
        <Grid container spacing={3} xs={12} direction="row">
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
              id="email"
              name="identifier"
              label="Indetificador"
              value={formik.values.identifier}
              onChange={formik.handleChange}
              error={
                formik.touched.identifier && Boolean(formik.errors.identifier)
              }
              helperText={
                formik.touched.identifier && formik.errors.identifier
              }
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <FormControl sx={{ width: "100%" }}>
              <InputLabel shrink>Status</InputLabel>
              <Select
                size="small"
                fullWidth
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={status}
                label="Status"
                onChange={handleChange}
              >
                <MenuItem value={1}>planejamento</MenuItem>
                <MenuItem value={2}>construção</MenuItem>
                <MenuItem value={3}>finalizada</MenuItem>
                <MenuItem value={4}>vendida</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
              id="dateBegin"
              name="dateBegin"
              label="Data início"
              type="date"
              value={formik.values.dateBegin}
              onChange={formik.handleChange}
              error={
                formik.touched.dateBegin && Boolean(formik.errors.dateBegin)
              }
            // helperText={
            //   formik?.touched?.dateBegin && formik?.errors?.dateBegin
            // }
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
              id="dateEnd"
              name="dateEnd"
              label="Data final"
              type="date"
              value={formik.values.dateEnd}
              onChange={formik.handleChange}
              error={formik.touched.dateEnd && Boolean(formik.errors.dateEnd)}
            // helperText={formik.touched.dateEnd && formik.errors.dateEnd}
            />
          </Grid>
          {/* <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
              id="latitude"
              name="latitude"
              label="Latitude"
              value={formik.values.latitude}
              onChange={formik.handleChange}
              error={formik.touched.latitude && Boolean(formik.errors.latitude)}
              helperText={formik.touched.latitude && formik.errors.latitude}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
              id="longitude"
              name="longitude"
              label="longitude"
              value={formik.values.longitude}
              onChange={formik.handleChange}
              error={
                formik.touched.longitude && Boolean(formik.errors.longitude)
              }
              helperText={formik.touched.longitude && formik.errors.longitude}
            />
          </Grid> */}
        </Grid>
        <br />
        <Typography className="text-slate-900 font-bold font">
          Endereço
        </Typography>
        <br />
        <Grid container spacing={2} xs={12} direction="row">
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
                  formik.touched.zipCode && Boolean(formik.errors.zipCode)
                }
                helperText={formik.touched.zipCode && formik.errors.zipCode}
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
              id="address"
              name="address"
              label="Logradouro"
              value={formik.values.address}
              onChange={formik.handleChange}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
              id="number"
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
              id="city"
              name="city"
              label="Cidade"
              value={formik.values.city}
              onChange={formik.handleChange}
              error={formik.touched.city && Boolean(formik.errors.city)}
              helperText={formik.touched.city && formik.errors.city}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
              id="state"
              name="state"
              label="Estado"
              value={formik.values.state}
              onChange={formik.handleChange}
              error={formik.touched.state && Boolean(formik.errors.state)}
              helperText={formik.touched.state && formik.errors.state}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
              id="neighbourhood"
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
          <Grid item xs={12} md={8}>
            <TextField
              fullWidth
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
              id="complement"
              name="complement"
              label="Complemento"
              value={formik.values.complement}
              onChange={formik.handleChange}
              error={
                formik.touched.complement && Boolean(formik.errors.complement)
              }
              helperText={
                formik.touched.complement && formik.errors.complement
              }
            />
          </Grid>
        </Grid>
        <br />
        <Typography className="text-slate-900 font-bold text-sm">
          Informações complementares
        </Typography>
        <br />
        <Grid container spacing={2} xs={12} direction="row">
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
              id="batchArea"
              name="batchArea"
              label="Area lote"
              type="number"
              value={formik.values.batchArea}
              onChange={formik.handleChange}
              error={
                formik.touched.batchArea && Boolean(formik.errors.batchArea)
              }
              helperText={formik.touched.batchArea && formik.errors.batchArea}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
              id="buildingArea"
              name="buildingArea"
              label="Área construída"
              type="number"
              value={formik.values.buildingArea}
              onChange={formik.handleChange}
              error={
                formik.touched.buildingArea &&
                Boolean(formik.errors.buildingArea)
              }
              helperText={
                formik.touched.buildingArea && formik.errors.buildingArea
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
              id="municipalRegistration"
              name="municipalRegistration"
              label="Inscrição municipal"
              type="number"
              value={formik.values.municipalRegistration}
              onChange={formik.handleChange}
              error={
                formik.touched.municipalRegistration &&
                Boolean(formik.errors.municipalRegistration)
              }
              helperText={
                formik.touched.municipalRegistration &&
                formik.errors.municipalRegistration
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
              id="license"
              name="license"
              label="Alvará"
              type="number"
              value={formik.values.license}
              onChange={formik.handleChange}
              error={formik.touched.license && Boolean(formik.errors.license)}
              helperText={formik.touched.license && formik.errors.license}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
              id="undergroundUse"
              name="undergroundUse"
              label="Uso de solo"
              type="number"
              value={formik.values.undergroundUse}
              onChange={formik.handleChange}
              error={
                formik.touched.undergroundUse &&
                Boolean(formik.errors.undergroundUse)
              }
              helperText={
                formik.touched.undergroundUse && formik.errors.undergroundUse
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
              id="cno"
              name="cno"
              label="CNO"
              type="number"
              value={formik.values.cno}
              onChange={formik.handleChange}
              error={formik.touched.cno && Boolean(formik.errors.cno)}
              helperText={formik.touched.cno && formik.errors.cno}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
              id="art"
              name="art"
              label="Art"
              type="number"
              value={formik.values.art}
              onChange={formik.handleChange}
              error={formik.touched.art && Boolean(formik.errors.art)}
              helperText={formik.touched.art && formik.errors.art}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
              id="motherEnrollment"
              name="motherEnrollment"
              label="Matricula Mãe"
              type="number"
              value={formik.values.motherEnrollment}
              onChange={formik.handleChange}
              error={
                formik.touched.motherEnrollment &&
                Boolean(formik.errors.motherEnrollment)
              }
              helperText={
                formik.touched.motherEnrollment &&
                formik.errors.motherEnrollment
              }
            />
          </Grid>
          <br />
          <br />
          <Grid
            container
            xs={12}
            direction="row"
            justifyContent="flex-end"
            className="mt-12"
          >
            <Grid item>
              <button
                type="button"
                className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => navigate("/obras")}
              >
                Cancelar
              </button>
            </Grid>
            <Grid item>
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 ml-2  border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Salvar
              </button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Detalhes;
