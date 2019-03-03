const employee = require('../models/employee');

const employeeCtrl = {};

employeeCtrl.getEmployees = (req, res) => {
    employee.find();
}

employeeCtrl.getEmployee = (req, res) => {
    res.json({
        status: 'Employee goes here'
    });
}

employeeCtrl.createEmployee = function(){

}

employeeCtrl.editEmployee = function(){

}

employeeCtrl.deleteEmployee = function(){

}

module.exports = employeeCtrl;