let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let Model = mongoose.Model;

let BusinessModel = new Schema({
    contactLastName: String,
    contactFirstName: String,
    contactNumber: String,
    emailAddress: String
},
    {
        collection: 'business'
    });

    module.exports.Model = Model()