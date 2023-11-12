export default function FooterCadastro({
  onCancel,
  onSave,
}: {
  onCancel?: () => void;
  onSave?: () => void;
}) {
  return (
    <div>
      <div className="flex justify-end w-full gap-2 col-span-2 mt-5">
        <button
          type="button"
          className="border-[#003569] text-[#003569] border px-4 py-2 rounded-md text-sm font-semibold"
          onClick={() => onCancel?.()}
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="bg-[#003569] text-white px-4 py-2 rounded-md w-[100px] text-sm font-semibold"
          onClick={() => onSave?.()}
        >
          Salvar
        </button>
      </div>
    </div>
  );
}
