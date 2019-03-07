// const { books } = require("./data");

class User {
  static all() {
    console.log('returning receipts')
    return [{ id: '145', title: 'Groceries, Wed' }, { id: '42', title: 'Subway' }];
  }
}

export default User;