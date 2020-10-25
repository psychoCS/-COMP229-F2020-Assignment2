/* 
  COMP 229 - Web Application Development (SEC. 003)
  Fall 2020 - Assignment 2
  Thiago Luiz Batista - Student Number 301110966
  Work completed on 25/10/2020
  business.js Assignment 2 File
*/

let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let Model = mongoose.model;

let BusinessSchema = new Schema({
    contactLastName: String,
    contactFirstName: String,
    contactNumber: String,
    emailAddress: String
},
    { 
        collection: 'business'
    });

module.exports.Model = Model('Business', BusinessSchema);