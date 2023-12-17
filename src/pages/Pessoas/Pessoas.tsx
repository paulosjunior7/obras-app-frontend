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
import { useModalPessoa } from "../../hooks/useModalPessoa";
import DropdownActions, { MenuAction } from "../../components/DropdownActions";
import DataTable from "../../components/DataTable";

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

  const modalCadastroPessoa = useModalPessoa();

  const { loading, refetch } = useGetPessoasQuery({
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
    modalCadastroPessoa.mostrar(() => refetch(), id);
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

  const columns = [
    {
      id: "Nome",
      name: "Nome",
      cell: (props: PeopleType) => {
        return <>{props.fantasyName}</>;
      },
    },
    {
      id: "",
      width: 100,
      cell: (props: PeopleType) => {
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

  return (
    <div className="w-full">
      <PageHeader
        setSearch={setPesquisa}
        title="Pessoas"
        button="Nova Pessoa"
        onClick={() => {
          modalCadastroPessoa.mostrar(() => refetch());
        }}
        loading={loading}
      />
      <DataTable columns={columns} data={pessoas!} />
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
