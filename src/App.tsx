import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Router } from "./routes";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Modal from "./components/ModalService";
import { Store } from "./redux";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Sidebar>
          <Provider store={Store}>
            <Router />
            <Modal />
          </Provider>
        </Sidebar>
      </BrowserRouter>
    </>
  );
}

export default App;
