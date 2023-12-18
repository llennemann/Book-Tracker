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
    console.log(req.body);
    const { title, author, image } = req.body;
    
    const result = await db.bookdb.collection('books').insertOne({
        title: title,
        author: author,
        image: image
    });
    res.sendStatus(200);
})

// remove a book from the database

module.exports = router;