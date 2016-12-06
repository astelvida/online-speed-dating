var db = require('../../config.js');
var User = require('../../models/userModel.js');

exports.signUpUser = function(req, res) {
  var username = req.body.username;

  User.findOne({username: username})
    .exec(function(err, user) {
      if (!user) {
        var newUser = new User ({
          username: username
        });
        newUser.save();
      } else {
        
        res.send(404, 'Username already exists');
      }
    });
};

exports.loginUser = function(req, res) {
  var username = req.body.username; //change me

  User.findOne({username: username})
    .exec(function(err, user) {
      if (!user) {

        res.send(404, 'Username does not exist');

      } else {
        res.status(200).send(user.data.username); 
      }
    });
};