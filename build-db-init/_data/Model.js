"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _uuid = _interopRequireDefault(require("uuid"));

var AWS = require('aws-sdk');

let awsConfig = {
  region: 'us-east-1',
  endpoint: 'http://localhost:8000'
};
AWS.config.update(awsConfig);

class Model {
  constructor(props) {
    this.id = _uuid.default.v1();
  }

  static createTable(params) {
    var modifiedParams = (0, _objectSpread2.default)({}, params, {
      ProvisionedThroughput: {
        ReadCapacityUnits: 5,
        WriteCapacityUnits: 5
      },
      StreamSpecification: {
        StreamEnabled: false
      }
    });
    return new Promise((resolve, reject) => {
      // Call DynamoDB to create the table
      Model.ddb.createTable(modifiedParams, (err, data) => {
        if (err) {
          reject(new Error(err));
        } else {
          resolve(data);
        }
      });
    });
  }

  get(params) {
    return new Promise((resolve, reject) => {
      Model.ddb.getItem(params, function (err, data) {
        if (err) {
          reject(err);
        } else {
          console.log('wtf', data);
          resolve(data);
        }
      });
    });
  }

  save(params) {
    const modifiedParams = (0, _objectSpread2.default)({}, params, {
      Item: (0, _objectSpread2.default)({}, params.Item, {
        id: _uuid.default.v1()
      })
    });
    console.log('saving item', {
      modifiedParams
    });
    return new Promise((resolve, reject) => {
      Model.docClient.put(modifiedParams, (err, data) => {
        if (err) {
          reject(new Error(err));
        } else {
          console.log('saved');
          resolve(data);
        }
      });
    });
  }

}

(0, _defineProperty2.default)(Model, "ddb", new AWS.DynamoDB());
(0, _defineProperty2.default)(Model, "docClient", new AWS.DynamoDB.DocumentClient());
var _default = Model;
exports.default = _default;