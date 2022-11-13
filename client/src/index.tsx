import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
// import { Theme } from "./theme";
import "./index.css";
import { client } from "./graphql";
import { ApolloProvider } from "@apollo/client";


// const client = new ApolloClient({
//   uri: " http://localhost:5000/graphql",
//   cache: new InMemoryCache(),
//   headers: {
//     authorization: token || "",
//   },
// });

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ApolloProvider>
    </ChakraProvider>
  </React.StrictMode>
);
