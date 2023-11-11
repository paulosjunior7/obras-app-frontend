import React, { useState, useEffect } from "react";
import { Grid, Typography, TextField } from "@mui/material";

import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";

interface Film {
  title: string;
  year: number;
}

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

import { useFormik } from "formik";
import * as yup from "yup";
import {
  ConstructionInvestorType,
  useCriarVinculoClienteConstrucaoMutation,
  PeopleType,
  useGetPessoasLazyQuery,
} from "../../../graphql/generated";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import useDebounce from "../../../hooks/useDebound";
import ListagemVinculoCliente from "./ListagemVinculoCliente";

const Proprietarios = () => {
  const { slug } = useParams<{ slug: string }>();

  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<PeopleType[]>([]);
  const loading = open && options.length === 0;

  useEffect(() => {
    onLoadMore(1, "");
  }, []);

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep(1e3); // For demo purposes.

      if (active) {
        onLoadMore(1, "");
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  const schema = yup
    .object({
      people: yup.number().required("campo obrigatório!"),
    })
    .required();

  const formik = useFormik<ConstructionInvestorType>({
    initialValues: {
      id: 0,
      peopleId: 0,
      people: undefined,
      active: true,
    },
    onSubmit: (values) => {
      criarConstrucao({
        variables: {
          input: {
            active: true,
            constructionId: Number(slug),
            peopleId: values?.people?.id!,
          },
        },
      });
    },
  });

  const [criarConstrucao] = useCriarVinculoClienteConstrucaoMutation({
    onCompleted: (resposta) => {
      toast.success("Cliente vinculado ao obra", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
      formik.setFieldValue("people", undefined);
    },
    onError: (error) => {
      toast.error("Falha ao vincular cliente a obra", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
    },
  });

  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(100);
  const [filter, setFilter] = useState<string>("");

  const [pesquisarPessoas, { loading: loadingPessoas }] =
    useGetPessoasLazyQuery({
      variables: {
        pagination: {
          pageNumber: page,
          pageSize: 5,
        },
        filter: {
          fantasyName: filter,
          active: true,
        },
      },
      fetchPolicy: "cache-first",
      onCompleted: (data) => {
        if (data && data.peoples?.findall) {
          const { items, totalCount, pageInfo } = data.peoples.findall;
          setTotal(totalCount!);
          if (options.length > 0) {
            const i = items as PeopleType[];
            setOptions([...options, ...i]);
          } else {
            setOptions(items as PeopleType[]);
          }
        }
      },
    });

  const onLoadMore = (pageNumber: any, search: any) => {
    if (total !== options.length && search !== 0) {
      pesquisarPessoas({
        variables: {
          pagination: {
            pageNumber,
            pageSize: 10,
          },
          filter: {
            fantasyName: search,
            active: true,
          },
        },
      });
    }
    setPage(pageNumber);
  };

  const [handleFilter] = useDebounce((v: any) => {
    if (page > 1) {
      setPage(1);
    }
    setFilter(v.target.value);
    onLoadMore(1, v.target.value);
  }, 500);

  return (
    <>
      <div className="w-full h-auto min-h-[calc(100vh-172px)] mb-2 rounded-lg border p-12 mt-2 border-gray-200 shadow-md  bg-white">
        <form onSubmit={formik.handleSubmit}>
          <Typography className="text-slate-900 font-bold text-sm">
            Proprietários
          </Typography>
          <br />
          <Grid container spacing={3}>
            <Grid item xs={12} md={10}>
              <Autocomplete
                size="small"
                fullWidth
                open={open}
                onOpen={() => {
                  setOpen(true);
                }}
                onClose={() => {
                  setOpen(false);
                }}
                isOptionEqualToValue={(option, value) =>
                  option.fantasyName === value.fantasyName
                }
                onInputChange={handleFilter as (args: any) => void}
                ListboxProps={{
                  onScroll: (event: React.SyntheticEvent) => {
                    const listboxNode = event.currentTarget;
                    if (
                      listboxNode.scrollTop + listboxNode.clientHeight ===
                      listboxNode.scrollHeight
                    ) {
                      onLoadMore(page + 1, filter);
                    }
                  },
                }}
                getOptionLabel={(option) => option.fantasyName!}
                options={options}
                loading={loading}
                onChange={(event, value) => {
                  formik.setFieldValue("people", value);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    name="people"
                    value={formik.values.people}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.people && Boolean(formik.errors.people)
                    }
                    helperText={formik.touched.people && formik.errors.people}
                    fullWidth
                    InputProps={{
                      ...params.InputProps,
                      endAdornment: (
                        <React.Fragment>
                          {loading ? (
                            <CircularProgress color="inherit" size={20} />
                          ) : null}
                          {params.InputProps.endAdornment}
                        </React.Fragment>
                      ),
                    }}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <button
                type="submit"
                className="inline-flex justify-center w-full py-2 px-4 border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Adicionar
              </button>
            </Grid>
            <Grid item xs={12} md={12}>
              <ListagemVinculoCliente />
            </Grid>
          </Grid>
        </form>
      </div>
    </>
  );
};

export default Proprietarios;

// const [useEditarVinculoClienteConstrucaoMutation] = useEditarConstrucaoMutation({
//   onCompleted: (resposta) => {
//     toast.success("Obra alterada", {
//       position: toast.POSITION.BOTTOM_RIGHT,
//       className: "foo-bar",
//     });
//     navigate("/obras");
//   },
//   onError: (error) => {
//     toast.error("Falha ao alterar obra", {
//       position: toast.POSITION.BOTTOM_RIGHT,
//       className: "foo-bar",
//     });
//   },
// });

// const { loading } = useGetObraByIdQuery({
//   variables: {
//     id: Number(slug),
//   },
//   skip: !!!slug,
//   nextFetchPolicy: "cache-and-network",
//   onCompleted: (response) => {
//     formik.setValues({
//       address: response.constructions?.findById?.address!,
//       art: response.constructions?.findById?.art,
//       batchArea: response.constructions?.findById?.batchArea,
//       buildingArea: response.constructions?.findById?.buildingArea,
//       city: response.constructions?.findById?.city!,
//       cno: response.constructions?.findById?.cno,
//       complement: response.constructions?.findById?.complement!,
//       dateBegin: format(
//         new Date(response.constructions?.findById?.dateBegin),
//         "yyyy-MM-dd"
//       ),
//       dateEnd: response.constructions?.findById?.dateEnd,
//       identifier: response.constructions?.findById?.identifier!,
//       latitude: response.constructions?.findById?.latitude,
//       license: response.constructions?.findById?.license,
//       longitude: response.constructions?.findById?.longitude,
//       motherEnrollment: response.constructions?.findById?.motherEnrollment,
//       municipalRegistration:
//         response.constructions?.findById?.municipalRegistration,
//       neighbourhood: response.constructions?.findById?.neighbourhood,
//       number: response.constructions?.findById?.number,
//       saleValue: response.constructions?.findById?.saleValue,
//       state: response.constructions?.findById?.state!,
//       undergroundUse: response.constructions?.findById?.undergroundUse,
//       zipCode: response.constructions?.findById?.zipCode,
//       statusConstruction:
//         response.constructions?.findById?.statusConstruction,
//       active: response.constructions?.findById?.active!,
//     });
//   },
// });
