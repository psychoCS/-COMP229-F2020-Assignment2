/* 
  COMP 229 - Web Application Development (SEC. 003)
  Fall 2020 - Assignment 2
  Thiago Luiz Batista - Student Number 301110966
  Work completed on 09/10/2020
  business index.js Assignment 2 File
*/

let express = require('express');
let router = express.Router();

module.exports.DisplayHomePage = (req, res, next) => {
  res.render('home', { title: 'Home' });
    }   

module.exports.DisplayAboutPage = (req, res, next) => {
  res.render('about', { title: 'About' });  
    }

module.exports.DisplayprojectsPage = (req, res, next) => {
  res.render('projects', { title: 'Projects' });
    }

module.exports.DisplayServicesPage = (req, res, next) => { 
  res.render('services', { title: 'Services' });
    }

module.exports.DisplayContactPage = (req, res, next) => {
  res.render('contact', { title: 'Contact ' });
    }