const express = require('express');
//const path = require('path');
//const fs = require('fs');

const router = express.Router();
const products = require('../products.json');

router.get('/list', (req, res, next) => {
  //res.sendFile(path.join(__dirname, '..', 'views', 'product.html'));
  res.render('product', { products: products });
});

router.get('/add', (req, res, next) => {
  //res.sendFile(path.join(__dirname, '..', 'views', 'addproduct.html'));
  res.render('addproduct');
});

router.post('/save', (req, res, next) => {
  const { name, manufacture } = req.body;
  if (name && manufacture) {
    products.push({
      id: products.length + 1,
      name: name,
      manufacture: manufacture
    });
  } else {
    throw new Error('BROKEN');
  }
  res.redirect('/products/list');
});


module.exports = router;