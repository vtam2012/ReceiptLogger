"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// const { books } = require("./data");
class Receipt {
  static all() {
    console.log('returning receipts');
    return [{
      id: '145',
      title: 'Groceries, Wed'
    }, {
      id: '42',
      title: 'Subway'
    }];
  }

}

var _default = Receipt;
exports.default = _default;