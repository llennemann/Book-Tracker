const express = require("express");
const axios = require('axios');
// const fetch = require("node-fetch");

require('dotenv').config()


const router = express.Router();

router.post('/searchgbooks', async (req, res) => {
    const { search } = req.body;

    const url = `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${process.env.REACT_APP_API_KEY}`;
    axios.get(url)
    .then((result) => {
        res.send(result.data);
    })
})

module.exports = router;