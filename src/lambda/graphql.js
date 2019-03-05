import { ApolloServer, gql } from "apollo-server-lambda";
import { HelloWorldSchema, HelloWorldQueryResolvers } from "./graphql/hello-world";
import { GraphQLTestSchema, GraphQLTestQueryResolvers } from "./graphql/graphql-test";

const resolvers = {
    ...HelloWorldQueryResolvers,
    ...GraphQLTestQueryResolvers,
};

const server = new ApolloServer({
  typeDefs: [HelloWorldSchema, GraphQLTestSchema],
  resolvers,
  introspection: true,
  playground: true,
});

exports.handler = server.createHandler();