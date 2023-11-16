import { useEffect, useState } from "react";
import {
  PeopleType,
  useEditarPessoaMutation,
  useGetPessoasQuery,
} from "../../graphql/generated";
import { PencilSimple, Trash } from "phosphor-react";
import { Pagination } from "../../components/Pagination";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../components/HeaderPage";
import { toast } from "react-toastify";
import Modal from "../../components/Modal";
import Table from "../../components/Table";

function Pessoas() {
  const [pessoas, setPessoas] = useState<PeopleType[]>([]);

  const [pesquisa, setPesquisa] = useState("");
  const [page, setPage] = useState(1);
  const [start, setStart] = useState(0);
  const [offset, setOffset] = useState(12);
  const [totalBullets, setTotalBullets] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  const [showModalDelete, setShowModalDelete] = useState<PeopleType>(
    {} as PeopleType
  );

  const navigate = useNavigate();

  const { loading, refetch } = useGetPessoasQuery({
    variables: {
      pagination: {
        pageNumber: page,
        pageSize: offset,
      },
      filter: {
        fantasyName: pesquisa,
        active: true
      },
    },
    fetchPolicy: "cache-and-network",
    onCompleted: (data) => {
      if (data && data.peoples?.findall) {
        const { items, totalCount, pageInfo } = data.peoples.findall;
        setPessoas(items as PeopleType[]);
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

  const [editarPessoa] = useEditarPessoaMutation({
    onCompleted: (resposta) => {
      toast.success("Fornecedor excluído", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
      refetch();
      setShowModalDelete({} as PeopleType);
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

    setPessoas([]);
    const LIMIT = 12;

    setStart(page - 1 === 0 ? 0 : page * LIMIT - LIMIT);
    setOffset(LIMIT);
    setPage(page);
  };

  const handleEdit = (id: number) => {
    navigate(`/pessoas/edicao/${id}`);
  };

  const handleDelete = () => {
    if (!!showModalDelete) {
      editarPessoa({
        variables: {
          id: showModalDelete?.id,
          input: {
            corporateName: showModalDelete.corporateName!,
            cnpj: showModalDelete?.cnpj!,
            constructor: showModalDelete?.constructor!,
            active: false,
          },
        },
      });
    }
  };

  const ActionsButtons = (row: any) => {
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
    { heading: "Nome", value: "fantasyName" },
    { heading: "CNPJ", value: "cnpj" },
    { heading: "E-mail", value: "eMail" },
    { heading: "Status", value: "active" },
  ];

  return (
    <div className="w-full">
      <PageHeader
        setSearch={setPesquisa}
        title="Pessoas"
        button="Nova Pessoa"
        onClick={() => navigate("/pessoas/cadastro")}
        loading={loading}
      />

      <Table
        handleEdit={handleEdit}
        setShowModalDelete={setShowModalDelete}
        column={column}
        data={pessoas}
        element={ActionsButtons}
      />
      <Modal
        handleDelete={handleDelete}
        itemDescription={showModalDelete.fantasyName!}
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

export default Pessoas;
