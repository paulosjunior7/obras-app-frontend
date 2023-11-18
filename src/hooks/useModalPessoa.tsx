import { useRef } from "react";
import { ModalService } from "../components/ModalService";
import CadastroPessoa from "../pages/Pessoas/CadastroPessoa";
import { CadastroPessoaProps } from "../pages/Pessoas/CadastroPessoa/CadastroPessoa";

export const useModalPessoa = () => {
  const childRef = useRef<CadastroPessoaProps>(null);

  const mostrar = (refresh?: () => void, id?: number) => {
    ModalService.show({
      content: <CadastroPessoa ref={childRef} id={id} />,
      title: "Cadastro Pessoa",
      onConfirm: () => {
        childRef.current?.salvar();
      },
      onClose: () => refresh?.(),
    });
  };

  return { mostrar };
};
