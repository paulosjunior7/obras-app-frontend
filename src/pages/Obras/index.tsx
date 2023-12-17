import { useEffect, useState } from "react";
import {
  ConstructionType,
  useEditarProdutoMutation,
  useGetObrasQuery,
  useGetProdutosQuery,
} from "../../graphql/generated";
import { PencilSimple, Trash } from "phosphor-react";
import { Pagination } from "../../components/Pagination";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../components/HeaderPage";
import { toast } from "react-toastify";
import Modal from "../../components/Modal";
import Table from "../../components/Table";
import LeftModal from "../../components/LeftModal";
import DataTable from "../../components/DataTable";
import DropdownActions, { MenuAction } from "../../components/DropdownActions";

function Obras() {
  const [obras, setObras] = useState<ConstructionType[]>([]);
  const [pesquisa, setPesquisa] = useState("");
  const [page, setPage] = useState(1);
  const [start, setStart] = useState(0);
  const [offset, setOffset] = useState(5);
  const [totalBullets, setTotalBullets] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [showModalDelete, setShowModalDelete] = useState<ConstructionType>(
    {} as ConstructionType
  );

  const navigate = useNavigate();

  const { loading, refetch } = useGetObrasQuery({
    variables: {
      pagination: {
        pageNumber: page,
        pageSize: offset,
      },
      filter: {
        identifier: pesquisa,
        active: true,
      },
    },
    fetchPolicy: "cache-and-network",
    onCompleted: (data) => {
      if (data && data.constructions?.findall) {
        const { items, totalCount, pageInfo } = data.constructions.findall;
        setObras(items as ConstructionType[]);
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

  const [editarProduto] = useEditarProdutoMutation({
    onCompleted: (resposta) => {
      toast.success("Produto excluído", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
      refetch();
      setShowModalDelete({} as ConstructionType);
    },
    onError: (error) => {
      toast.error("Falha ao excluir produto", {
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

    setObras([]);
    const LIMIT = 5;

    setStart(page - 1 === 0 ? 0 : page * LIMIT - LIMIT);
    setOffset(LIMIT);
    setPage(page);
  };

  const handleEdit = (id: number) => {
    navigate(`/construcoes/editar/${id}`);
  };

  const handleDelete = () => {
    if (!!showModalDelete) {
      editarProduto({
        variables: {
          id: showModalDelete?.id!,
          input: {
            description: showModalDelete?.identifier!,
            detail: showModalDelete?.address!,
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
      id: "identificador",
      name: "Identificador",
      cell: (props: ConstructionType) => {
        return <>{props.identifier}</>;
      },
    },
    {
      id: "",
      width: 100,
      cell: (props: ConstructionType) => {
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
      <>
        <PageHeader
          setSearch={setPesquisa}
          title="Construções"
          button="Cadastrar nova construção"
          onClick={() => navigate("/construcoes/cadastrar")}
          loading={loading}
        />
        <DataTable columns={columns} data={obras!} />
        <Modal
          handleDelete={handleDelete}
          itemDescription={showModalDelete.identifier}
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
      </>
    </div>
  );
}

export default Obras;
