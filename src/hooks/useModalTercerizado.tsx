import { useRef } from "react";
import { ModalService } from "../components/ModalService";
import {
  CadastroTerceirizadoProps,
  CadastroTerceirizado,
} from "../pages/Terceirizados/CadastroTerceirizado";

export const useModalTerceirizado = () => {
  const childRef = useRef<CadastroTerceirizadoProps>(null);

  const mostrar = (refresh?: () => void, id?: number) => {
    ModalService.show({
      content: <CadastroTerceirizado ref={childRef} id={id} />,
      title: "Cadastro de Terceirizado",
      onConfirm: () => {
        childRef.current?.salvar();
      },
      onClose: () => refresh?.(),
    });
  };

  return { mostrar };
};
