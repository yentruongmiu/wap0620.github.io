const books = require('../book.json') || [];

class Book {
  constructor(bookId, title, author) {
    this.bookId = bookId;
    this.title = title;
    this.author = author;
  }

  save() {
    this.bookId = books.length + 1;
    books.push(this);
    return this;
  }

  static findById(bookId) {
    const book = books.find(b => b.bookId == bookId);
    if (book) {
      return book;
    } else {
      return { error: `Book not found with id ${bookId}` };
    }
  }

  static findByAuthorFirstname(firstname) {
    let result;
    if (firstname) {
      result = books.filter(b => b.author.firstname.toLowerCase().includes(firstname.toLowerCase()));
    } else {
      result = books;
    }
    
    if (result.length) {
      return result;
    } else {
      return { error: `Book not found with author's firstname contains ${firstname}` };
    }
  }
}

module.exports = Book;