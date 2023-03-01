import { StyledEngineProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";
import ThemeApp from "./themeProvider";
import { setupStore } from "../store/store";
import fetch from "cross-fetch";

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  const client = new ApolloClient({
    link: new HttpLink({ uri: "https://rickandmortyapi.com/graphql", fetch }),
    cache: new InMemoryCache({
      typePolicies: {
        Characters: {
          keyFields: ["results", ["id"]],
        },
      },
    }),
  });
  return (
    <Provider store={setupStore()}>
      <StyledEngineProvider injectFirst>
        <ApolloProvider client={client}>
          <ThemeApp>{children}</ThemeApp>
        </ApolloProvider>
      </StyledEngineProvider>
    </Provider>
  );
};
