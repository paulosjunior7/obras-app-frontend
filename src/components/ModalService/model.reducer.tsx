export enum EModalActions {
  SHOW = "SHOW",
  HIDE = "HIDE",
}

interface IModalActions {
  type: EModalActions;
  payload: IModalReducerData;
}

interface IModalReducerData {
  content: JSX.Element | string;
  title: string;
  onConfirm?: (...args: any) => any;
  onClose?: (...args: any) => any;
  data?: any;
  closeOutsideModal?: boolean;
}

interface IModelReturnData {
  content: JSX.Element | string;
  title: string;
  onConfirm?: (...args: any) => any;
  onClose?: (...args: any) => any;
  show: boolean;
  closeOutsideModal?: boolean;
}

const modalReducer = (
  state: any = {},
  action: IModalActions
): IModelReturnData => {
  switch (action.type) {
    case EModalActions.SHOW:
      return {
        ...state,
        content: action.payload.content,
        title: action.payload.title,
        onConfirm: action.payload.onConfirm || (() => {}),
        onClose: action.payload.onClose || (() => {}),
        show: true,
        closeOutsideModal: action.payload.closeOutsideModal,
      };

    case EModalActions.HIDE:
      return {
        ...state,
        content: "",
        title: "",
        show: false,
        data: action.payload.data,
      };

    default:
      return state;
  }
};

export default modalReducer;
