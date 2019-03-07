import Receipt from "./Receipt";

const resolvers = {
  Query: {
    receipts: () => Receipt.all(),
  },
};

export default resolvers;