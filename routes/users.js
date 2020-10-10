/* 
  COMP 229 - Web Application Development (SEC. 003)
  Fall 2020 - Assignment 1
  Thiago Luiz Batista - Student Number 301110966
  Work completed on 09/10/2020
  users.js Assignment 1 File
*/

let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('Placeholder');
});

module.exports = router;