"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _apolloServerLambda = require("apollo-server-lambda");

function _templateObject() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  type Receipt {\n    id: String\n    title: String\n  }\n  extend type Query {\n    receipts: [Receipt]\n  }\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}

const typeDef = (0, _apolloServerLambda.gql)(_templateObject());
var _default = typeDef;
exports.default = _default;