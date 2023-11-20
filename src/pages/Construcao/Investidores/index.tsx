import { MagnifyingGlass } from "phosphor-react";
import { useFormik } from "formik";
import { useState } from "react";
import { CriarVinculoClienteConstrucaoDocument, PeopleType, useCriarVinculoClienteConstrucaoMutation, useGetPessoasLazyQuery } from "../../../graphql/generated";
import { set } from "date-fns";
import { toast } from "react-toastify";

export interface IInvestidores {
  id: string;
  constructionId: number,
  peopleId: number,
  id_usuario_cadastro?: string;
  id_usuario_alteracao?: string;
  data_alteracao?: string;
  data_criacao?: string;
  nome?: string;
  cpf?: string;
  telefone?: string;
  email?: string;
}

export default function Investidores() {
  const [clientes, setClientes] = useState<IInvestidores[]>([]);
  const [pessoas, setPessoas] = useState<PeopleType[]>([]);
  const [selectedInvestidor, setSelectedInvestidor] = useState<PeopleType | undefined>(undefined);

  const [criarVinculoInvestidorObra] = useCriarVinculoClienteConstrucaoMutation({
    onCompleted: (resposta) => {
      toast.success("Investidor vinculado a Obra", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
    },
    onError: (error) => {
      toast.error("Falha ao vincular investidor a obra", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
    },
  });

  const formik = useFormik<IInvestidores>({
    initialValues: {
      id: '',
      constructionId: 0,
      peopleId: 0,
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
    criarVinculoInvestidorObra({
      variables: {
        input: {
          constructionId: formik.values.constructionId,
          peopleId: selectedInvestidor?.id!,
          active: true,
        },
      },
    })
  }



  return (
    <>
      <div className="flex justify-between">
        <div className="flex justify-between w-full mt-5 bg-gradient-to-r from-gray-100 to-gray-50 p-2 rounded-md">
          <h4 className="text-lg font-normal">Investidores</h4>
        </div>
      </div>

      <form >
        <div className="flex justify-between gap-4 mt-5 ">
          <SearchInput
            setPessoas={setPessoas}
            pessoas={pessoas}
            selectedInvestidor={selectedInvestidor}
            setSelectedInvestidor={setSelectedInvestidor}
          />
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

const SearchInput = ({ setPessoas, pessoas, selectedInvestidor, setSelectedInvestidor }: {
  pessoas: PeopleType[];
  setPessoas: (value: PeopleType[]) => void;
  selectedInvestidor?: PeopleType;
  setSelectedInvestidor: (investidor: PeopleType) => void;
}) => {
  const [page, setPage] = useState(1);
  const [offset] = useState(10);
  const [pesquisa, setPesquisa] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setPesquisa(value);
    setPage(1);
    if (value === "") {
      setPessoas([]);
    }
    if (value.length > 2) {
      getPessoas();
    }
  };

  const [getPessoas, { loading }] =
    useGetPessoasLazyQuery({
      variables: {
        pagination: {
          pageNumber: page,
          pageSize: offset,
        },
        filter: {
          fantasyName: pesquisa,
          active: true,
        },
      },
      fetchPolicy: "cache-and-network",
      onCompleted: (data) => {
        if (data && data.peoples?.findall) {
          const { items } = data.peoples.findall;
          setPessoas(items as PeopleType[]);
        }
      },
    });

  return (
    <div className="relative">
      <input
        type="text"
        id="id_cliente"
        name="id_pessoa"
        className="form-input w-[30rem] pr-10 pl-4"
        autoComplete="off"
        value={searchTerm}
        onChange={(e) => {
          handleSearchChange(e.target.value);
        }}
        placeholder="Pesquisar investidor..."
      />

      {loading ? (
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-900"></div>
        </div>
      ) :
        <MagnifyingGlass
          size={24}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
        />}

      {pessoas.length > 0 && (
        <>
          <ul className="mt-2 text-sm text-[#000} border w-full rounded-md z-50 absolute bg-white">
            {pessoas.map((cliente) => (
              <li
                key={cliente.id}
                className="cursor-pointer hover:bg-gray-200 p-2"
                onClick={() => {
                  setSelectedInvestidor(cliente);
                  setPessoas([]);
                  setSearchTerm(cliente.corporateName || cliente.fantasyName || "");
                }}
              >
                {cliente.corporateName || cliente.fantasyName}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
