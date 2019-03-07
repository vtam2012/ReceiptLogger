import { gql } from "apollo-server-lambda";

const typeDef = gql`
  type User {
    name: String
  }
  extend type Query {
    users: [User]
  }
`;

export default typeDef;