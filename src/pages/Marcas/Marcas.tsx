import { useEffect, useState } from "react";
import {
  BrandType,
  useEditarMarcaMutation,
  useGetMarcasQuery,
} from "../../graphql/generated";
import { PencilSimple, Trash } from "phosphor-react";
import { Pagination } from "../../components/Pagination";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../components/HeaderPage";
import { toast } from "react-toastify";
import Modal from "../../components/Modal";
import { useModalMarca } from "../../hooks/useModalMarca";
import DataTable from "../../components/DataTable";
import DropdownActions from "../../components/DropdownActions";

export interface MenuAction {
  label: string;
  color?: "danger";
  onClick: (e: number | any) => void;
}

interface DropdownActionsProps {
  id: number;
  actions: Array<MenuAction>;
}

function Marcas() {
  const [marcas, setMarcas] = useState<BrandType[] | undefined>([
    {} as BrandType,
  ]);

  const [pesquisa, setPesquisa] = useState("");
  const [page, setPage] = useState(1);
  const [start, setStart] = useState(0);
  const [offset, setOffset] = useState(12);
  const [totalBullets, setTotalBullets] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [showModalDelete, setShowModalDelete] = useState<BrandType>(
    {} as BrandType
  );

  const modalCadastroMarca = useModalMarca();

  const { loading, refetch } = useGetMarcasQuery({
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
      if (data && data.brands?.findall?.items) {
        const { items, totalCount, pageInfo } = data.brands?.findall!;
        setMarcas(items as BrandType[]);
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

  const [editarMarca] = useEditarMarcaMutation({
    onCompleted: (resposta) => {
      toast.success("Marca excluído", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
      refetch();
      setShowModalDelete({} as BrandType);
    },
    onError: (error) => {
      toast.error("Falha ao excluir Marca", {
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

    setMarcas([]);
    const LIMIT = 12;

    setStart(page - 1 === 0 ? 0 : page * LIMIT - LIMIT);
    setOffset(LIMIT);
    setPage(page);
  };

  const handleEdit = (id: number) => {
    modalCadastroMarca.mostrar(() => refetch(), id);
  };

  const handleDelete = (id: number) => {
    if (!!showModalDelete) {
      editarMarca({
        variables: {
          id: id,
          input: {
            description: "",
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
      cell: (props: BrandType) => {
        return <>{props.description}</>;
      },
    },
    {
      id: "",
      width: 100,
      cell: (props: BrandType) => {
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
        title="Marcas"
        button="Nova Marca"
        onClick={() => {
          modalCadastroMarca.mostrar(() => refetch());
        }}
        loading={loading}
      />
      <DataTable columns={columns} data={marcas!} />
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

export default Marcas;
