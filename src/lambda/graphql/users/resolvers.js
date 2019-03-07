import User from "./User";

const resolvers = {
  Query: {
    users: () => User.all(),
  },
};

export default resolvers;