import { gql } from "apollo-server-lambda";

export const GraphQLTestSchema = gql`
  type Test {
    test: String
  }
`;

export const GraphQLTestQueryResolvers = {
  Test: {
    test: (root, args, context) => {
      return "Graphql Test";
    }
  }
};
