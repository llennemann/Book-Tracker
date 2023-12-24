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
router.post('/addbook', async (req, res) => {
    console.log(req.body);
    const { title, author, image } = req.body;
    
    const foundBk = await db.bookdb.collection('books').findOne( {title: title, author: author} );

    console.log(foundBk);

    if (foundBk == null) {
        const result = await db.bookdb.collection('books').insertOne({
            title: title,
            author: author,
            image: image
        });
        res.sendStatus(200);
    }
    else {
        res.sendStatus(404); // means book is already in database
    }
})

// remove a book from the database
// input: title and author should be the same
// delete first document that matches the condition
router.post('/deletebook', async (req, res) => {
    const { title, author } = req.body;

    const result = await db.bookdb.collection('books').deleteOne({ title: title, author: author });
    if (result['deletedCount'] > 0) {
        res.sendStatus(200);
    }
    else {
        res.sendStatus(404); // error in deleting
    }
})

module.exports = router;