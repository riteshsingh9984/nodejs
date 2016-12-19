
var EmployeeRepository = require("../repositories/employeeRepository");

var employeeRepositoryInstance = new EmployeeRepository();

var employeeService = function(){

		var self = this;

		self.saveEmployee = function(dataSave) {

			employeeRepositoryInstance.saveEmployee(dataSave);

			return "200";
		}
}

module.exports = employeeService;
