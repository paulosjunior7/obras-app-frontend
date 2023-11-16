import { useContext, useEffect, useRef } from "react";
import { ModalService } from "../components/ModalService";
import { CadastroProduto, CadastroProdutoProps } from "../pages/Produtos/CadastroProduto";

export const useModalProduto = () => {
  const childRef = useRef<CadastroProdutoProps>(null);

  const mostrar = (refresh?: () => void, id?: number) => {
    ModalService.show({
      content: <CadastroProduto ref={childRef} id={id} />,
      title: "Cadastro de Produto",
      onConfirm: () => {
        childRef.current?.salvar();
      },
      onClose: () => refresh?.(),
    });
  };

  return { mostrar };
};
