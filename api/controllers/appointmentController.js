// 'use strict';
// var mongoose = require('mongoose'),
//   Appointment = mongoose.model('Appointments');

// exports.list_all_appointments = function(req, res) {
//   Appointment.find({}, function(err, appointment) {
//     if (err)
//       res.send(err);
//     res.json(appointment);
//   });
// };

// exports.create_a_appointment = function(req, res) {
//   var new_appointment = new Appointment(req.body);
//   new_appointment.save(function(err, appointment) {
//     if (err)
//       res.send(err);
//     res.json(appointment);
//   });
// };


// exports.read_a_appointment = function(req, res) {
//   Appointment.findById(req.params.appointmentId, function(err, appointment) {
//     if (err)
//       res.send(err);
//     res.json(appointment);
//   });
// };

// exports.update_a_appointment = function(req, res) {
//   Appointment.findOneAndUpdate({_id: req.params.appointmentId}, req.body, {new: true}, function(err, appointment) {
//     if (err)
//       res.send(err);
//     res.json(appointment);
//   });
// };

// exports.delete_a_appointment = function(req, res) {
//   Appointment.remove({
//     _id: req.params.appointmentId
//   }, function(err, appointment) {
//     if (err)
//       res.send(err);
//     res.json({ message: 'Appointment successfully deleted' });
//   });
// };

