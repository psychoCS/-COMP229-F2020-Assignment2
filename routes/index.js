let express = require('express');
let router = express.Router();

/* GET home page. */
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

/* GET Products page. */
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


module.exports = router;