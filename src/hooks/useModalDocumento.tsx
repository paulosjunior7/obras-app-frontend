import { useRef } from "react";
import { ModalService } from "../components/ModalService";
import {
  CadastroDocumentoProps,
  CadastroDocumento,
} from "../pages/Documentos/CadastroDocumento";

export const useModalDocumento = () => {
  const childRef = useRef<CadastroDocumentoProps>(null);

  const mostrar = (refresh?: () => void, id?: number) => {
    ModalService.show({
      content: <CadastroDocumento ref={childRef} id={id} />,
      title: "Cadastro de Documento",
      onConfirm: () => {
        childRef.current?.salvar();
      },
      onClose: () => refresh?.(),
    });
  };

  return { mostrar };
};
