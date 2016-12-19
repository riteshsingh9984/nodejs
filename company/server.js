var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies

var EmployeeService = require("./services/employeeService");

var employeeServiceInstance = new EmployeeService();

// POST http://localhost:8080/api/employee
// parameters sent with 
app.post('/api/employee', function(req, res) {
    var user_id = req.body.id;
    var token = req.body.name;
    var geo = req.body.address;


    employeeServiceInstance.saveEmployee(req.body);
    
    res.send(user_id + ' ' + token + ' ' + geo);
});

// http://localhost:8081/api/employees?id=4&token=sdfa3&geo=us
app.get('/api/employees', function(req, res) {
  var user_id = req.param('id');
  var token = req.param('token');
  var geo = req.param('geo');  

  res.send(user_id + ' ' + token + ' ' + geo);
});

// http://localhost:8081/api/employee/1
  app.get('/api/employee/:employeeId', function(req, res) {
    res.send(req.params.version);
  });

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)

})