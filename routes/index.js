var express = require('express');
var router = express.Router();
var middleware = require('../middleware/user');
var mapcontroller = require('../controllers/MapController');

router.get('/', middleware.ensureAuthenticated,function(req, res){
    res.render('index',{
        isAuthenticated: req.isAuthenticated(),
        user: req.user
    });
});

router.post('/',mapcontroller.postData);

module.exports = router;