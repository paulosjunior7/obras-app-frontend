import { useNavigate } from "react-router-dom"
import SvgIcon from "./Icons"

export default function Header() {
  const navigate = useNavigate()
  return (
    <div className=" h-16 w-full flex  shadow-sm border-b items-center px-8 justify-between">
      <div className="flex gap-2 ">

      </div>
      <div className="gap-2 flex items-center">
        <div className="flex flex-col">
          <span className="text-sm font-normal text-black">
            Juliana Machado
          </span>
          <span className="text-xs text-right font-semibold text-black">
            JMS Construtora
          </span>
        </div>
        <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full border">
          <span className="font-medium text-gray-700 dark:text-gray-300">JM</span>
        </div>
        <SvgIcon name="arrow-down" />
      </div>
    </div>
  )
}