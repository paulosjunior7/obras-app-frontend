import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "http://0.0.0.0:5000/graphql",
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJjYWQwZDNkNWI2N2M0MDcwODUwMGJkZWJiM2RmMGI4YyIsInN1YiI6IlBhdWxvNyIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiNmQ5MzViNjUtZjlhNS00MzI1LWJhMTAtNDUzZmIyMjBiNGQ1IiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQWRtaW4iLCJleHAiOjE3MDAzMjUxNjQsImlzcyI6IllvdXJJc3N1ZXJOYW1lIiwiYXVkIjoiaHR0cHM6Ly9wZXJmb3JtYW5jZWJ1aWxkZXIuYXp1cmV3ZWJzaXRlcy5uZXQifQ.Qn7yjwezUYZ_CR-KsL3fCNw7scrEVbe1uRkAgoc2Xyc`,
  },
  cache: new InMemoryCache(),
});
