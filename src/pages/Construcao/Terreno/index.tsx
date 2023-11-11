import { useFormik } from "formik";
import { useState } from "react";
import LeftModal from "../../../components/LeftModal";
import { PencilSimple, Trash } from "phosphor-react";
export interface ITerreno {
  id: string;
  id_obra?: string;
  id_pessoa?: string;
  valor: string;
  data: string;
  id_usuario_cadastro?: string;
  id_usuario_alteracao?: string;
  data_alteracao?: string;
  data_criacao?: string;
}

export default function Terrenos() {
  const [terrenos, setTerrenos] = useState<ITerreno[]>([]);
  const [showModalCadastro, setShowModalCadastro] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const formik = useFormik<ITerreno>({
    initialValues: {
      id: (terrenos.length + 1).toString(),
      id_obra: '',
      id_pessoa: '',
      valor: '',
      data: '',
      id_usuario_cadastro: '',
      id_usuario_alteracao: '',
      data_alteracao: '',
      data_criacao: '',
    },

    onSubmit: values => {
      if (isEditing) {
        const newTerrenos = terrenos.map((terreno) => {
          if (terreno.id === values.id) {
            return {
              ...terreno,
              ...values,
            };
          }
          return terreno;
        });
        setTerrenos(newTerrenos);
        setIsEditing(false);
      } else {
        const terreno = {
          ...values,
        };
        setTerrenos([...terrenos, terreno]);
        setIsEditing(false);
      }

      setShowModalCadastro(false);
      formik.resetForm();
    }
  });

  const handleDelete = (e: any, id: string) => {
    e.preventDefault();
    const newTerrenos = terrenos.filter((terreno) => terreno.id !== id);
    setTerrenos(newTerrenos);
  }

  const handleEdit = (e: any, id: string) => {
    e.preventDefault();
    const terreno = terrenos.find((terreno) => terreno.id === id);
    if (terreno) {
      formik.setValues(terreno);
      setIsEditing(true);
      setShowModalCadastro(true);
    }
  }

  return (
    <>
      <div className="flex justify-between">
        <div className="flex justify-between w-full mt-5 bg-gradient-to-r from-gray-100 to-gray-50 p-2 rounded-md">
          <h4 className="text-2xl font-normal">Terrenos</h4>
          {!showModalCadastro ? (
            <button className="bg-[#003569]
             text-white px-4 py-2 rounded-md"
              onClick={() => {
                setShowModalCadastro(true);
              }}
            >Adicionar</button>
          ) : null}
        </div>
      </div>

      <LeftModal showleftModal={showModalCadastro} setShowLeftModal={setShowModalCadastro}
        title="Cadastrar novo terreno">
        <div >
          <div className="grid grid-cols-2 gap-4 mt-5">
            <div className="flex flex-col">
              <label htmlFor="valor">Valor</label>
              <input id="valor" name="valor" type="text"
                onChange={(e) => {
                  let inputValue = e.target.value;
                  inputValue = inputValue.replace(/\D/g, "");
                  inputValue = inputValue.replace(/(\d)(\d{2})$/, "$1,$2");
                  inputValue = inputValue.replace(/(?=(\d{3})+(\D))\B/g, ".");
                  e.target.value = inputValue;
                  formik.setFieldValue("valor", inputValue);
                }}
                value={formik.values.valor} />
            </div>

            <div className="flex flex-col">
              <label htmlFor="data">Data</label>
              <input id="data" name="data" type="date" onChange={formik.handleChange} value={formik.values.data.toString()} />
            </div>
            <div className="flex justify-end w-full gap-2 col-span-2 ">
              <button className="border-[#003569] text-[#003569] border px-4 py-2 rounded-md"
                onClick={() => {
                  setShowModalCadastro(false);
                  formik.resetForm();
                }}
              >Cancelar</button>
              <button
                onClick={() => {
                  formik.handleSubmit();
                }}
                className="bg-[#003569] text-white px-4 py-2 rounded-md w-[100px]">Salvar</button>
            </div>
          </div>
        </div >
      </LeftModal>

      <table className="min-w-full divide-y divide-gray-200 mt-5">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Valor</th>
            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Data</th>
            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {
            terrenos?.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-center">{item.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">{item.valor}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">{item.data.toString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-center gap-3 flex justify-center">
                    <button
                      type="button"
                      className="text-red-500 hover:text-red-700"
                      onClick={(e) => {
                        handleEdit(e, item.id);
                      }}
                    >
                      <PencilSimple size={20} />
                    </button>
                    <button
                      type="button"
                      className="text-red-500 hover:text-red-700"
                      onClick={(e) => {
                        handleDelete(e, item.id);
                      }}
                    >
                      <Trash size={20} />
                    </button>
                  </td>
                </tr>
              );
            }
            )
          }
        </tbody>
      </table>
    </>
  );
}
