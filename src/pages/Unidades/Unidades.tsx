import { Dispatch, useEffect, useState } from "react";
import {
  UnityType,
  useEditarUnidadeMutation,
  useGetUnidadesQuery,
} from "../../graphql/generated";
import { PencilSimple, Trash } from "phosphor-react";
import { Pagination } from "../../components/Pagination";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../components/HeaderPage";
import { toast } from "react-toastify";
import Modal from "../../components/Modal";
import Table from "../../components/Table";
import { useModalUnidade } from "../../hooks/useModalUnidade";

function Unidades() {
  const [unidades, setUnidades] = useState<UnityType[] | undefined>([
    {} as UnityType,
  ]);

  const modalCadastroUnidade = useModalUnidade();

  const [pesquisa, setPesquisa] = useState("");
  const [page, setPage] = useState(1);
  const [start, setStart] = useState(0);
  const [offset, setOffset] = useState(12);
  const [totalBullets, setTotalBullets] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [showModalDelete, setShowModalDelete] = useState<UnityType>(
    {} as UnityType
  );

  const navigate = useNavigate();

  const { loading, refetch } = useGetUnidadesQuery({
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
      if (data && data.unity?.findall?.items) {
        const { items, totalCount, pageInfo } = data.unity?.findall!;
        setUnidades(items as UnityType[]);
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

  const [editarUnidade] = useEditarUnidadeMutation({
    onCompleted: (resposta) => {
      toast.success("Unidade excluído", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
      refetch();
      setShowModalDelete({} as UnityType);
    },
    onError: (error) => {
      toast.error("Falha ao excluir Unidade", {
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

    setUnidades([]);
    const LIMIT = 12;

    setStart(page - 1 === 0 ? 0 : page * LIMIT - LIMIT);
    setOffset(LIMIT);
    setPage(page);
  };

  const handleEdit = (id: number) => {
    modalCadastroUnidade.mostrar(() => refetch(), id);
  };

  const handleDelete = () => {
    if (!!showModalDelete) {
      editarUnidade({
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

  const ActionsButtons = (row: any) => {
    return (
      <div className="py-4 px-3 text-center flex gap-5 justify-center">
        <PencilSimple
          size={14}
          className="cursor-pointer"
          onClick={() => handleEdit(row.id)}
        />
        <Trash
          size={14}
          className="cursor-pointer"
          onClick={() => setShowModalDelete(row)}
        />
      </div>
    );
  };

  const column = [{ heading: "Descricao", value: "description" }];

  return (
    <div className="w-full">
      <PageHeader
        setSearch={setPesquisa}
        title="Unidades"
        button="Nova Unidade"
        onClick={() => {
          modalCadastroUnidade.mostrar(() => refetch());
        }}
        loading={loading}
      />
      <Table
        handleEdit={handleEdit}
        setShowModalDelete={setShowModalDelete}
        column={column}
        data={unidades!}
        element={ActionsButtons}
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

export default Unidades;
