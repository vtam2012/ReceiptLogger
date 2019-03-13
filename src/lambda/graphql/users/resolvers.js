import User from "./User";

const resolvers = {
  Query: {
    users: () => User.all(),
  },
  User: {
    email: () => {
      console.log('email?');
      return User.email()
    }
  }
};

export default resolvers;