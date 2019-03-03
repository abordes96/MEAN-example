const Employee = require('../models/employee');

const employeeCtrl = {};

employeeCtrl.getEmployees = async(req, res) => {
     const employees = await Employee.find();
     res.json(employees);
};

employeeCtrl.getEmployee = async(req, res) => {
    const employee = await Employee.findById(req.params.id);
    res.json(employee);
};

employeeCtrl.createEmployee = async(req, res) => {
    const employee = new Employee(req.body);
    await employee.save();
    res.json({
        "status":"Employee saved"
    });
};

employeeCtrl.editEmployee = async(req, res) => {
    const {id} = req.params;
    const employee = {
        "name":req.body.name,
        "position":req.body.position,
        "office":req.body.office,
        "salary":req.body.salary
    };
    //Con new: true si el empleado no existe lo crea
    await Employee.findByIdAndUpdate(id,{$set:employee},{new: true});
    res.json({
        "status":"Employee updated"
    });
}

employeeCtrl.deleteEmployee =  async (req,res) => {
    await Employee.findByIdAndDelete(req.params.id);
    res.json({
        "status":"Employee deleted"
    });
}

module.exports = employeeCtrl;