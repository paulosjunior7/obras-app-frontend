import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { RouterAuth } from "./routes.auth";
import { Router } from "./routes";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Modal from "./components/ModalService";
import { Store } from "./redux";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";

function App() {
  const { jwt } = useContext(UserContext);

  console.log(jwt);
  return (
    <>
      <BrowserRouter>
        {jwt ? (
          <>
            {/* <Header /> */}
            <Sidebar>
              <Provider store={Store}>
                <RouterAuth />
                <Modal />
              </Provider>
            </Sidebar>
          </>
        ) : (
          <Router />
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
