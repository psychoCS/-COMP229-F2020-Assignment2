/* 
  COMP 229 - Web Application Development (SEC. 003)
  Fall 2020 - Assignment 2
  Thiago Luiz Batista - Student Number 301110966
  Work completed on 09/10/2020
  business index.js Assignment 2 File
*/

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

// create the User Model Instance
let userModel = require('../models/user');
let User = userModel.User; 

module.exports.DisplayHomePage = (req, res, next) => {
  res.render('home', { title: 'Home',
  displayName: req.user ? req.user.displayName : '' });
    }   

module.exports.DisplayAboutPage = (req, res, next) => {
  res.render('about', { title: 'About',
  displayName: req.user ? req.user.displayName : '' });  
    }

module.exports.DisplayprojectsPage = (req, res, next) => {
  res.render('projects', { title: 'Projects',
  displayName: req.user ? req.user.displayName : '' });
    }

module.exports.DisplayServicesPage = (req, res, next) => { 
  res.render('services', { title: 'Services',
  displayName: req.user ? req.user.displayName : '' });
    }

module.exports.DisplayContactPage = (req, res, next) => {
  res.render('contact', { title: 'Contact ', 
  displayName: req.user ? req.user.displayName : '' });
    }


module.exports.DisplayLoginPage = (req, res, next) => {
  // check if the user is already logged in
    if(!req.user){
      res.render('auth/login', 
      {
        title: 'Login',
        messages: req.flash('loginMessage'),
        displayName: req.user ? req.user.displayName : ''
      });
    }
    return res.redirect('/');
  }

module.exports.ProcessLoginPage = (req, res, next) => {
  passport.authenticate('local',
    (err, user, info) => {
      // If server error
      if (err) {
        return next(err);
      }

      //If login erro
      if (!user) {
        req.flash('loginMessage', 'Authentication Error');
        return res.redirect('login');
      }

      req.login(user, (err) => {
        // server error
        if (err) {
          return next(err);
        }
      
        return res.redirect('/business');
      });

    })(req, res, next);
}

module.exports.DisplayRegisterPage = (req, res, next) => {
  // check if the user is already logged in
    if(!req.user)
    {
      res.render('auth/login', 
      {
        title: 'Register',
        messages: req.flash('registerMessage'),
        displayName: req.user ? req.user.displayName : ''
      });
    }
    return res.redirect('/');
    }

module.exports.ProcessRegisterPage = (req, res, next) => {
  // instantiate a new user object

  let newUser = new User({
    username: req.body.username,
    email: req.body.email,
    displayName: req.body.displayName
  });

  user.register(newUser, req.body.password, (err) => { 
    if (err) {
      console.log('Erro: Inserting New User');
      if (err.name == "UserExistsError") {
        req.flash('registerMessage', 'Registration Error');
        console.log('Error: User Already Exists');
      }
      return res.redirect('/register');
    }
    else
    {
    // no direct error options
      
    // 
      
    //
      return passport.authenticate('local')(req, res, () => {
        res.redirect('/business');
      });
    }
  });
}

module.exports.PerformLogout = (req, res, next) => {
  req.logout();
  res.redirect('/login');
  }