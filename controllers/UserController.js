var bcrypt = require('bcryptjs');
var express = require('express');
var router = express.Router();

var User = require('../models/user');

module.exports = {
    getRegister: function(req, res){
        res.render('register');
    },
    getLogin: function(req, res){
        res.render('login');
    },
    postRegister: function(req, res){
        var email = req.body.email;
        var username = req.body.username;
        var password = req.body.password;
        var password2 = req.body.password2;
    
        req.checkBody('email', 'Email is required').notEmpty();
        req.checkBody('email', 'Email is not valid').isEmail();
        req.checkBody('username', 'Username is required').notEmpty();
        req.checkBody('password', 'Password is required').notEmpty();
        req.checkBody('password2', 'Passwords do not match').equals(req.body.password);
    
        var errors = req.validationErrors();
    
        if(errors){
            res.render('register',{
                errors:errors
            });
        } else{
            var newUser = new User({
                email: email,
                username: username,
                password: password
            });
    
            User.createUser(newUser, function(err, user){
                if(err) throw err;
                console.log(user);
            });
            req.flash('success-msg', 'You are registered and can now login');
            res.redirect('/users/login');
        }
    },
    postLogin: function(req, res){
                res.redirect('/');
    },
    getLogout: function(req, res){
        req.logOut();
        req.flash('success_msg', 'You are logged out');
        res.redirect('/users/login');
    }
}