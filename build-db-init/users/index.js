"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _User = _interopRequireDefault(require("./User"));

var _resolvers = _interopRequireDefault(require("./resolvers"));

var _typeDef = _interopRequireDefault(require("./typeDef"));

var _default = {
  User: _User.default,
  resolvers: _resolvers.default,
  typeDef: _typeDef.default
};
exports.default = _default;