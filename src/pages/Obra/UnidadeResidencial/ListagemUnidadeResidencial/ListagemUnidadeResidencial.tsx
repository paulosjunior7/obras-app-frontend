import React, { useState } from "react";
import Table from "../../../../components/Table";
import { PencilSimple, Trash } from "phosphor-react";
import {
  ConstructionHouseType,
  useEditarUnidadeResindecialMutation,
  useGetUnidadeResidencialsQuery,
} from "../../../../graphql/generated";
import { toast } from "react-toastify";
import Modal from "../../../../components/Modal";
import { Pagination } from "../../../../components/Pagination";
import { useNavigate, useParams } from "react-router-dom";

const ListagemUnidadeResidencial: React.FC = () => {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();
  const [unidadesResidencial, setUnidadesResidencial] = useState<
    ConstructionHouseType[]
  >([]);

  const [page, setPage] = useState(1);
  const [start, setStart] = useState(0);
  const [offset, setOffset] = useState(12);
  const [totalBullets, setTotalBullets] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  const [showModalDelete, setShowModalDelete] = useState<ConstructionHouseType>(
    {} as ConstructionHouseType
  );

  const handlePageChange = (event: any, page: number) => {
    event.preventDefault();

    setUnidadesResidencial([]);
    const LIMIT = 12;

    setStart(page - 1 === 0 ? 0 : page * LIMIT - LIMIT);
    setOffset(LIMIT);
    setPage(page);
  };

  const { loading, refetch } = useGetUnidadeResidencialsQuery({
    variables: {
      pagination: {
        pageNumber: page,
        pageSize: offset,
      },
      filter: {},
    },
    nextFetchPolicy: "cache-and-network",
    onCompleted: (data) => {
      if (data && data.constructionHouses?.findall) {
        const { items, totalCount, pageInfo } = data.constructionHouses.findall;
        setUnidadesResidencial(items as ConstructionHouseType[]);
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
    { heading: "ID", value: "id" },
    { heading: "Descrição", value: "description" },
    { heading: "Área construída", value: "buildingArea" },
    { heading: "Área permeável", value: "permeableArea" },
    { heading: "Área lote", value: "fractionBatch" },
    { heading: "Valor", value: "saleValue" },
    { heading: "Status", value: "active" },
  ];

  const handleEdit = (id: number) => {
    navigate(`/obra/${slug}/unidades-resindencial/edicao/${id}`);
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

  const [editarUnidadeResidencial] = useEditarUnidadeResindecialMutation({
    onCompleted: (resposta) => {
      toast.success("Unidade residencial excluída", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
      refetch();
      setShowModalDelete({} as ConstructionHouseType);
    },
    onError: (error) => {
      toast.error("Falha ao excluir unidade residencial", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
    },
  });

  const handleDelete = () => {
    if (!!showModalDelete) {
      editarUnidadeResidencial({
        variables: {
          id: showModalDelete?.id,
          input: {
            constructionId: showModalDelete?.constructionId!,
            description: showModalDelete?.description!,
            active: false,
          },
        },
      });
    }
  };

  return (
    <>
      <Table
        handleEdit={() => {}}
        setShowModalDelete={setShowModalDelete}
        column={column}
        data={unidadesResidencial}
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
  );
};

export default ListagemUnidadeResidencial;
