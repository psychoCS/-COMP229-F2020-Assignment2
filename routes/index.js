/* 
  COMP 229 - Web Application Development (SEC. 003)
  Fall 2020 - Assignment 1
  Thiago Luiz Batista - Student Number 301110966
  Work completed on 09/10/2020
  index.js Assignment 1 File
*/

let express = require('express');
let router = express.Router();

let mongoose = require('mongoose');

let Business = require('../models/business');

/* GET default home page. */
router.get('/', function (req, res, next) {
  res.render('home', {
    title: 'Home'
  });
});

/* GET home page. */
router.get('/home', function (req, res, next) {
  res.render('home', {
    title: 'Home'
  });
});

/* GET About page. */
router.get('/about', function (req, res, next) {
  res.render('about', {
    title: 'About'
  });
});

/* GET Projects page. */
router.get('/projects', function (req, res, next) {
  res.render('projects', {
    title: 'Projects'
  });
});

/* GET Services page. */
router.get('/services', function (req, res, next) {
  res.render('services', {
    title: 'Services'
  });
});

/* GET Contact Us page. */
router.get('/contact', function (req, res, next) {
  res.render('contact', {
    title: 'Contact '
  });
});

/* GET Business Contacts page. */
router.get('/business', function (req, res, next) {
  
  Business.Model.find()
  
  res.render('business', {
    title: 'Business Contacts'
  });
});


module.exports = router;