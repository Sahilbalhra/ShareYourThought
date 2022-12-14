import { ApolloClient, InMemoryCache } from "@apollo/client";

// const token = localStorage.getItem("token");
export const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
  headers: {
    authorization: localStorage.getItem("token") || "",
  },
});
