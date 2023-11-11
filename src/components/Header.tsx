import { useNavigate } from "react-router-dom"

export default function Header() {
  const navigate = useNavigate()
  return (
    <div className=" h-16 w-full flex  shadow-sm border-b items-center px-6 justify-between">
      <div className="flex gap-2 ">


      </div>
      <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
        <span className="font-medium text-gray-600 dark:text-gray-300">JM</span>
      </div>
    </div>
  )
}