const express = require('express');
//const path = require('path');

const router = express.Router();


router.get('/', (req, res, rext) => {
  //res.sendFile(path.join(__dirname, '..', 'views', 'index.ejs'));
  res.render('index');
});


module.exports = router;