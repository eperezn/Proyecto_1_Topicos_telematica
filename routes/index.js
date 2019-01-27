var express = require('express');
var router = express.Router();
var middleware = require('../middleware/user')

router.get('/', middleware.ensureAuthenticated,function(req, res){
    res.render('index');
});

module.exports = router;