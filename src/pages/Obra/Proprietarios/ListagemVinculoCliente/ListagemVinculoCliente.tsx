import React, { useState } from "react";
import Table from "../../../../components/Table";
import { ArrowSquareOut, Trash } from "phosphor-react";
import {
  useGetVinculoClientesObraQuery,
  ConstructionInvestorType,
  useEditarVinculoClienteConstrucaoMutation,
  TypePeopleEnumType,
} from "../../../../graphql/generated";
import { toast } from "react-toastify";
import Modal from "../../../../components/Modal";
import { Pagination } from "../../../../components/Pagination";

const ListagemVinculoCliente: React.FC = () => {
  const [vinculocliente, setVinculoCliente] = useState<
    ConstructionInvestorType[]
  >([]);

  const [page, setPage] = useState(1);
  const [start, setStart] = useState(0);
  const [offset, setOffset] = useState(12);
  const [totalBullets, setTotalBullets] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  const [showModalDelete, setShowModalDelete] =
    useState<ConstructionInvestorType>({} as ConstructionInvestorType);

  const handlePageChange = (event: any, page: number) => {
    event.preventDefault();

    setVinculoCliente([]);
    const LIMIT = 12;

    setStart(page - 1 === 0 ? 0 : page * LIMIT - LIMIT);
    setOffset(LIMIT);
    setPage(page);
  };

  const { loading, refetch } = useGetVinculoClientesObraQuery({
    variables: {
      pagination: {
        pageNumber: page,
        pageSize: offset,
      },
      filter: {},
    },
    fetchPolicy: "cache-and-network",
    onCompleted: (data) => {
      if (data && data.constructionInvestors?.findall) {
        const { items, totalCount, pageInfo } =
          data.constructionInvestors.findall;
        setVinculoCliente(items as ConstructionInvestorType[]);
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

  const column = [
    { heading: "Nome", value: "people.fantasyName" },
    { heading: "CPF/CNPJ", value: "cpfCNPJ" },
    { heading: "Tipo pessoa", value: "people.typePeople" },
    { heading: "Status", value: "active" },
  ];

  const ActionsButtons = (row: any) => {
    return (
      <div className="py-4 px-3 text-center flex justify-evenly max-w-xs">
        <ArrowSquareOut
          size={20}
          className="hover:-translate-y-1 cursor-pointer"
          onClick={() => {
            window.open(`http://127.0.0.1:5173/pessoas/edicao/${row.id}`);
          }}
        />
        <Trash
          size={20}
          className="hover:-translate-y-1 cursor-pointer"
          onClick={() => setShowModalDelete(row)}
        />
      </div>
    );
  };

  const [editarPessoa] = useEditarVinculoClienteConstrucaoMutation({
    onCompleted: (resposta) => {
      toast.success("Fornecedor excluído", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
      refetch();
      setShowModalDelete({} as ConstructionInvestorType);
    },
    onError: (error) => {
      toast.error("Falha ao excluir fornecedor", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
    },
  });

  const handleDelete = () => {
    if (!!showModalDelete) {
      editarPessoa({
        variables: {
          id: showModalDelete?.id,
          input: {
            constructionId: showModalDelete?.constructionId!,
            peopleId: showModalDelete?.peopleId!,
            active: false,
          },
        },
      });
    }
  };

  return (
    <>
      <Table
        handleEdit={() => { }}
        setShowModalDelete={setShowModalDelete}
        column={column}
        data={vinculocliente.map((item: ConstructionInvestorType) => ({
          ...item,
          cpfCNPJ:
            item?.people?.typePeople === "FISICA"
              ? item?.people?.cpf
              : item?.people?.cnpj,
        }))}
        element={ActionsButtons}
      />
      <Modal
        handleDelete={handleDelete}
        itemDescription={showModalDelete.people?.fantasyName!}
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
  );
};

export default ListagemVinculoCliente;
