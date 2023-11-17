import { useRef } from "react";
import { ModalService } from "../components/ModalService";
import {
  CadastroGrupoProduto,
  CadastroGrupoProdutoProps,
} from "../pages/GrupoProduto/CadastroGrupoProduto";

export const useModalGrupoProduto = () => {
  const childRef = useRef<CadastroGrupoProdutoProps>(null);

  const mostrar = (refresh?: () => void, id?: number) => {
    ModalService.show({
      content: <CadastroGrupoProduto ref={childRef} id={id} />,
      title: "Cadastro de Grupo",
      onConfirm: () => {
        childRef.current?.salvar();
      },
      onClose: () => refresh?.(),
    });
  };

  return { mostrar };
};
