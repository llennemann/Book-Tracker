const express = require("express");
var mongo = require('mongodb');
var db = require('../db.js')

const router = express.Router();

// get books in the database
// the route is book/getlist
router.get('/getlist', async (req, res) => {
    const allBooks = await db.bookdb.collection('books').find({}).toArray();
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

// remove a book from the database

module.exports = router;