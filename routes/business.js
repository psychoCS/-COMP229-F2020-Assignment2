/* 
  COMP 229 - Web Application Development (SEC. 003)
  Fall 2020 - Assignment 1
  Thiago Luiz Batista - Student Number 301110966
  Work completed on 09/10/2020
  business.js Assignment 1 File
*/

let express = require('express');
let router = express.Router();

let mongoose = require('mongoose');

let Business = require('../models/business');

/* GET Business Contacts page. */
router.get('/', function (req, res, next) {
  
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

/* GET Add page. */
router.get('/add', (req, res, next) => {
  res.render('business', {
    title: 'Add Business Contact'
  });
});

/* POST process the Add page. CREATE */
router.post('/add', (req, res, next) => {
    let business = Business.Model({
        "contactLastName":req.body.contactLastName,
        "contactFirstName":req.body.contactFirstName,
        "contactNumber":req.body.contactNumber,
        "emailAddress":req.body.emailAddress
    });

    Business.Model.create(business, (err, Business) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }    
        res.redirect('/business');
    });
});


/* GET Edit page */
router.get('/edit/:id', (req, res, next) => {
    let id = req.params.id;

    Business.Model.findById(id, (err,BusinessToEdit) =>
    {
        if(err)
        {
            console.log(err);
            res.end(err);
        }

        res.render('business', {title: 'Edit Business Contact', data:BusinessToEdit}) 
    });
});


/* POST process the Edit page */
router.post('/edit/:id', (req, res, next) => {
    let id = req.params.id;

});

/* GET process the Delete page */
router.get('/delete/:id', (req, res, next) => {
    let id = req.params.id;

});

module.exports = router;