import uuid from 'uuid';
var AWS = require('aws-sdk');

let awsConfig = {
    region: 'us-east-1',
    endpoint: 'http://localhost:8000',
};
AWS.config.update(awsConfig);

class Model {
    static ddb = new AWS.DynamoDB();
    static docClient = new AWS.DynamoDB.DocumentClient();

    constructor(props) {
        this.id = uuid.v1();
    }
    static createTable(params) {
        var modifiedParams = {
            ...params,
            ProvisionedThroughput: {
                ReadCapacityUnits: 5,
                WriteCapacityUnits: 5,
            },
            StreamSpecification: {
                StreamEnabled: false,
            },
        };
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
            Model.ddb.getItem(params, function(err, data) {
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
        const modifiedParams = {
            ...params,
            Item: {
                ...params.Item,
                id: uuid.v1(),
            },
        };
        console.log('saving item', { modifiedParams });
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

export default Model;
