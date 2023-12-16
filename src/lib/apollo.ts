import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { getAuthentication, setAuthentication } from "../services/localStorage";

const httpLink = createHttpLink({
  uri: "http://0.0.0.0:5000/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = getAuthentication();
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    for (let err of graphQLErrors) {
      console.log(err);
      if (err.extensions?.number === "authorization") {
        // Handle the 401 error here (e.g., redirect to login)
        setAuthentication("");
        window.location.reload();
      }
    }
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

export const client = new ApolloClient({
  link: errorLink.concat(authLink.concat(httpLink)),
  cache: new InMemoryCache(),
});
