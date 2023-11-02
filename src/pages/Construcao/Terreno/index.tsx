import { useFormik } from "formik";
import { useState } from "react";

export interface ITerreno {
  id: string;
  id_obra?: string;
  id_endereco?: string;
  id_usuario_cadastro?: string;
  id_usuario_alteracao?: string;
  data_alteracao?: string;
  data_criacao?: string;
  endereco?: string;
  numero?: string;
  bairro?: string;
  cidade?: string;
  estado?: string;
  cep?: string;
  area_lote?: string;
  area_construida?: string;
  inscricao_municipal?: string;
  alvara?: string;
  uso_de_solo?: string;
  art?: string;
  cno?: string;
  matricula_mae?: string;
  latitude?: string;
  longitude?: string;
  valor_venda?: string;
  id_empresa?: string;
}

const mockTerrenos = [
  {
    id: '1',
    id_obra: '1',
    id_endereco: '1',
    id_usuario_cadastro: '1',
    id_usuario_alteracao: '1',
    data_alteracao: '2023-03-10',
    data_criacao: '2023-01-15',
    endereco: 'Rua A, 123',
    numero: '123',
    bairro: 'Bairro A',
    cidade: 'Cidade A',
    estado: 'AA',
    cep: '12345-678',
    area_lote: '500.0',
    area_construida: '250.0',
    inscricao_municipal: '1234567890',
    alvara: 'ALV-001',
    uso_de_solo: 'Residencial',
    art: 'ART-001',
    cno: 'CNO-001',
    matricula_mae: 'MAT-001',
    latitude: '12.345678',
    longitude: '-45.678901',
    valor_venda: '1000000.00',
    id_empresa: '2',
  },
  // Adicione outros terrenos aqui
];

export default function Terrenos() {
  const [terrenos, setTerrenos] = useState<ITerreno[]>([]);

  const formik = useFormik<ITerreno>({
    initialValues: {
      id: '',
      id_obra: '',
      id_endereco: '',
      id_usuario_cadastro: '',
      id_usuario_alteracao: '',
      data_alteracao: '',
      data_criacao: '',
      endereco: '',
      numero: '',
      bairro: '',
      cidade: '',
      estado: '',
      cep: '',
      area_lote: '',
      area_construida: '',
      inscricao_municipal: '',
      alvara: '',
      uso_de_solo: '',
      art: '',
      cno: '',
      matricula_mae: '',
      latitude: '',
      longitude: '',
      valor_venda: '',
      id_empresa: '',
    },

    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  const handleDelete = (e: any, id: string) => {
    e.preventDefault();
    const newTerrenos = terrenos.filter((terreno) => terreno.id !== id);
    setTerrenos(newTerrenos);
  }

  const handleInsert = (e: any) => {
    e.preventDefault();
    const terreno = mockTerrenos.find((terreno) => terreno.endereco === formik.values.endereco);
    if (terreno) {
      setTerrenos([...terrenos, terreno]);
    }
  };

  return (
    <>
      <div className="flex justify-between">
        <div className="flex justify-between w-full mt-5 bg-gradient-to-r from-gray-100 to-gray-50 p-2 rounded-md">
          <h4 className="text-2xl font-normal">Terrenos</h4>
        </div>
      </div>

      <form >
        <div className="grid grid-cols-2 gap-4 mt-5">
          <select
            id="id_endereco"
            name="endereco"
            className="form-input"
            onChange={(e) => {
              formik.setFieldValue("endereco", e.target.value);
            }}
            value={formik.values.endereco}
          >
            <option value="">Selecione um terreno</option>
            {mockTerrenos.map((terreno) => (
              <option key={terreno.id} value={terreno.endereco}>
                {terreno.endereco}
              </option>
            ))}
          </select>
          <button className="bg-[#003569] text-white px-4 py-2 rounded-md"
            onClick={(e) => {
              handleInsert(e);
            }}
          >Adicionar</button>
        </div>
      </form >

      <table className="min-w-full divide-y divide-gray-200 mt-5">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Endereço</th>
            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Número</th>
            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Bairro</th>
            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Cidade</th>
            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {
            terrenos.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-center">{item.endereco}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">{item.numero}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">{item.bairro}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">{item.cidade}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <button type="button" className="text-red-500 hover:text-red-700"
                      onClick={(e) => {
                        handleDelete(e, item.id);
                      }}
                    >
                      <span >Excluir</span>
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
