const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let _db;
//'mongodb+srv://jocelin_fowe:ICEstorm123@starter.ipfyt.mongodb.net/learnNode?retryWrites=true&w=majority'
const mongoConnect = (callback) => {
    MongoClient.connect('mongodb://127.0.0.1:27017', {useNewUrlParser: true, useUnifiedTopology: true}).
    then(client => {
        console.log('connected');
        _db = client.db('learn_node');
        callback();
    }).catch(err => {
        console.log(err);
        throw err;
    });
};

const getDb = () => {
    if(_db) {
        return _db;
    }
    throw `No database found`;
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
