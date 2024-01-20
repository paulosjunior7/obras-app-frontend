import { useState } from "react";
import SvgIcon from "./Icons";
import { twMerge } from "tailwind-merge";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";

function Sidebar({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [expanded, setExpanded] = useState(true);

  const handleExpand = () => {
    // setExpanded(!expanded);
  };

  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleSubMenu = (path: string) => {
    if (expandedItems.includes(path)) {
      setExpandedItems(expandedItems.filter((item) => item !== path));
    } else {
      setExpandedItems([...expandedItems, path]);
    }
  };

  const menu = [
    {
      label: "Dashboard",
      path: "/dashboard",
      icon: "dashboard",
    },
    {
      label: "Construções",
      path: "/construcoes",
      icon: "build",
    },
    {
      label: "Cadastro de Produtos",
      path: "/produtos",
      subMenu: [
        {
          label: "Produtos",
          path: "/produtos",
          icon: "invetory",
        },
        {
          label: "Unidades",
          path: "/unidades",
          icon: "unity",
        },
        {
          label: "Grupos de Produto",
          path: "/grupos-produto",
          icon: "group",
        },
        {
          label: "Marcas",
          path: "/marcas",
          icon: "brand",
        },
      ],
    },
    {
      label: "Cadastro de Pessoas",
      path: "/pessoas",
      subMenu: [
        {
          label: "Pessoas",
          path: "/pessoas",
        },
        {
          label: "Fornecedores",
          path: "/fornecedores",
        },
        {
          label: "Funcionarios",
          path: "/funcionarios",
        },
        {
          label: "Cargos",
          path: "/cargos",
        },
      ],
    },
    {
      label: "Cadastros Auxiliares",
      path: "",
      subMenu: [
        {
          label: "Documentos",
          path: "/documentos",
          icon: "document",
        },
        {
          label: "Despesas",
          path: "/despesas",
          icon: "expenses",
        },
      ],
    },
  ];

  return (
    <>
      <div className="flex w-full h-full min-h-screen">
        <div className="flex w-[240px] bg-[#FFF] border-r flex-col shadow-lg ">
          {menu.map((item: any) => (
            <div key={item.path} className="first:font-bold">
              {item.subMenu ? (
                <div
                  onClick={() => {
                    toggleSubMenu(item.path);
                  }}
                  className="flex flex-row w-full h-[56px] items-center justify-between px-6 cursor-pointer hover:bg-slate-100 "
                >
                  <span className="font-normal leading-normal text-xs inline-block">
                    {item.label}
                  </span>
                  <SvgIcon
                    name="arrow-down"
                    className={`transform ${
                      expandedItems.includes(item.path)
                        ? "rotate-0"
                        : "-rotate-90"
                    }`}
                  />
                </div>
              ) : (
                <div
                  onClick={() => {
                    navigate(item.path);
                  }}
                  className="flex flex-row w-full h-[56px] items-center gap-2 px-6 cursor-pointer hover:bg-slate-100"
                >
                  <SvgIcon name={item.icon} />
                  <span className="font-normal leading-normal text-xs inline-block">
                    {item.label}
                  </span>
                </div>
              )}
              {expandedItems.includes(item.path) && item.subMenu && (
                <div className="ml-5 shadow-sm">
                  {" "}
                  {item.subMenu.map((subItem: any) => (
                    <div
                      key={subItem.path}
                      onClick={() => {
                        navigate(subItem.path);
                      }}
                      className="flex flex-row w-full h-[56px] items-center gap-2 px-6 cursor-pointer hover:bg-slate-100"
                    >
                      <SvgIcon name={subItem.icon} />
                      <span className="font-normal leading-normal text-xs inline-block">
                        {subItem.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div
          className="flex w-full py-4 h-full min-h-screen
        bg-[#F1F5F9] 
        "
        >
          <div className="flex w-full max-w-[1150px] mx-auto">{children}</div>
        </div>
      </div>
    </>
  );
  // return (
  //   <>

  //     <div
  //       className={twMerge("flex w-full", false && "hidden")}
  //     >
  //       <div
  //         className={`flex-col justify-between bg-[#003569] flex z-50 ${expanded ? "w-44" : "w-12"
  //           } h-screen items-center py-7 left-0 transition-all`}
  //       >
  //         <div className="flex flex-col items-center">
  //           {/* <div
  //             onClick={handleExpand}
  //           >
  //             <SvgIcon
  //               name="arrow-right"
  //               className={`w-6 h-6 mt-12 cursor-pointer ${expanded ? "rotate-180" : ""
  //                 } transition-transform`}
  //             />
  //           </div> */}
  //           <div className="gap-3 mt-16 flex flex-col">
  //             {
  //               menu.map((item) => (
  //                 <div
  //                   onClick={() => navigate(item.path)}
  //                   className="flex justify-center items-center flex-col cursor-pointer border p-2 rounded-md"
  //                 >
  //                   {expanded && (
  //                     <label className="font-normal m-0 transition-transform text-xs text-white">
  //                       {item.label}
  //                     </label>
  //                   )}
  //                 </div>
  //               ))
  //             }
  //           </div>
  //         </div>
  //       </div>
  //       <div className="bg-[#F1F5F9]">
  //         {children}
  //       </div>
  //     </div >
  //   </>

  // );
}

export default Sidebar;
