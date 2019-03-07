// const { books } = require("./data");

class User {
  static all() {
    console.log('returning all')
    return [{ name: 'Akia' }, { name: 'Lev' }];
  }
}

export default User;