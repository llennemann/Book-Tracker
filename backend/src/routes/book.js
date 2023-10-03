const express = require("express");
var mongo = require('mongodb');

const app = express();
const router = express.Router();

// get books in the database
router.get('/getlist', async (req, res) => {
    const client = new MongoClient('mongodb://127.0.0.1:27017');
    await client.connect();

    const db = client.db('book-db');
    const allBooks = await db.collection('books').find({}).toArray();
    res.send(allBooks);
})

// add a book into the database
// todo - beware of duplicates????
router.post('/addbook', async (req, res) => {
    const client = new MongoClient('mongodb://127.0.0.1:27017');
    await client.connect();

    const db = client.db('book-db');
    console.log(req.body);
    const { title, author, image } = req.body;
    
    const result = await db.collection('books').insertOne({
        title: title,
        author: author,
        image: image
    });
    res.sendStatus(200);
})

module.exports = router;