import { StyledEngineProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import ThemeApp from "./themeProvider";
import { setupStore } from "../store/store";

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  const client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql",
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
