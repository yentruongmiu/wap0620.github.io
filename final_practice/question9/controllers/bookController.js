const Book = require('../models/book');

exports.findBookById = (req, res) => {
  res.status(200).json(Book.findById(req.params.bookId));
}

exports.saveBook = (req, res) => {
  const book = new Book(null, req.body.title, req.body.author).save();
  res.status(200).json(book);
}

exports.findBookByAuthorFirstname = (req, res) => {
  res.status(200).json(Book.findByAuthorFirstname(req.query.firstname));
}

