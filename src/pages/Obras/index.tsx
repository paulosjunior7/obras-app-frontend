import { useEffect, useState } from "react";
import {
  ProductType,
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

function Obras() {
  const [produtos, setProdutos] = useState<ProductType[]>([]);
  const [pesquisa, setPesquisa] = useState("");
  const [page, setPage] = useState(1);
  const [start, setStart] = useState(0);
  const [offset, setOffset] = useState(5);
  const [totalBullets, setTotalBullets] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [showModalDelete, setShowModalDelete] = useState<ProductType>(
    {} as ProductType
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
        setProdutos(items as ProductType[]);
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
      setShowModalDelete({} as ProductType);
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

    setProdutos([]);
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
          id: showModalDelete?.id,
          input: {
            description: showModalDelete?.description!,
            detail: showModalDelete?.detail!,
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
    { heading: "Descricao", value: "identifier" },
    { heading: "Detalhe", value: "dateBegin" },
    { heading: "Status", value: "active" },
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
        <Table
          handleEdit={handleEdit}
          setShowModalDelete={setShowModalDelete}
          column={column}
          data={produtos}
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
      </>
    </div>
  );
}

export default Obras;
