"use client";

import { ApolloProvider } from "@apollo/client/react";
import createApolloClient from "./apollo.client";

export const ApolloGQLProvider = ({ children }: React.PropsWithChildren) => {
  const client = createApolloClient("");

  return (
    <ApolloProvider client={client}>
      <>{children}</>
    </ApolloProvider>
  );
};
