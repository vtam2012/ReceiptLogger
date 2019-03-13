"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Receipt = _interopRequireDefault(require("./Receipt"));

const resolvers = {
  Query: {
    receipts: () => _Receipt.default.all()
  }
};
var _default = resolvers;
exports.default = _default;