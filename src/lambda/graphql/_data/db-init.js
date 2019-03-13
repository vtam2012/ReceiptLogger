import AWS from 'aws-sdk';
import User from '../users/User';
import Model from './Model';

let awsConfig = {
    region: 'us-east-1',
    endpoint: 'http://localhost:8000',
};
AWS.config.update(awsConfig);

const deleteTables = () => {
    return new Promise((resolve, reject) => {
        const params = {
            TableName: User.table,
        };
        Model.ddb.deleteTable(params, (err, data) => {
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
        await User.createTables();

        const user = new User({
            firstName: 'Akia',
            lastName: 'Vongdara',
            email: 'vongdarakia@gmail.com',
        });

        console.log('saving', { user });
        // console.log('table created', data);

        const saved = await user.save();
        console.log({ saved });
        const newUser = await user.getById(user.id);

        User.docClient.scan(
            {
                TableName: User.table,
            },
            (err, data) => {
                console.log({ err, data });
                console.log(data.Items);
            },
        );

        console.log('bam bam', { newUser });
    } catch (err) {
        console.log(err);
    }

    // Model.ddb.listTables({ Limit: 10 }, function(err, data) {
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
