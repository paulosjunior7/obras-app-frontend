import { useRef } from "react";
import { ModalService } from "../components/ModalService";
import {
  CadastroDespesaProps,
  CadastroDespesa,
} from "../pages/Despesas/CadastroDespesa";

export const useModalDespesa = () => {
  const childRef = useRef<CadastroDespesaProps>(null);

  const mostrar = (refresh?: () => void, id?: number) => {
    ModalService.show({
      content: <CadastroDespesa ref={childRef} id={id} />,
      title: "Cadastro de Despesa",
      onConfirm: () => {
        childRef.current?.salvar();
      },
      onClose: () => refresh?.(),
    });
  };

  return { mostrar };
};
