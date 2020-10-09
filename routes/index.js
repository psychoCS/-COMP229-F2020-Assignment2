let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Home'
  });
});

/* GET home page. */
router.get('/home', function (req, res, next) {
  res.render('index', {
    title: 'Home'
  });
});

/* GET About page. */
router.get('/about', function (req, res, next) {
  res.render('index', {
    title: 'About'
  });
});

/* GET Products page. */
router.get('/projects', function (req, res, next) {
  res.render('projects', {
    title: 'Projects'
  });
});

/* GET Services page. */
router.get('/services', function (req, res, next) {
  res.render('index', {
    title: 'Services'
  });
});

/* GET Contact Us page. */
router.get('/contact', function (req, res, next) {
  res.render('contact', {
    title: 'Contact '
  });
});


module.exports = router;