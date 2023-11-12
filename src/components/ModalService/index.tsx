import React from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../redux/app";
import { useScrollTop } from "../../hooks/useScrollTop";
import { EModalActions } from "./model.reducer";
import { X } from "phosphor-react";
import FooterCadastro from "../FooterCadastro";

interface IModalServiceAPIs {
  show: (config: {
    content: JSX.Element;
    title: string;
    onConfirm?: (...args: any[]) => any;
    onClose?: (...args: any[]) => any;
    data?: any;
    closeOutsideModal?: boolean;
  }) => void;
  hide: (...args: any[]) => void;
  closeMe: (...args: any[]) => void;
}

let ModalService = {} as IModalServiceAPIs;

const Modal: React.FC = () => {
  const state = useSelector((state: RootState) => state.modalReducer);
  const dispatch = useDispatch();
  const scrollTop = useScrollTop();

  /**
   * Serviço para exibir o modal
   */
  ModalService.show = (config) => {
    scrollTop();
    dispatch({
      type: EModalActions.SHOW,
      payload: {
        content: config.content,
        title: config.title,
        onConfirm: config.onConfirm || (() => {}),
        onClose: config.onClose || (() => {}),
        data: config.data,
        closeOutsideModal: config.closeOutsideModal,
      },
    });
  };

  /**
   * Serviço para ocultar o modal
   */
  ModalService.hide = (config) => {
    config.onClose?.();
    dispatch({
      type: EModalActions.HIDE,
      payload: {
        content: "",
        data: config.data,
      },
    });
  };

  const closeMe = () => {
    state.onClose && state.onClose();
    ModalService.hide();
  };

  const modal = (
    <>
      <div
        className={`fixed inset-0 z-10 bg-black opacity-50 transition-opacity duration-500 block`}
        onClick={closeMe}
      ></div>

      <div
        className={`fixed left-0 h-full w-2/4 border-l shadow-sm z-20 top-0 
       bg-white border-gray-300 transform -translate-x-full transition duration-500 ease-in-out translate-x-0`}
      >
        <div className="flex justify-between items-center h-16 px-6 border-b">
          <h5 className="text-2xl font-normal">{state.title}</h5>
          <X
            size={30}
            className="cursor-pointer hover:text-gray-500"
            onClick={closeMe}
          />
        </div>
        <div className="h-full overflow-y-auto p-6">
          {state.content}
          <FooterCadastro onCancel={closeMe} onSave={state.onConfirm} />
        </div>
      </div>
    </>
  );

  return state.show ? ReactDOM.createPortal(modal, document.body) : null;
};

export default Modal;
export { ModalService };
