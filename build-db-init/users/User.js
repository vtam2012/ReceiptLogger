"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Model = _interopRequireDefault(require("../_data/Model"));

// const { books } = require("./data");
// var AWS = require('aws-sdk');
// // Set the region
// AWS.config.update({region: 'REGION'});
// // Create the DynamoDB service object
// var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});
// var params = {
//   TableName: process.argv[2]
// };
class User extends _Model.default {
  constructor(props) {
    super(props);
    const {
      firstName,
      lastName,
      email
    } = props || {};
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }

  static all() {
    return [{
      name: 'Akia'
    }, {
      name: 'Lev'
    }];
  }

  static email() {
    return 'shit@email.com';
  }

  static createTables() {
    var params = {
      AttributeDefinitions: [{
        AttributeName: 'id',
        AttributeType: 'S'
      }],
      KeySchema: [{
        AttributeName: 'id',
        KeyType: 'HASH'
      }],
      TableName: User.table
    };
    return super.createTable(params);
  }

  getById(id) {
    var params = {
      TableName: User.table,
      Key: {
        id: {
          S: id
        }
      }
    };
    return super.get(params);
  }

  save() {
    let params = {
      TableName: User.table,
      Item: {
        id: this.id,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email
      }
    };
    console.log('User (saving)..');
    return super.save(params);
  }

}

(0, _defineProperty2.default)(User, "table", 'rl_local_users');
var _default = User;
exports.default = _default;