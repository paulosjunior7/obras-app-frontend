import { useEffect, useState } from "react";
import {
  ProductType,
  useEditarProdutoMutation,
  useGetProdutosQuery,
} from "../../graphql/generated";
import { PencilSimple, Trash } from "phosphor-react";
import { Pagination } from "../../components/Pagination";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../components/HeaderPage";
import { toast } from "react-toastify";
import Modal from "../../components/Modal";
import Table from "../../components/Table";
import { useModalProduto } from "../../hooks/useModalProduto";
import DropdownActions, { MenuAction } from "../../components/DropdownActions";
import DataTable from "../../components/DataTable";

function Produtos() {
  const [produtos, setProdutos] = useState<ProductType[]>([]);
  const [pesquisa, setPesquisa] = useState("");
  const [page, setPage] = useState(1);
  const [start, setStart] = useState(0);
  const [offset, setOffset] = useState(20);
  const [totalBullets, setTotalBullets] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [showModalDelete, setShowModalDelete] = useState<ProductType>(
    {} as ProductType
  );

  const modalCadastroProduto = useModalProduto();

  const { loading, refetch } = useGetProdutosQuery({
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
      if (data && data.products?.findall) {
        const { items, totalCount, pageInfo } = data.products.findall;
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
    modalCadastroProduto.mostrar(() => refetch(), id);
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
      cell: (props: ProductType) => {
        return <>{props.description}</>;
      },
    },
    {
      id: "detalhe",
      name: "Detalhe",
      cell: (props: ProductType) => {
        return <>{props.detail}</>;
      },
    },
    {
      id: "",
      width: 100,
      cell: (props: ProductType) => {
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
          title="Produtos"
          button="Novo Produto"
          onClick={() => {
            modalCadastroProduto.mostrar(() => refetch());
          }}
          loading={loading}
        />
        <DataTable columns={columns} data={produtos!} />
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

export default Produtos;
