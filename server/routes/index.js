/* 
  COMP 229 - Web Application Development (SEC. 003)
  Fall 2020 - Assignment 2
  Thiago Luiz Batista - Student Number 301110966
  Work completed on xx/10/2020
  index.js Assignment 2 File
*/

let express = require('express');
let router = express.Router();

let Business = require('../models/business');

let indexController = require('../controllers/index');

/* GET default home page. */
router.get('/', indexController.DisplayHomePage);

/* GET home page. */
router.get('/home', indexController.DisplayHomePage );

/* GET About page. */
router.get('/about', indexController.DisplayAboutPage );

/* GET Projects page. */
router.get('/projects', indexController.DisplayprojectsPage );

/* GET Services page. */
router.get('/services', indexController.DisplayServicesPage );

/* GET Contact Us page. */
router.get('/contact', indexController.DisplayContactPage );

/* GET Business Contacts page. */
router.get('/business', function (req, res, next) {
  
  Business.Model.find( (err, data) =>{
    if(err){
      console.error(err);
      res.end()
    }
   
    console.table(data, ['contactLastName', 'contactFirstName','contactNumber', 'emailAddress']);

    res.render('business', {
      title: 'Business Contacts', business: data });
  });
});

module.exports = router;