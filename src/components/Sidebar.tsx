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

  const menu = [
    {
      label: "Produtos",
      path: "/produtos",
    },
    {
      label: "Marcas",
      path: "/marcas",
    },
    {
      label: "Documentos",
      path: "/documentos",
    },
    {
      label: "Despesas",
      path: "/despesas",
    },
    {
      label: "Fornecedores",
      path: "/fornecedores",
    },
    {
      label: "Terceirizado",
      path: "/terceirizado",
    },
    {
      label: "Cargos",
      path: "/cargos",
    },
    {
      label: "Pessoas",
      path: "/pessoas",
    },
    {
      label: "Unidades",
      path: "/unidades",
    },
    {
      label: "Grupos de Produto",
      path: "/grupos",
    },
  ];

  return (
    <>
      <div className="flex w-full h-screen ">
        <div className="flex w-[240px] bg-[#FFF] border-r flex-col shadow-lg">
          {
            menu.map((item: any) => {
              return (
                <div
                  onClick={() => {
                    navigate(item.path)
                  }}
                  className="flex flex-row w-full h-[56px] border-b items-center justify-between px-6 cursor-pointer hover:bg-slate-100">
                  <span className="font-normal leading-normal text-xs inline-block">
                    {item.label}
                  </span>
                  <SvgIcon name="arrow-down" className="transform -rotate-90"
                  />
                </div>
              )
            }
            )}
        </div>
        <div className="flex w-full bg-[#F1F5F9] py-4">
          <div className="flex w-full max-w-[1200px] mx-auto">
            {children}
          </div>
        </div>
      </div>
    </>
  )



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
