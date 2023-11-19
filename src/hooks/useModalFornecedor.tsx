import { useRef } from "react";
import { ModalService } from "../components/ModalService";
import {
  CadastroFornecedorProps,
  CadastroFornecedor,
} from "../pages/Fornecedores/CadastroFornecedor";

export const useModalFornecedor = () => {
  const childRef = useRef<CadastroFornecedorProps>(null);

  const mostrar = (refresh?: () => void, id?: number) => {
    ModalService.show({
      content: <CadastroFornecedor ref={childRef} id={id} />,
      title: "Cadastro de Fornecedor",
      onConfirm: () => {
        childRef.current?.salvar();
      },
      onClose: () => refresh?.(),
    });
  };

  return { mostrar };
};
