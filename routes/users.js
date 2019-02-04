const express = require('express');
const router = express.Router();
const userController = require('../app/api/controllers/users');

router.post('/register', userController.create);
router.post('/login', userController.authenticate);

router.get('/register',userController.loadRegister);
router.get('/login',userController.loadAuthenticate);
router.get('/principalPage',userController.loadUserPage);
router.get('/logout',userController.logOut);
module.exports = router;