import { useRef } from "react";
import { ModalService } from "../components/ModalService";
import CadastroMarca, { CadastroMarcaProps } from "../pages/Marcas/CadastroMarca";

export const useModalMarca = () => {
  const childRef = useRef<CadastroMarcaProps>(null);

  const mostrar = (refresh?: () => void, id?: number) => {
    ModalService.show({
      content: <CadastroMarca ref={childRef} id={id} />,
      title: "Cadastro de Marca",
      onConfirm: () => {
        childRef.current?.salvar();
      },
      onClose: () => refresh?.(),
    });
  };

  return { mostrar };
};
