import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://localhost:5001/graphql",
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5OTllZTA4MDIyOWY0MjllOTM0MjMyMWNlOTM4NGE3OCIsInN1YiI6IlBhdWxvIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiI4MGQzMGE0ZS01MzRiLTQyZDktODgzNS02NmVkNjI2NDEyZjEiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImV4cCI6MTcwMTMwNTc4MiwiaXNzIjoiWW91cklzc3Vlck5hbWUiLCJhdWQiOiJodHRwczovL3BlcmZvcm1hbmNlYnVpbGRlci5henVyZXdlYnNpdGVzLm5ldCJ9.pYWV2fJ50Z3HEviKQcy0ehppZxFXBl1P29lm3hAFwW4`,
  },
  cache: new InMemoryCache(),
});
