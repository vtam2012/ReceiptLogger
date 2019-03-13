"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _awsSdk = _interopRequireDefault(require("aws-sdk"));

var _User = _interopRequireDefault(require("../users/User"));

var _Model = _interopRequireDefault(require("./Model"));

let awsConfig = {
  region: 'us-east-1',
  endpoint: 'http://localhost:8000'
};

_awsSdk.default.config.update(awsConfig);

const deleteTables = () => {
  return new Promise((resolve, reject) => {
    const params = {
      TableName: _User.default.table
    };

    _Model.default.ddb.deleteTable(params, (err, data) => {
      if (err && err.code === 'ResourceNotFoundException') {
        resolve(data);
      } else if (err && err.code === 'ResourceInUseException') {
        reject(new Error('Table in use'));
      } else if (err) {
        reject(new Error(err));
      } else {
        resolve(data);
      }
    });
  });
};

const dbInit = async () => {
  try {
    await deleteTables();
    await _User.default.createTables();
    const user = new _User.default({
      firstName: 'Akia',
      lastName: 'Vongdara',
      email: 'vongdarakia@gmail.com'
    });
    console.log('saving', {
      user
    }); // console.log('table created', data);

    const saved = await user.save();
    console.log({
      saved
    });
    const newUser = await user.getById(user.id);

    _User.default.docClient.scan({
      TableName: _User.default.table
    }, (err, data) => {
      console.log({
        err,
        data
      });
      console.log(data.Items);
    });

    console.log('bam bam', {
      newUser
    });
  } catch (err) {
    console.log(err);
  } // Model.ddb.listTables({ Limit: 10 }, function(err, data) {
  //     console.log('wlkjas isslj');
  //     if (err) {
  //         console.log('Error', err.code);
  //     } else {
  //         console.log('Table names are ', data.TableNames);
  //     }
  // });


  console.log('db');
};

dbInit();