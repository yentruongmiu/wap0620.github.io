const express = require('express');

const bookController = require('../controllers/bookController');
const router = express.Router();

router.get('/books/:bookId', bookController.findBookById);

router.post('/books', bookController.saveBook);

router.get('/books', bookController.findBookByAuthorFirstname);

module.exports = router;