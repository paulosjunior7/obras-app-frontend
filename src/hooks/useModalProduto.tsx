import { useContext, useEffect, useRef } from "react";
import { ModalService } from "../components/ModalService";
import {
  CadastroProduto,
  CadastroProdutoProps,
} from "../pages/Produtos/CadastroProduto/CadastroProduto";

export const useModalProduto = () => {
  const childRef = useRef<CadastroProdutoProps>(null);

  const mostrar = (refresh?: () => void) => {
    ModalService.show({
      content: <CadastroProduto ref={childRef} />,
      title: "Cadastro de Produto",
      onConfirm: () => {
        childRef.current?.salvar();
      },
      onClose: () => {
        refresh?.();
      },
    });
  };

  return { mostrar };
};
