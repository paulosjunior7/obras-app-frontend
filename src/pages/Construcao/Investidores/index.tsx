import { MagnifyingGlass } from "phosphor-react";
import { useFormik } from "formik";
import { useState } from "react";

export interface IInvestidores {
  id: string;
  id_obra?: string;
  id_pessoa?: string;
  id_usuario_cadastro?: string;
  id_usuario_alteracao?: string;
  data_alteracao?: string;
  data_criacao?: string;
  nome?: string;
  cpf?: string;
  telefone?: string;
  email?: string;
}

const mockClientes =
  [
    {
      id: '1',
      id_pessoa: '1',
      nome: 'João da Silva',
      cpf: '123.456.789-00',
      telefone: '(11) 99999-9999',
      email: '',
    },
    {
      id: '2',
      id_pessoa: '2',
      nome: 'Maria da Silva',
      cpf: '123.456.789-00',
      telefone: '(11) 99999-9999',
      email: '',
    },
    {
      id: '3',
      id_pessoa: '3',
      nome: 'José da Silva',
      cpf: '123.456.789-00',
      telefone: '(11) 99999-9999',
      email: '',
    },
    {
      id: '4',
      id_pessoa: '4',
      nome: 'Pedro da Silva',
      cpf: '123.456.789-00',
      telefone: '(11) 99999-9999',
      email: '',
    },
    {
      id: '5',
      id_pessoa: '5',
      nome: 'Paulo da Silva',
      cpf: '123.456.789-00',
      telefone: '(11) 99999-9999',
      email: '',
    },
    {
      id: '6',
      id_pessoa: '6',
      nome: 'Paula da Silva',
      cpf: '123.456.789-00',
      telefone: '(11) 99999-9999',
      email: '',
    },
    {
      id: '7',
      id_pessoa: '7',
      nome: 'Joana da Silva',
      cpf: '123.456.789-00',
      telefone: '(11) 99999-9999',
      email: '',
    },
  ];

export default function Investidores() {
  const [clientes, setClientes] = useState<IInvestidores[]>([]);
  const [selectedCliente, setSelectedCliente] = useState({});

  const formik = useFormik<IInvestidores>({
    initialValues: {
      id: '',
      id_obra: '',
      id_pessoa: '',
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
    const newClientes = clientes.filter((cliente) => cliente.id !== id);
    setClientes(newClientes);
  }

  const handleInsert = (e: any) => {
    e.preventDefault();
    const cliente = mockClientes.find((cliente) => cliente.id_pessoa === formik.values.id_pessoa);
    if (cliente) {
      setClientes([...clientes, cliente]);
    }
  };

  return (
    <>
      <div className="flex justify-between">
        <div className="flex justify-between w-full mt-5 bg-gradient-to-r from-gray-100 to-gray-50 p-2 rounded-md">
          <h4 className="text-2xl font-normal">Investidores</h4>
        </div>
      </div>

      <form >
        <div className="flex justify-between gap-4 mt-5 ">
          <select
            id="id_cliente"
            name="id_pessoa"
            className="form-input w-[30rem]"
            onChange={(e) => {
              formik.setFieldValue("id_pessoa", e.target.value); // Atualize o campo id_pessoa no estado do Formik
            }}
            value={formik.values.id_pessoa}
          >
            <option value="">Selecione um cliente</option> {/* Adicione uma opção padrão */}
            {mockClientes.map((cliente) => (
              <option key={cliente.id} value={cliente.id_pessoa}>
                {cliente.nome}
              </option>
            ))}
            <MagnifyingGlass size={32} />
          </select>
          <button className="bg-[#003569] text-white px-4 py-2 rounded-md w-56"
            onClick={(e) => {
              handleInsert(e);
            }}
          >Adicionar</button>
        </div>
      </form >

      <table className="min-w-full divide-y divide-gray-200 mt-5">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">CPF</th>
            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Telefone</th>
            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {
            clientes.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-center">{item.nome}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">{item.cpf}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">{item.telefone}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <a href="mailto:">
                      <span className="text-blue-500">
                        {item.email}
                      </span>
                    </a>
                  </td>
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