"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _User = _interopRequireDefault(require("./User"));

const resolvers = {
  Query: {
    users: () => _User.default.all()
  },
  User: {
    email: () => {
      console.log('email?');
      return _User.default.email();
    }
  }
};
var _default = resolvers;
exports.default = _default;