const express = require('express');
//const path = require('path');

const router = express.Router();
const users = require('../users.json');

router.get('/list', (req, res, next) => {
  //res.sendFile(path.join(__dirname, '..', 'views', 'user.html'), users)
  //users.push({ id: 5, name: 'Yen', address: 'test' });
  res.render('user', { users: users });
});

router.get('/add', (req, res, next) => {
  //res.sendFile(path.join(__dirname, '..', 'views', 'adduser.ejs'));
  res.render('adduser');
});

router.post('/save', (req, res, next) => {
  const { name, address } = req.body;
  if (name && address) {
    users.push({
      id: users.length + 1,
      name: name,
      address: address
    });
  } else {
    throw new Error('BROKEN');
  }
  res.redirect('/users/list');
});

module.exports = router;