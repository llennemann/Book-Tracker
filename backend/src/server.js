import express from "express";
import { MongoClient } from "mongodb";
import cors from 'cors';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// get books in the database
app.get('/getlist', async (req, res) => {
    const client = new MongoClient('mongodb://127.0.0.1:27017');
    await client.connect();

    const db = client.db('book-db');
    const allBooks = await db.collection('books').find({}).toArray();
    res.send(allBooks);
})

// add a book into the database
// todo - beware of duplicates????
app.post('/addbook', async (req, res) => {

    console.log("IM HERE");
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

app.listen(8000, () => {
    console.log('Server is listening on port 8000');
});