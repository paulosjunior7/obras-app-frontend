import { useRef } from "react";
import { ModalService } from "../components/ModalService";
import {
  CadastroCargoProps,
  CadastroCargo,
} from "../pages/Cargos/CadastroCargo";

export const useModalCargo = () => {
  const childRef = useRef<CadastroCargoProps>(null);

  const mostrar = (refresh?: () => void, id?: number) => {
    ModalService.show({
      content: <CadastroCargo ref={childRef} id={id} />,
      title: "Cadastro de Cargo",
      onConfirm: () => {
        childRef.current?.salvar();
      },
      onClose: () => refresh?.(),
    });
  };

  return { mostrar };
};
