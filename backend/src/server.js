// import express from "express";
// import cors from 'cors';
const express = require("express")
const cors = require("cors")
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/book", require("./routes/book"));

// remove a book from the database

app.listen(8000, () => {
    console.log('Server is listening on port 8000');
});