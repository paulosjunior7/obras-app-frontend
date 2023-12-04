import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "http://0.0.0.0:5000/graphql",
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmODFkY2IyOGQ0NmM0YTVlOTU2MzQzZjIzODlhYmNmMCIsInN1YiI6IlBhdWxvIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiI4MGQzMGE0ZS01MzRiLTQyZDktODgzNS02NmVkNjI2NDEyZjEiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImV4cCI6MTcwMTgyMzU3MCwiaXNzIjoiWW91cklzc3Vlck5hbWUiLCJhdWQiOiJodHRwczovL3BlcmZvcm1hbmNlYnVpbGRlci5henVyZXdlYnNpdGVzLm5ldCJ9.j5n8Br5EGhITTyyGFemKss3DHouO-HUIXothwVpuo9k`,
  },
  cache: new InMemoryCache(),
});
