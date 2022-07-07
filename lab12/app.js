const express = require('express');
const bp = require('body-parser');
const path = require('path');

const homeRouter = require('./routes/home');
const userRouter = require('./routes/user');
const productRouter = require('./routes/product');

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use('/resources', express.static(path.join(__dirname, 'public', 'assets')));

//home routes
app.use(homeRouter);
//user routes
app.use('/users', userRouter);
//product routes
app.use('/products', productRouter);

//error handling

function errorHandler (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('error', { error: err })
}
app.use(errorHandler);

//customize 404 page
app.use((req, res, next) => {
  //res.status(404).sendFile(path.join(__dirname, 'public', 'views', '404.ejs'));
  res.status(404);
  res.render('404');
});

app.listen(port, () => console.log(`Server is running on ${port}`));