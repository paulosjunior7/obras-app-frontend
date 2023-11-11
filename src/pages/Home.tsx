import React from "react";
import {
  Buildings,
  Brain,
  Armchair,
  DiceOne,
  Exam,
  Alien,
  Bathtub,
  EarSlash,
} from "phosphor-react";
import { useNavigate } from "react-router-dom";
import Tabs, { Tab } from "../components/Tabs";
import Produtos from "./Produtos";
import Marcas from "./Marcas";
import Documentos from "./Documentos";
import Despesas from "./Despesas";
import Fornecedores from "./Fornecedores";
import Terceirizados from "./Terceirizados";
import Cargos from "./Cargos";
import Pessoas from "./Pessoas";
import Unidades from "./Unidades";
import GruposProduto from "./GrupoProduto/GruposProduto";
import Obras from "./Obras";

function Home() {
  const [selectedTab, setSelectedTab] = React.useState(0);

  return (
    <div className="container mx-auto px-12 py-8 mt-5 flex justify-center ">

      {/* <div className="flex flex-wrap -mx-1 lg:-mx-4">
        <Card
          title="Obras"
          description="Aqui você vai encontrar os principais recursos para criar e gerenciar suas obras"
          icon={<Buildings size={35} />}
        />
        <Card
          title="Produtos"
          description="Aqui você vai encontrar os principais recursos para criar e gerenciar seus produtos"
          icon={<Armchair size={35} />}
        />
        <Card
          title="Marcas"
          description="Aqui você vai encontrar os principais recursos para criar e gerenciar seus cadastros de marcas"
          icon={<Brain size={35} />}
        />
        <Card
          title="Documentos"
          description="Aqui você vai encontrar os principais recursos para criar e gerenciar seus cadastros de tipos de documentos"
          icon={<DiceOne size={35} />}
        />
        <Card
          title="Despesas"
          description="Aqui você vai encontrar os principais recursos para criar e gerenciar seus cadastros de tipos de despesas"
          icon={<Exam size={35} />}
        />
        <Card
          title="Fornecedores"
          description="Aqui você vai encontrar os principais recursos para criar e gerenciar seus fornecedores"
          icon={<Alien size={35} />}
        />
        <Card
          title="Terceirizados"
          description="Aqui você vai encontrar os principais recursos para criar e gerenciar seus terceirizados"
          icon={<Bathtub size={35} />}
        />
        <Card
          title="Cargos"
          description="Aqui você vai encontrar os principais recursos para criar e gerenciar os cadastros de cargos"
          icon={<EarSlash size={35} />}
        />
        <Card
          title="Pessoas"
          description="Aqui você vai encontrar os principais recursos para criar e gerenciar os cadastros de pessoas"
          icon={<EarSlash size={35} />}
        />
        <Card
          title="Unidades"
          description="Aqui você vai encontrar os principais recursos para criar e gerenciar os cadastros de unidades"
          icon={<EarSlash size={35} />}
        />
        <Card
          title="Grupos de Produto"
          description="Aqui você vai encontrar os principais recursos para criar e gerenciar os cadastros de grupo de produto"
          icon={<EarSlash size={35} />}
          path="grupos-produto"
        />
      </div> */}
    </div>
  );
}

export default Home;

interface CardProps {
  title: any;
  description: any;
  icon: any;
  path?: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  icon,
  path,
}) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/${path ? path : title}`)}
      className="my-2 mx-2 hover:-translate-y-3 delay-1500 duration-300 p-6 max-w-7xl w-80 bg-white rounded-lg border border-gray-200 shadow-md  cursor-pointer text-gray-700 "
    >
      <a className="flex justify-between mb-5 items-center py-2 px-3 text-sm font-medium text-center ">
        {icon}
        <svg
          aria-hidden="true"
          className="ml-2 -mr-1 w-4 h-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
      <a>
        <h5 className="mb-2 text-2xl font-sans tracking-tight text-gray-900 ">
          {title}
        </h5>
      </a>
      <p className="mb-5 font-normal text-gray-700 ">{description}</p>
    </div>
  );
};
