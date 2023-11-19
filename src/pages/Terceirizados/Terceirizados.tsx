import { useEffect, useState } from "react";
import {
  OutsourcedType,
  useEditarTercerizadoMutation,
  useGetTerceirizadosQuery,
} from "../../graphql/generated";
import { PencilSimple, Trash } from "phosphor-react";
import { Pagination } from "../../components/Pagination";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../components/HeaderPage";
import { toast } from "react-toastify";
import Modal from "../../components/Modal";
import Table from "../../components/Table";
import { useModalTerceirizado } from "../../hooks/useModalTercerizado";

function Terceirizados() {
  const [terceirizados, setTerceirizados] = useState<OutsourcedType[]>([]);
  const [pesquisa, setPesquisa] = useState("");
  const [page, setPage] = useState(1);
  const [start, setStart] = useState(0);
  const [offset, setOffset] = useState(10);
  const [totalBullets, setTotalBullets] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [showModalDelete, setShowModalDelete] = useState<OutsourcedType>(
    {} as OutsourcedType
  );

  const navigate = useNavigate();
  const modalCadastroTerceirizado = useModalTerceirizado();

  const { loading, refetch } = useGetTerceirizadosQuery({
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
      if (data && data.outsourceds?.findall) {
        const { items, totalCount, pageInfo } = data.outsourceds.findall;
        setTerceirizados(items as OutsourcedType[]);
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

  const [editarTercerizado] = useEditarTercerizadoMutation({
    onCompleted: (resposta) => {
      toast.success("Tercerizado excluído", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
      refetch();
      setShowModalDelete({} as OutsourcedType);
    },
    onError: (error) => {
      toast.error("Falha ao excluir tercerizado", {
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

    setTerceirizados([]);
    const LIMIT = 10;

    setStart(page - 1 === 0 ? 0 : page * LIMIT - LIMIT);
    setOffset(LIMIT);
    setPage(page);
  };

  const handleEdit = (id: number) => {
    modalCadastroTerceirizado.mostrar(() => refetch(), id);
  };

  const handleDelete = () => {
    if (!!showModalDelete) {
      editarTercerizado({
        variables: {
          id: showModalDelete?.id,
          input: {
            fantasyName: showModalDelete?.fantasyName!,
            corporateName: showModalDelete?.corporateName!,
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
    { heading: "Nome Fantasia", value: "fantasyName" },
    { heading: "Razão Social", value: "corporateName" },
    { heading: "Tipo Cadastro", value: "typePeople" },
    { heading: "Status", value: "active" },
  ];

  return (
    <div className="w-full">
      <PageHeader
        setSearch={setPesquisa}
        title="Terceirizados"
        button="Cadastrar terceirizado"
        onClick={() => {
          modalCadastroTerceirizado.mostrar(() => refetch());
        }}
        loading={loading}
      />
      <Table
        handleEdit={handleEdit}
        setShowModalDelete={setShowModalDelete}
        column={column}
        data={terceirizados}
        element={actionBtn}
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

export default Terceirizados;
