var express = require('express');
var router = express.Router();

var User = require('../models/location');

module.exports= {
    postData:  function(req,res){
        res.json(req.body);
    }
}
