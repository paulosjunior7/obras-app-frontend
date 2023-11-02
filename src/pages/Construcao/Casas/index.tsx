import { useFormik } from "formik";
import { useState } from "react";

export interface ICasa {
  id: string;
  descricao?: string;
  fracao_terreno?: string;
  area_construida?: string;
  area_permeavel?: string;
  matricula?: string;
  un_cons_energia?: string;
  un_cons_agua?: string;
  valor_venda?: string;
  id_usuario_cadastro?: string;
  id_usuario_alteracao?: string;
  data_alteracao?: string;
  data_criacao?: string;
}

const mockCasas = [
  {
    id: '1',
    descricao: 'Casa 1',
    fracao_terreno: 'F1',
    area_construida: '200.0 m²',
    area_permeavel: '50.0 m²',
    matricula: 'MAT-001',
    un_cons_energia: '220V',
    un_cons_agua: 'Cedae',
    valor_venda: 'R$ 500,000.00',
    id_usuario_cadastro: '1',
    id_usuario_alteracao: '1',
    data_alteracao: '2023-03-10',
    data_criacao: '2023-01-15',
  },
  // Adicione outras casas aqui
];

export default function Casas() {
  const [casas, setCasas] = useState<ICasa[]>([]);
  const [showModalCadastro, setShowModalCadastro] = useState(false);

  const formik = useFormik<ICasa>({
    initialValues: {
      id: '',
      descricao: '',
      fracao_terreno: '',
      area_construida: '',
      area_permeavel: '',
      matricula: '',
      un_cons_energia: '',
      un_cons_agua: '',
      valor_venda: '',
      id_usuario_cadastro: '',
      id_usuario_alteracao: '',
      data_alteracao: '',
      data_criacao: '',
    },

    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  const handleDelete = (e: any, id: string) => {
    e.preventDefault();
    const newCasas = casas.filter((casa) => casa.id !== id);
    setCasas(newCasas);
  }

  const handleInsert = (e: any) => {
    e.preventDefault();
    const casa = mockCasas.find((casa) => casa.descricao === formik.values.descricao);
    if (casa) {
      setCasas([...casas, casa]);
    }
  };

  return (
    <>
      <div className="flex justify-between">
        <div className="flex justify-between w-full mt-5 bg-gradient-to-r from-gray-100 to-gray-50 p-2 rounded-md">
          <h4 className="text-2xl font-normal">Unidades residenciais</h4>
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

      {showModalCadastro ? (<form className="border rounded-md p-6 mt-5">
        <div className="grid grid-cols-2 gap-4 mt-5">
          <div className="flex flex-col">
            <label htmlFor="identificador">Descrição</label>
            <input
              id="descricao"
              name="descricao"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.descricao}
              placeholder="Ex: Casa 1"
            />
          </div>
          <div className="flex flex-col">

            <label htmlFor="fracao_terreno">Fração do Terreno</label>
            <input
              id="fracao_terreno"
              name="fracao_terreno"
              type="text"
              onChange={(e) => {
                let inputValue = e.target.value;
                inputValue = inputValue.replace(/\D/g, "");
                inputValue = inputValue.replace(/(\d)(\d{2})$/, "$1,$2");
                inputValue = inputValue.replace(/(?=(\d{3})+(\D))\B/g, ".");
                e.target.value = inputValue;
                formik.setFieldValue("fracao_terreno", inputValue);
              }}
              value={formik.values.fracao_terreno}
            />
          </div>
          <div className="flex flex-col">

            <label htmlFor="area_construida">Área Construída</label>
            <input
              id="area_construida"
              name="area_construida"
              type="text"
              onChange={(e) => {
                let inputValue = e.target.value;
                inputValue = inputValue.replace(/\D/g, "");
                inputValue = inputValue.replace(/(\d)(\d{2})$/, "$1,$2");
                inputValue = inputValue.replace(/(?=(\d{3})+(\D))\B/g, ".");
                e.target.value = inputValue;
                formik.setFieldValue("area_construida", inputValue);
              }}
              value={formik.values.area_construida}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="area_permeavel">Área Permeável</label>
            <input
              id="area_permeavel"
              name="area_permeavel"
              type="text"
              onChange={(e) => {
                let inputValue = e.target.value;
                inputValue = inputValue.replace(/\D/g, "");
                inputValue = inputValue.replace(/(\d)(\d{2})$/, "$1,$2");
                inputValue = inputValue.replace(/(?=(\d{3})+(\D))\B/g, ".");
                e.target.value = inputValue;
                formik.setFieldValue("area_permeavel", inputValue);
              }}
              value={formik.values.area_permeavel}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="matricula">Matrícula</label>
            <input
              id="matricula"
              name="matricula"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.matricula}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="un_cons_energia">Un. Consumidora de Energia</label>
            <input
              id="un_cons_energia"
              name="un_cons_energia"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.un_cons_energia}

            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="un_cons_agua">Un. Consumidora de Água</label>
            <input
              id="un_cons_agua"
              name="un_cons_agua"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.un_cons_agua}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="valor_venda">Valor de Venda</label>
            <input
              id="valor_venda"
              name="valor_venda"
              type="text"
              onChange={(e) => {
                let inputValue = e.target.value;
                inputValue = inputValue.replace(/\D/g, "");
                inputValue = inputValue.replace(/(\d)(\d{2})$/, "$1,$2");
                inputValue = inputValue.replace(/(?=(\d{3})+(\D))\B/g, ".");
                e.target.value = inputValue;
                formik.setFieldValue("valor_venda", inputValue);
              }}
              value={formik.values.valor_venda}
            />
          </div>
          <div className="flex justify-end w-full gap-2 col-span-2 ">
            <button className="border-[#003569] text-[#003569] border px-4 py-2 rounded-md"
              onClick={() => {
                setShowModalCadastro(false);
              }}
            >Cancelar</button>
            <button type="submit" className="bg-[#003569] text-white px-4 py-2 rounded-md w-[100px]">Salvar</button>
          </div>
        </div>

      </form>) : null}

      <table className="min-w-full divide-y divide-gray-200 mt-5">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Descrição</th>
            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Fração do Terreno</th>
            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Área Construída</th>
            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Área Permeável</th>
            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Matrícula</th>
            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Un. Consumidora de Energia</th>
            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Un. Consumidora de Água</th>
            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Valor de Venda</th>
            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {casas.map((item, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-center">{item.descricao}</td>
              <td className="px-6 py-4 whitespace-nowrap text-center">{item.fracao_terreno}</td>
              <td className="px-6 py-4 whitespace-nowrap text-center">{item.area_construida}</td>
              <td className="px-6 py-4 whitespace-nowrap text-center">{item.area_permeavel}</td>
              <td className="px-6 py-4 whitespace-nowrap text-center">{item.matricula}</td>
              <td className="px-6 py-4 whitespace-nowrap text-center">{item.un_cons_energia}</td>
              <td className="px-6 py-4 whitespace-nowrap text-center">{item.un_cons_agua}</td>
              <td className="px-6 py-4 whitespace-nowrap text-center">{item.valor_venda}</td>
              <td className="px-6 py-4 whitespace-nowrap text-center">
                <button
                  type="button"
                  className="text-red-500 hover:text-red-700"
                  onClick={(e) => {
                    handleDelete(e, item.id);
                  }}
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
