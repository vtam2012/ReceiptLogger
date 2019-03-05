import { gql } from "apollo-server-lambda";

export const HelloWorldSchema = gql`
  type Query {
    hello: String
  }
`;

export const HelloWorldQueryResolvers = {
  Query: {
    hello: (root, args, context) => {
      return "Hello, world!";
    }
  }
};
