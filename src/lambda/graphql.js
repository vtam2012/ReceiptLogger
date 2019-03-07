import { ApolloServer, gql } from "apollo-server-lambda";
import Users from './graphql/users';
import Receipts from './graphql/receipts';

const typeDef = gql`
  type Query
`;

const server = new ApolloServer({
  typeDefs: [typeDef, Users.typeDef, Receipts.typeDef],
  resolvers: [Users.resolvers, Receipts.resolvers],
  introspection: true,
  playground: true,
});

exports.handler = server.createHandler();