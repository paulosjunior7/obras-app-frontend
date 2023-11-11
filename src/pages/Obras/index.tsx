import React, { useState } from "react";
import { Buildings } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { ConstructionType, useGetObrasQuery } from "../../graphql/generated";
import Container from "../../components/Container";
import PageHeader from "../../components/HeaderPage";

export default function Obras() {
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
        // description: pesquisa,
        active: true,
      },
    },
    nextFetchPolicy: "cache-and-network",
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

  // const [editarProduto] = useEditarProdutoMutation({
  //   onCompleted: (resposta) => {
  //     toast.success("Produto excluído", {
  //       position: toast.POSITION.BOTTOM_RIGHT,
  //       className: "foo-bar",
  //     });
  //     refetch();
  //     setShowModalDelete({} as ProductType);
  //   },
  //   onError: (error) => {
  //     toast.error("Falha ao excluir produto", {
  //       position: toast.POSITION.BOTTOM_RIGHT,
  //       className: "foo-bar",
  //     });
  //   },
  // });

  return (
    <div>
      <div className="flex flex-col ">
        <PageHeader
          setSearch={setPesquisa}
          title="Construçōes"
          button="Nova Construção"
          onClick={() => navigate("/obras/cadastro")}
          loading={loading}
        />
        <div className="w-full bg-gray-100 h-16 mt-3 border-b-2 grid grid-cols-9 items-center px-4 rounded-t-md">
          <div className="col-span-4 font-semibold text-sm">Descriçao</div>
          <div className="col-span-2 font-semibold text-sm">Status</div>
          <div className="col-span-2 font-semibold text-sm">Preço</div>
          <div className="col-span-1 font-semibold text-sm"></div>
        </div>
        {
          [1, 2, 3, 4, 5, 6].map((item, index) => (
            <div key={index} className="w-full bg-white h-14 mt-3 border-b-2 grid grid-cols-9 items-center px-4">
              <div className="col-span-4 font-normal text-sm">Descricao obra</div>
              <div className="col-span-2 font-normal text-sm">Em construcao</div>
              <div className="col-span-2 font-normal text-sm">1000,00</div>
              <div className="col-span-1 flex justify-end items-center ">
                <button className="text-sm text-blue-500 mr-4">Editar</button>
                <button className="text-sm text-red-500">Excluir</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>

    // <div className="container mx-auto px-12 py-8 mt-5 flex justify-start ">
    //   <div className="flex flex-wrap -mx-1 lg:-mx-4">
    //     {obras.map((obra: ConstructionType) => (
    //       <div>
    //         <span>{obra.identifier}</span>
    //       </div>
    //       // <Card
    //       //   id={Number(obra.id)}
    //       //   title={obra.identifier}
    //       //   description="Aqui você vai encontrar os principais recursos para criar e gerenciar suas obras"
    //       //   icon={<Buildings size={35} />}
    //       // />
    //     ))}
    //   </div>
    // </div>
  );
}

