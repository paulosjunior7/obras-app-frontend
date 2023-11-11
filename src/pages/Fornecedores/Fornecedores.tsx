import { useEffect, useState } from "react";
import {
  ProviderType,
  useEditarFornecedorMutation,
  useGetFornecedoresQuery
} from "../../graphql/generated";
import { PencilSimple, Trash } from "phosphor-react";
import { Pagination } from "../../components/Pagination";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../components/HeaderPage";
import { toast } from "react-toastify";
import Modal from "../../components/Modal";
import Table from "../../components/Table";

function Fornecedores() {
  const [fornecedores, setFornecedores] = useState<ProviderType[]>([]);
  const [pesquisa, setPesquisa] = useState("");
  const [page, setPage] = useState(1);
  const [start, setStart] = useState(0);
  const [offset, setOffset] = useState(12);
  const [totalBullets, setTotalBullets] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [showModalDelete, setShowModalDelete] = useState<ProviderType>(
    {} as ProviderType
  );

  const navigate = useNavigate();

  const { loading, refetch } = useGetFornecedoresQuery({
    variables: {
      pagination: {
        pageNumber: page,
        pageSize: offset,
      },
      filter: {
        name: pesquisa,
        active: true,
      },
    },
    nextFetchPolicy: "cache-and-network",
    onCompleted: (data) => {
      if (data && data.providers?.findall) {
        const { items, totalCount, pageInfo } = data.providers.findall;
        setFornecedores(items as ProviderType[]);
        setTotalCount(totalCount!);
        const quantidade = items?.length!;
        const _count = quantidade > totalCount! ? totalCount! : quantidade;
        const bulletCount = _count
          ? Math.abs(Math.ceil(totalCount! / offset))
          : 0;
        setTotalBullets(bulletCount);
      }
    },
  });

  const [editarFornecedor] = useEditarFornecedorMutation({
    onCompleted: (resposta) => {
      toast.success("Fornecedor excluído", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
      refetch();
      setShowModalDelete({} as ProviderType);
    },
    onError: (error) => {
      toast.error("Falha ao excluir fornecedor", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
    },
  });

  useEffect(() => {
    refetch();
  }, [pesquisa]);

  useEffect(() => {
    refetch();
  }, []);

  const handlePageChange = (event: any, page: number) => {
    event.preventDefault();

    setFornecedores([]);
    const LIMIT = 12;

    setStart(page - 1 === 0 ? 0 : page * LIMIT - LIMIT);
    setOffset(LIMIT);
    setPage(page);
  };

  const handleEdit = (id: number) => {
    navigate(`/fornecedores/edicao/${id}`);
  };

  const handleDelete = () => {
    if (!!showModalDelete) {
      editarFornecedor({
        variables: {
          id: showModalDelete?.id,
          input: {
            name: showModalDelete?.name!,
            cnpj: showModalDelete?.cnpj!,
            active: false,
          },
        },
      });
    }
  };

  const actionBtn = (row: any) => {
    return (
      <div className="py-4 px-3 text-center flex justify-evenly max-w-xs">
        <PencilSimple
          size={20}
          className="hover:-translate-y-1 cursor-pointer"
          onClick={() => handleEdit(row.id)}
        />
        <Trash
          size={20}
          className="hover:-translate-y-1 cursor-pointer"
          onClick={() => setShowModalDelete(row)}
        />
      </div>
    );
  };

  const column = [
    { heading: "Nome", value: "name" },
    { heading: "CNPJ", value: "cnpj" },
    { heading: "E-mail", value: "eMail" },
    { heading: "Status", value: "active" },
  ];

  return (
    <div className="w-full">
      <PageHeader
        setSearch={setPesquisa}
        title="Fornecedores"
        button="Novo Fornecedor"
        onClick={() => navigate("/fornecedores/cadastro")}
        loading={loading}
      />

      <Table
        handleEdit={handleEdit}
        setShowModalDelete={setShowModalDelete}
        column={column}
        data={fornecedores}
        element={actionBtn}
      />
      <Modal
        handleDelete={handleDelete}
        itemDescription={showModalDelete.name!}
        showModalDelete={showModalDelete}
        setShowModalDelete={setShowModalDelete}
      />
      <Pagination
        count={totalBullets}
        totalCount={totalCount}
        page={page}
        onChange={handlePageChange}
        disabled={loading}
      />
    </div>
  );
}

export default Fornecedores;
