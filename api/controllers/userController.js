'use strict';
var mongoose = require('mongoose'),
  User = mongoose.model('Users');

exports.list_all_users = function(req, res) {
  User.find({}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.create_a_user = function(req, res) {
  var new_user = new User(req.body);
  new_user.save(function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.login_a_user = function(req, res) {
  // User.find(req.params.userId, function(err, user) {
    User.find(req, function(err, user) {
    if (err)
      res.send(err);
    if (req.body.email === res.body.email && req.body.password === res.body.password) {
      res.json(user);
    }
  });
};

exports.get_user_by_id = function(req, res) {
  User.findById(req.params.userId, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};