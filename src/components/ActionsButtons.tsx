import { PencilSimple, Trash } from "phosphor-react";

export default function ActionsButton({
  handleEdit,
  setShowModalDelete,
  row,
}: {
  handleEdit: (id: number) => void;
  setShowModalDelete: (item: any) => void;
  row: any;
}) {
  return (
    <div className="py-4 px-3 text-center flex gap-5 justify-center">
      <PencilSimple
        size={14}
        className="cursor-pointer"
        onClick={() => handleEdit(row.id)}
      />
      <Trash
        size={14}
        className="cursor-pointer"
        onClick={() => setShowModalDelete(row)}
      />
    </div>
  )
}