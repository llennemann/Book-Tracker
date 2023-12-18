const express = require("express");

const app = express();
const router = express.Router();

router.get('/api/searchgbooks', async (req, res) => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTitle}&key=${process.env.REACT_APP_API_KEY}`)

})

module.exports = router;