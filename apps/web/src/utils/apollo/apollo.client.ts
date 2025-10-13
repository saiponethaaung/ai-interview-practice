import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const createApolloClient = (token?: string) => {
  return new ApolloClient({
    link: new HttpLink({
      uri: "http://localhost:3000/graphql",
      // headers: {
      //   authorization: `Bearer ${token}`,
      // },
    }),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
