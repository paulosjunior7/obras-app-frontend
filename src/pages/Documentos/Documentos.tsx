import { useEffect, useState } from "react";
import {
  DocumentationType,
  useEditarDocumentoMutation,
  useGetDocumentosQuery,
} from "../../graphql/generated";
import { PencilSimple, Trash } from "phosphor-react";
import { Pagination } from "../../components/Pagination";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../components/HeaderPage";
import { toast } from "react-toastify";
import Modal from "../../components/Modal";
import Table from "../../components/Table";
import { useModalDocumento } from "../../hooks/useModalDocumento";
import DataTable from "../../components/DataTable";
import DropdownActions, { MenuAction } from "../../components/DropdownActions";

function Documentos() {
  const [documentos, setDocumentos] = useState<DocumentationType[]>([]);
  const [pesquisa, setPesquisa] = useState("");
  const [page, setPage] = useState(1);
  const [start, setStart] = useState(0);
  const [offset, setOffset] = useState(12);
  const [totalBullets, setTotalBullets] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [showModalDelete, setShowModalDelete] = useState<DocumentationType>(
    {} as DocumentationType
  );

  const navigate = useNavigate();
  const modalCadastroDocumento = useModalDocumento();

  const { loading, refetch } = useGetDocumentosQuery({
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
      if (data && data.documentations?.findall) {
        const { items, totalCount, pageInfo } = data.documentations.findall;
        setDocumentos(items as DocumentationType[]);
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

  const [editarDocumento] = useEditarDocumentoMutation({
    onCompleted: (resposta) => {
      toast.success("Documento excluído", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
      refetch();
      setShowModalDelete({} as DocumentationType);
    },
    onError: (error) => {
      toast.error("Falha ao excluir documento", {
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

    setDocumentos([]);
    const LIMIT = 12;

    setStart(page - 1 === 0 ? 0 : page * LIMIT - LIMIT);
    setOffset(LIMIT);
    setPage(page);
  };

  const handleEdit = (id: number) => {
    modalCadastroDocumento.mostrar(() => refetch(), id);
  };

  const handleDelete = () => {
    if (!!showModalDelete) {
      editarDocumento({
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
      cell: (props: DocumentationType) => {
        return <>{props.description}</>;
      },
    },
    {
      id: "",
      width: 100,
      cell: (props: DocumentationType) => {
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
        title="Documentos"
        button="Novo Documento"
        onClick={() => {
          modalCadastroDocumento.mostrar(() => refetch());
        }}
        loading={loading}
      />
      <DataTable columns={columns} data={documentos!} />
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

export default Documentos;
