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
import DataTable from "../../components/DataTable";
import DropdownActions, { MenuAction } from "../../components/DropdownActions";

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
      id: "Nome Fantasia",
      name: "fantasyName",
      cell: (props: OutsourcedType) => {
        return <>{props.fantasyName}</>;
      },
    },
    {
      id: "Razão Social",
      name: "corporateName",
      cell: (props: OutsourcedType) => {
        return <>{props.corporateName}</>;
      },
    },
    {
      id: "Tipo Cadastro",
      name: "typePeople",
      cell: (props: OutsourcedType) => {
        return <>{props.typePeople}</>;
      },
    },
    {
      id: "",
      width: 100,
      cell: (props: OutsourcedType) => {
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
        title="Funcionários"
        button="Cadastrar funcionário"
        onClick={() => {
          modalCadastroTerceirizado.mostrar(() => refetch());
        }}
        loading={loading}
      />
      <DataTable columns={columns} data={terceirizados!} />
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
