/* 
  COMP 229 - Web Application Development (SEC. 003)
  Fall 2020 - Assignment 2
  Thiago Luiz Batista - Student Number 301110966
  Work completed on 25/10/2020
  business.js Assignment 2 File
*/

let express = require('express');
let Business = require('../models/business');

// Display the Business Contact List 
module.exports.DisplayBusinessList = (req, res, next) => {  
    // If there is an error console it
    Business.Model.find( (err, data) =>{
    if(err){
      console.error(err);
      res.end()
    }
   
    // Otherwise render the DB IF logged in
    console.table(data, ['contactLastName', 'contactFirstName','contactNumber', 'emailAddress']);
    res.render('business', {
        title: 'Business Contacts', business: data,
        displayName: req.user ? req.user.displayName : ''});
  });
}

// Display the Add Business Contact List with the same IF idea from above
module.exports.DisplayAddPage = (req, res, next) => {
  res.render('business', {
    title: 'Add Business Contact',
    displayName: req.user ? req.user.displayName : ''
  });
};

// Add to the DB the new Business contact
module.exports.ProcessAddPage = (req, res, next) => {
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
};

// Display the Edit Business Contact List with the same IF idea from above
module.exports.DisplayEditPage = (req, res, next) => {
    let id = req.params.id;

    Business.Model.findById(id, (err,BusinessToEdit) =>
    {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        res.render('business', {title: 'Edit Business Contact', 
        data:BusinessToEdit,
        displayName: req.user ? req.user.displayName : ''}) 
    });
};

// Edit one existing Business contact on the DB
module.exports.ProcessEditPage = (req, res, next) => {
    let id = req.params.id;
    let updatedBusiness = Business.Model({
        "_id": id,
        "contactLastName":req.body.contactLastName,
        "contactFirstName":req.body.contactFirstName,
        "contactNumber":req.body.contactNumber,
        "emailAddress":req.body.emailAddress
    });

    Business.Model.updateOne({_id: id}, updatedBusiness, (err) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        res.redirect('/business');
    });
}

// Delete one existing Business contact on the DB
module.exports.ProcessDeletePage = (req, res, next) => {
    let id = req.params.id;
    Business.Model.remove({_id: id}, (err) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        res.redirect('/business');
    });
}