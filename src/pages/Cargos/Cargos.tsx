import { useEffect, useState } from "react";
import {
  ResponsibilityType,
  useEditarCargoMutation,
  useGetCargosQuery,
} from "../../graphql/generated";
import { PencilSimple, Trash } from "phosphor-react";
import { Pagination } from "../../components/Pagination";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../components/HeaderPage";
import { toast } from "react-toastify";
import Modal from "../../components/Modal";
import Table from "../../components/Table";
import { useModalCargo } from "../../hooks/useModalCargos";
import DropdownActions, { MenuAction } from "../../components/DropdownActions";
import DataTable from "../../components/DataTable";

function Cargos() {
  const [cargos, setCargos] = useState<ResponsibilityType[] | undefined>([
    {} as ResponsibilityType,
  ]);
  const [pesquisa, setPesquisa] = useState("");
  const [page, setPage] = useState(1);
  const [start, setStart] = useState(0);
  const [offset, setOffset] = useState(12);
  const [totalBullets, setTotalBullets] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [showModalDelete, setShowModalDelete] = useState<ResponsibilityType>(
    {} as ResponsibilityType
  );

  const navigate = useNavigate();
  const modalCadastroCargo = useModalCargo();

  const { loading, refetch } = useGetCargosQuery({
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
      if (data && data.responsibilities?.findall?.items) {
        const { items, totalCount, pageInfo } = data.responsibilities?.findall!;
        setCargos(items as ResponsibilityType[]);
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

  const [editarCargo] = useEditarCargoMutation({
    onCompleted: (resposta) => {
      toast.success("Cargo excluído", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
      refetch();
      setShowModalDelete({} as ResponsibilityType);
    },
    onError: (error) => {
      toast.error("Falha ao excluir o cargo", {
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

    setCargos([]);
    const LIMIT = 12;

    setStart(page - 1 === 0 ? 0 : page * LIMIT - LIMIT);
    setOffset(LIMIT);
    setPage(page);
  };

  const handleEdit = (id: number) => {
    modalCadastroCargo.mostrar(() => refetch(), id);
  };

  const handleDelete = () => {
    if (!!showModalDelete) {
      editarCargo({
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

  const menuItemActions: Array<MenuAction> = [
    {
      label: "Editar",
      onClick: handleEdit,
    },
    {
      label: "Excluir",
      onClick: handleDelete,
    },
  ];

  const columns = [
    {
      id: "descricao",
      name: "Descrição",
      cell: (props: ResponsibilityType) => {
        return <>{props.description}</>;
      },
    },
    {
      id: "",
      width: 100,
      cell: (props: ResponsibilityType) => {
        return (
          <>
            {props.id && (
              <DropdownActions actions={menuItemActions} id={props.id} />
            )}
          </>
        );
      },
    },
  ];

  return (
    <div className="w-full">
      <PageHeader
        setSearch={setPesquisa}
        title="Cargos"
        button="Novo Cargo"
        onClick={() => {
          modalCadastroCargo.mostrar(() => refetch());
        }}
        loading={loading}
      />
      <DataTable columns={columns} data={cargos!} />
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

export default Cargos;
