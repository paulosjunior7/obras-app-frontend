import { combineReducers } from "redux";
import modalReducer from "../components/ModalService/model.reducer";

const rootReducer = combineReducers({
  modalReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
