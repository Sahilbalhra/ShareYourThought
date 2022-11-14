import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
// import { Theme } from "./theme";
import "./index.css";
import { client } from "./graphql";
import { ApolloProvider } from "@apollo/client";
import { store } from './app/store';
import { Provider } from "react-redux";

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
      <Provider store={store} >
        <ApolloProvider client={client}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ApolloProvider>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);
