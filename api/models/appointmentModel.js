'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var AppointmentSchema = new Schema({
  Created_date: {
    type: Date,
    default: Date.now
  },
  name: {
    type: String,
    required: 'Kindly enter the name of the appointment'
  },
  description: {
    type: String,
  },
  hour: {
    type: Number,
    min: 0,
    max: 24,
    required: 'Kindly enter the hour of the appointment',
  },
  allDay: {
    type: Boolean,
  },
  important: {
    type: Boolean,
  },
  tag: {
    type: [{
      type: String,
      enum: ['evento', 'projeto', 'tarefa']
    }],
    default: ['evento']
  }
});

module.exports = mongoose.model('Appointments', AppointmentSchema);