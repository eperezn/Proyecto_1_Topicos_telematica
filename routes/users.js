var express = require('express');
var LocalStrategy = require('passport-local').Strategy;
var passport = require('passport');
var router = express.Router();
var Usercontroller = require('../controllers/UserController');

var User = require('../models/user');

passport.use(new LocalStrategy(
    function(username, password, done){
        User.getUserByUsername(username, function(err, user){
            if(err) throw err;
            if(!user){
                return done(null, false, {message: 'Unknown User'});
            }

            User.comparePassword(password, user.password, function(err, isMatch){
                if(err) throw err;
                if(isMatch){
                    return done(null, user);
                }else{
                    return done(null, flase, {message: 'Invalid password'});
                }
            });
        });
    }));

passport.serializeUser(function(user, done){
    done(null, user.id);
});

passport.deserializeUser(function(id, done){
    User.getUserById(id, function(err, user){
        done(err, user);
    });
});

router.get('/register', Usercontroller.getRegister);
router.get('/login', Usercontroller.getLogin);
router.post('/register', Usercontroller.postRegister);
router.post('/login', 
            passport.authenticate('local', {successRedirect:'/', failureRedirect:'/users/login', failureFlash: true}),
            Usercontroller.getLogin);
router.get('/logout', Usercontroller.getLogout);

module.exports = router;