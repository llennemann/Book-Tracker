//import { db, connectToDb} from './db.js';
// Node.js module format: CommonJS format
// Node.js comes with built-in modules. need to require modules to use
db = require('./db.js')

const express = require("express")
const cors = require("cors")
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// set up routes
const book = require('./routes/book');
const gBook = require('./routes/gBook');

app.use("/book", book);
app.use("/gBook", gBook);

db.connectToDb(() => {
    console.log('Connected to MongoDB database');
    app.listen(8000, () => {
        console.log('Server is listening on port 8000');
    });
});