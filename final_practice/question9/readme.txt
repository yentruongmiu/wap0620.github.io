Use Node.js, Express.js and other necessary JS APIs to implement a RESTful Application which manages books.
All books are stored in in-memory database, the data in book.json
Define some APIs:

1. Get http://localhost:3000/books/{bookId} - this API return a single book based on book Id.

2. Post http://localhost:3000/books - this API saves a single book into database. The book id automatically generated on the server side by increment 1 each time.

3. Get http://localhost:3000/books?firstname={firstname} - this API returns books which their author's firstname contains passed query string, case insensitive.