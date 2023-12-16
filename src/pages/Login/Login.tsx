import { ClosedCaptioning } from "phosphor-react";
import { useFormik } from "formik";
import * as yup from "yup";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { fetchApi } from "../../lib/api";
import { UserContext } from "../../context/UserContext";

export interface UserModel {
  userName: string;
  password: string;
}

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { login } = useContext(UserContext);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const schema = yup
    .object({
      userName: yup.string().required("campo obrigatório!"),
      password: yup.string().required("campo obrigatório!"),
    })
    .required();

  const formik = useFormik<UserModel>({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      try {
        const retorno = await fetchApi(
          "User/Authenticate",
          "POST",
          JSON.stringify(values)
        );
        if (retorno.status === 404 || retorno.status === 400) {
          setErrorMessage("Usuário ou senha invalida!");
          return setTimeout(() => setErrorMessage(""), 5000);
        }
        const dataToken = await retorno.json();
        login?.(dataToken.token);
      } catch (erro) {
        setErrorMessage(
          "Desculpe-nos pelo transtorno, mas no momento, o servidor está fora de serviço. Por favor, tente novamente mais tarde. Agradecemos a sua compreensão"
        );
      }
    },
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl tracking-tight font-bold text-gray-900">
              Controle de Obras
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Gerencie suas obras com qualidade de vida.
            </p>
            <p className="mt-2 text-center text-xs text-red-600">
              {errorMessage}
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="mb-4">
                <TextField
                  fullWidth
                  size="small"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  type="text"
                  name="userName"
                  label="Usuário"
                  placeholder="Usuário"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  value={formik.values.userName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.userName && Boolean(formik.errors.userName)
                  }
                  helperText={formik.touched.userName && formik.errors.userName}
                />
              </div>
              <div className="mt-4">
                <TextField
                  fullWidth
                  size="small"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  type={showPassword ? "text" : "password"}
                  name="password"
                  label="Senha"
                  placeholder="Senha"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center"></div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Não lembro minha senha?
                </a>
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={() => formik.handleSubmit()}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <ClosedCaptioning
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
