import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const client = new ApolloClient({
  uri: 'https://localhost:5001/graphql',
  cache: new InMemoryCache(),
  headers: {
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI1NDRmOGM4ZjY2YWI0MzZlYTQxODIzYTE0YzM3ZjlmZCIsInN1YiI6IlBhdWxvNyIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiNmQ5MzViNjUtZjlhNS00MzI1LWJhMTAtNDUzZmIyMjBiNGQ1IiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQWRtaW4iLCJleHAiOjE2OTk5ODM2MDgsImlzcyI6IllvdXJJc3N1ZXJOYW1lIiwiYXVkIjoiaHR0cHM6Ly9wZXJmb3JtYW5jZWJ1aWxkZXIuYXp1cmV3ZWJzaXRlcy5uZXQifQ.UMU1p9xKzXREaMwde3_WeMEgA6b98m3_ipq19liUug0"
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ToastContainer />
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
)
