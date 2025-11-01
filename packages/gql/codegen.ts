import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:3000/graphql",
  documents: "src/**/*.{gql,graphql}",
  generates: {
    "src/generated/": {
      preset: "client",
      presetConfig: {
        gqlTagName: "gql",
      },
    },
    "src/generated/types.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "@graphql-codegen/typescript-react-apollo",
      ],
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;
