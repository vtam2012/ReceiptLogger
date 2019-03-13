// const { books } = require("./data");

// var AWS = require('aws-sdk');
// // Set the region
// AWS.config.update({region: 'REGION'});

// // Create the DynamoDB service object
// var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

// var params = {
//   TableName: process.argv[2]
// };

import Model from '../_data/Model';
class User extends Model {
    static table = 'rl_local_users';

    constructor(props) {
        super(props);
        const { firstName, lastName, email } = props || {};

        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    static all() {
        return [{ name: 'Akia' }, { name: 'Lev' }];
    }
    static email() {
        return 'shit@email.com';
    }

    static createTables() {
        var params = {
            AttributeDefinitions: [
                {
                    AttributeName: 'id',
                    AttributeType: 'S',
                },
                // {
                //     AttributeName: 'firstName',
                //     AttributeType: 'S',
                // },
                // {
                //     AttributeName: 'lastName',
                //     AttributeType: 'S',
                // },
                // {
                //     AttributeName: 'email',
                //     AttributeType: 'S',
                // },
            ],
            KeySchema: [
                {
                    AttributeName: 'id',
                    KeyType: 'HASH',
                },
                // {
                //     AttributeName: 'firstName',
                //     KeyType: 'RANGE',
                // },
                // {
                //     AttributeName: 'lastName',
                //     KeyType: 'RANGE',
                // },
                // {
                //     AttributeName: 'email',
                //     KeyType: 'RANGE',
                // },
            ],
            TableName: User.table,
        };
        return super.createTable(params);
    }

    getById(id) {
        var params = {
            TableName: User.table,
            Key: {
                id: { S: id },
            },
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
                email: this.email,
            },
        };

        console.log('User (saving)..');
        return super.save(params);
    }
}

export default User;
