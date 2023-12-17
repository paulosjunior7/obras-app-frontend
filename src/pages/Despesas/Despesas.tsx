import { useEffect, useState } from "react";
import {
  ExpenseType,
  useEditarDespesaMutation,
  useGetDespesasQuery,
} from "../../graphql/generated";
import { Pagination } from "../../components/Pagination";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../components/HeaderPage";
import { toast } from "react-toastify";
import Modal from "../../components/Modal";
import { useModalDespesa } from "../../hooks/useModalDespesas";
import DropdownActions, { MenuAction } from "../../components/DropdownActions";
import DataTable from "../../components/DataTable";

function Despesas() {
  const [despesas, setDespesas] = useState<ExpenseType[]>([]);
  const [pesquisa, setPesquisa] = useState("");
  const [page, setPage] = useState(1);
  const [start, setStart] = useState(0);
  const [offset, setOffset] = useState(12);
  const [totalBullets, setTotalBullets] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [showModalDelete, setShowModalDelete] = useState<ExpenseType>(
    {} as ExpenseType
  );

  const navigate = useNavigate();
  const modalCadastroDespesa = useModalDespesa();

  const { loading, refetch } = useGetDespesasQuery({
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
      if (data && data.expenses?.findall) {
        const { items, totalCount, pageInfo } = data.expenses.findall;
        setDespesas(items as ExpenseType[]);
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

  const [editarDespesa] = useEditarDespesaMutation({
    onCompleted: (resposta) => {
      toast.success("Despesa excluída", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
      refetch();
      setShowModalDelete({} as ExpenseType);
    },
    onError: (error) => {
      toast.error("Falha ao excluir despesa", {
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

    setDespesas([]);
    const LIMIT = 12;

    setStart(page - 1 === 0 ? 0 : page * LIMIT - LIMIT);
    setOffset(LIMIT);
    setPage(page);
  };

  const handleEdit = (id: number) => {
    modalCadastroDespesa.mostrar(() => refetch(), id);
  };

  const handleDelete = () => {
    if (!!showModalDelete) {
      editarDespesa({
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
      cell: (props: ExpenseType) => {
        return <>{props.description}</>;
      },
    },
    {
      id: "",
      width: 100,
      cell: (props: ExpenseType) => {
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
        title="Despesas"
        button="Cadastrar nova despesa"
        onClick={() => {
          modalCadastroDespesa.mostrar(() => refetch());
        }}
        loading={loading}
      />
      <DataTable columns={columns} data={despesas!} />
      <Modal
        handleDelete={handleDelete}
        showModalDelete={showModalDelete}
        itemDescription={showModalDelete.description!}
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

export default Despesas;
