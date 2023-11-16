import { useEffect, useState } from "react";
import {
  GroupType,
  ResponsibilityType,
  useEditarCargoMutation,
  useEditarGrupoProdutoMutation,
  useGetCargosQuery,
  useGetGruposProdutoQuery,
} from "../../graphql/generated";
import { PencilSimple, Trash } from "phosphor-react";
import { Pagination } from "../../components/Pagination";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../components/HeaderPage";
import { toast } from "react-toastify";
import Modal from "../../components/Modal";
import Table from "../../components/Table";

function GruposProduto() {
  const [grupos, setGrupos] = useState<GroupType[] | undefined>([
    {} as GroupType,
  ]);
  const [pesquisa, setPesquisa] = useState("");
  const [page, setPage] = useState(1);
  const [start, setStart] = useState(0);
  const [offset, setOffset] = useState(12);
  const [totalBullets, setTotalBullets] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [showModalDelete, setShowModalDelete] = useState<GroupType>(
    {} as GroupType
  );

  const navigate = useNavigate();

  const { loading, refetch } = useGetGruposProdutoQuery({
    variables: {
      pagination: {
        pageNumber: page,
        pageSize: offset,
      },
      filter: {
        description: pesquisa,
        active: true,
      },
    },
    fetchPolicy: "cache-and-network",
    onCompleted: (data) => {
      if (data && data.group?.findall?.items) {
        const { items, totalCount, pageInfo } = data.group?.findall!;
        setGrupos(items as GroupType[]);
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

  const [editarGrupo] = useEditarGrupoProdutoMutation({
    onCompleted: (resposta) => {
      toast.success("Grupo excluído", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
      refetch();
      setShowModalDelete({} as GroupType);
    },
    onError: (error) => {
      toast.error("Falha ao excluir o grupo", {
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

    setGrupos([]);
    const LIMIT = 12;

    setStart(page - 1 === 0 ? 0 : page * LIMIT - LIMIT);
    setOffset(LIMIT);
    setPage(page);
  };

  const handleEdit = (id: number) => {
    navigate(`/grupos-produto/edicao/${id}`);
  };

  const handleDelete = () => {
    if (!!showModalDelete) {
      editarGrupo({
        variables: {
          id: showModalDelete?.id,
          input: {
            description: showModalDelete?.description!,
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
    { heading: "Descricao", value: "description" },
    { heading: "Status", value: "active" },
  ];

  return (
    <div className="w-full">
      <PageHeader
        setSearch={setPesquisa}
        title="Grupos"
        button="Novo Grupo"
        onClick={() => navigate("/grupos-produto/cadastro")}
        loading={loading}
      />
      <Table
        handleEdit={handleEdit}
        setShowModalDelete={setShowModalDelete}
        column={column}
        data={grupos!}
        element={actionBtn}
      />
      <Modal
        handleDelete={handleDelete}
        itemDescription={showModalDelete.description!}
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

export default GruposProduto;
