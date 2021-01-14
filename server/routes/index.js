const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: "GodisLove*7",
  database: 'bank-trade'
});

connection.connect(function(err) {
  if (err) {
    console.error(err.message);
    return;
  }
  console.log('Yay! You are connected to the database!');
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('working api');
});

module.exports = router;
