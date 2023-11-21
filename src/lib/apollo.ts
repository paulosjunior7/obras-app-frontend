import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "http://0.0.0.0:5000/graphql",
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlMDlhMmE2NzMwOGE0MTllOTJmMzJkNDM4YWZhMjBiZSIsInN1YiI6IjczNzA1MzczMTUzIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiI1NjJlZTFlZC1kYzM5LTRhYjUtOTgwOS1jNjhjZmZiNTU4ZTkiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImV4cCI6MTcwMDgyNzI0MiwiaXNzIjoiWW91cklzc3Vlck5hbWUiLCJhdWQiOiJodHRwczovL3BlcmZvcm1hbmNlYnVpbGRlci5henVyZXdlYnNpdGVzLm5ldCJ9.iuGo63oPUgXCrx0E6kQK1uTmFmReirTPkM_2ZPxI0bU`,
  },
  cache: new InMemoryCache(),
});
