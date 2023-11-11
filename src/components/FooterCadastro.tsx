export default function FooterCadastro({
  navigate,
  hef,
}: {
  navigate?: any,
  hef: any
}) {
  return (
    <div>
      <div className="flex justify-end w-full gap-2 col-span-2">
        <button
          className="border-[#003569] text-[#003569] border px-4 py-2 rounded-md text-sm font-semibold"
          onClick={() => navigate(hef)}
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="bg-[#003569] text-white px-4 py-2 rounded-md w-[100px] text-sm font-semibold"
        >
          Salvar
        </button>
      </div>
    </div >
  );
} 