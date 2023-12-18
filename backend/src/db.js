require('dotenv').config()
var MongoClient = require('mongodb').MongoClient;

let db;

async function connectToDb(cb) {
    const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.qlnf13o.mongodb.net/?retryWrites=true&w=majority`;
    const client = new MongoClient(uri); // connect w mongodb atlas database
    await client.connect();

    db = client.db('book-db');
    exports.bookdb = db;
    cb();
}

exports.connectToDb = connectToDb;