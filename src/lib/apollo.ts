import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "http://0.0.0.0:5000/graphql",
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2OTNjMTJiZGRiOWM0MmIxYTY2NGY2ZTFiZWRlNmY3MyIsInN1YiI6IlBhdWxvNyIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiNmQ5MzViNjUtZjlhNS00MzI1LWJhMTAtNDUzZmIyMjBiNGQ1IiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQWRtaW4iLCJleHAiOjE3MDA3NTA2OTksImlzcyI6IllvdXJJc3N1ZXJOYW1lIiwiYXVkIjoiaHR0cHM6Ly9wZXJmb3JtYW5jZWJ1aWxkZXIuYXp1cmV3ZWJzaXRlcy5uZXQifQ.-h--DzuWCPOat3hYQ_4jVpxbWuPhKGh9pXIOyEHssOA`,
  },
  cache: new InMemoryCache(),
});
