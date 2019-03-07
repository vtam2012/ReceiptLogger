import { gql } from "apollo-server-lambda";

const typeDef = gql`
  type Receipt {
    id: String
    title: String
  }
  extend type Query {
    receipts: [Receipt]
  }
`;

export default typeDef;