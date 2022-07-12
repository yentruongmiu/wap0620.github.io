const express = require('express');
const cors = require('cors');

const bookRouter = require('./routes/bookRouter');
const app = express();
app.use(cors());
app.use(express.json());


app.use(bookRouter);

app.listen(3000, () => console.log('Server is running on port 3000'));
