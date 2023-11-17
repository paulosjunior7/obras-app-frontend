import { useRef } from "react";
import { ModalService } from "../components/ModalService";
import {
  CadastroUnidadeProps,
  CadastroUnidade,
} from "../pages/Unidades/CadastroUnidade";

export const useModalUnidade = () => {
  const childRef = useRef<CadastroUnidadeProps>(null);

  const mostrar = (refresh?: () => void, id?: number) => {
    ModalService.show({
      content: <CadastroUnidade ref={childRef} id={id} />,
      title: "Cadastro de Unidade",
      onConfirm: () => {
        childRef.current?.salvar();
      },
      onClose: () => refresh?.(),
    });
  };

  return { mostrar };
};
