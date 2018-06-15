'use strict';
module.exports = function (app) {
  var todoList = require('../controllers/todoListController');
  var user = require('../controllers/userController');
  var appointment = require('../controllers/appointmentController');

  // todoList Routes
  app.route('/tasks')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task);

  app.route('/tasks/:taskId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);

  // user Routes
  app.route('/users')
    .get(user.list_all_users)
    .post(user.create_a_user);

  // app.route('/users/:userId')
  //   .get(user.read_a_task)
  //   .put(user.update_a_task)
  //   .delete(user.delete_a_task);

  app.route('/users/login')
    .get(user.login_a_user)
    .post(user.login_a_user);

  // appointment Routes
  // app.route('/appointments')
  //   .get(appointment.list_all_appointments)
  //   .post(appointment.create_a_appointment);

  // app.route('/appointments/:appointmentId')
  //   .get(appointment.read_a_task)
  //   .put(appointment.update_a_task)
  //   .delete(appointment.delete_a_task);
};


