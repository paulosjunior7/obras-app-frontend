import { useNavigate } from "react-router-dom";
import Container from "../../components/Container";

export default function Obras() {
  const navigate = useNavigate()
  return (
    <Container>
      <div className="flex flex-col w-full py-4 h-screen px-6 scroll-smooth	">
        <div className="flex justify-between">

          <h4 className="text-lg font-normal">Minhas Obras</h4>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={() => {
              navigate("/construcoes/nova")
            }}
          >Adicionar</button>
        </div>
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
    </Container>
  )
}