const locationModel = require('../models/location');

module.exports = {
 save: function(req, res, next) {
   if(!req.isAuthenticated()) {
      res.redirect('/')
    } else {
      var date = new Date();
      var hour = date.getHours() + ":"+date.getMinutes();
         
      locationModel.create({ username: req.session.data.username, 
         trackname: req.body.trackname,
         latitude: req.body['latitude[]'], 
         longitude: req.body['longitude[]'], 
         hour: hour, 
         date: date.toDateString()}, 
         function (err, result) {
         if (err){ 
            next(err);
            }else
            res.json({status: "success"});
         });
    }
     
 },

 search: function(req, res, next) {
    locationModel.find({username:req.session.data.username}, function(err, userInfo){
     if (userInfo == null || err) {
         next("Username not found!");
     } else {
        res.json({status:"success", data:userInfo});
     }
    });
 },
 searchname: function(req,res,next){
   locationModel.find({trackname:req.params.id}, function(err, userInfo){
      if (userInfo == null || err) {
          next("Username not found!");
      } else {
         res.json({status:"success", data:userInfo});
      }
     });
 }
}