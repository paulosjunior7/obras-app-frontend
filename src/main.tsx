import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { client } from "./lib/apollo.ts";
import ProviderUserContext from "./context/UserContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProviderUserContext>
      <ToastContainer />
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </ProviderUserContext>
  </React.StrictMode>
);
